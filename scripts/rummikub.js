const p1ScoreDisplay = document.getElementById("p1Score");
const p2ScoreDisplay = document.getElementById("p2Score");
const p3ScoreDisplay = document.getElementById("p3Score");
const p4ScoreDisplay = document.getElementById("p4Score");

const p1ScoreInput = document.getElementById("p1ScoreInput");
const p2ScoreInput = document.getElementById("p2ScoreInput");
const p3ScoreInput = document.getElementById("p3ScoreInput");
const p4ScoreInput = document.getElementById("p4ScoreInput");
const inputSection = document.getElementById("inputSection");

const player1box = document.getElementById("player1Box");
const player2box = document.getElementById("player2Box");
const player3box = document.getElementById("player3Box");
const player4box = document.getElementById("player4Box");

const editP1Name = document.getElementById("editP1Name");
const editP2Name = document.getElementById("editP2Name");
const editP3Name = document.getElementById("editP3Name");
const editP4Name = document.getElementById("editP4Name");
const main = document.getElementById("main");
var p1Name = "Player1"
var p2Name = "Player2"
var p3Name = "Player3"
var p4Name = "Player4"

const submit = document.getElementById("submit");
const undo = document.getElementById("undo");
const clear = document.getElementById("clear");
const restoredata = document.getElementById("restore");

var p1Score = 0;
var p2Score = 0;
var p3Score = 0;
var p4Score = 0;
var p1Total = 0;
var p2Total = 0;
var p3Total = 0;
var p4Total = 0;
var scoreList = [];
var scoreListRecord = [];
let restore = false;
let selectedPlayer = ""
let winner = ""
const dialogSection = document.querySelector(".dialog-section");
const players = document.querySelectorAll(".dialog-pName");
const keys = document.querySelectorAll(".key");
const output = document.querySelector(".output");
const dp1Score = document.getElementById("dp1Score");
const dp2Score = document.getElementById("dp2Score");
const dp3Score = document.getElementById("dp3Score");
const dp4Score = document.getElementById("dp4Score");
let pauseCheck = false;

dialogSection.style.display = "none";
let input = "";
for (let player of players){
    player.addEventListener("click",()=>{
        for (let player of players){player.classList.remove("selected");}
        if (winner != player.id){
            player.classList.add("selected");
            selectedPlayer = player.id;
            input = "";
            output.innerHTML = input;
        }
    })
}

for (let key of keys){
    const keyValue = key.dataset.key;
    key.addEventListener("click",()=>{
        if (keyValue == "confirm"){
            input = input.slice(0,-1);
            let result = eval(input);
            switch(selectedPlayer){
                case'dp1Name':
                dp1Score.innerHTML = result;
                break;            
                case'dp2Name':dp2Score.innerHTML = result;
                break;            
                case'dp3Name':dp3Score.innerHTML = result;
                break;            
                case'dp4Name':dp4Score.innerHTML = result;
                break;            
            }
            input = "";
            output.innerHTML = input;
        }
        else if(keyValue=="backspace") {
            input = input.slice(0,-1);
            plusindex = input.lastIndexOf("+");
            input = input.slice(0,plusindex+1);
            output.innerHTML = input;
        }
        else{
            input += keyValue;
            input += "+";
            output.innerHTML = input;
        }
    })
}


function reloadName(){
    for (var i=0;i<players.length;i++){
        console.log(i);
        players[0].innerHTML = "Alex";
        players[1].innerHTML = p2Name;
        players[2].innerHTML = p3Name;
        players[3].innerHTML = p4Name;
    }
}

restoredata.addEventListener("click",()=>{
    let text = "Are you sure to restore data?";
    if (confirm(text) == true) {
        restore = true;
        p1Score = localStorage.p1Score;
        p2Score = localStorage.p2Score;
        p3Score = localStorage.p3Score;
        p4Score = localStorage.p4Score;
        p1Name = localStorage.p1Name;
        p2Name = localStorage.p2Name;
        p3Name = localStorage.p3Name;
        p4Name = localStorage.p4Name;
        scoreListRecord = JSON.parse(localStorage.scoreListRecord);
        showScore();
        document.getElementById("p1Name").innerHTML = p1Name;
        document.getElementById("p1Namebtm").innerHTML = p1Name;
        document.getElementById("p2Name").innerHTML = p2Name;
        document.getElementById("p2Namebtm").innerHTML = p2Name;
        document.getElementById("p3Name").innerHTML = p3Name;
        document.getElementById("p3Namebtm").innerHTML = p3Name;
        document.getElementById("p4Name").innerHTML = p4Name;
        document.getElementById("p4Namebtm").innerHTML = p4Name;
        scoreboardDisplay();
    }
})
const eachRoundContainer = document.getElementById("eachRoundContainer");
eachRoundContainer.removeChild(eachRoundContainer.firstChild)

editP1Name.addEventListener("click",()=>{
    p1Name = prompt("Please enter a new Name.")
    document.getElementById("p1Name").innerHTML = p1Name;
    document.getElementById("p1Namebtm").innerHTML = p1Name; 
    localStorage.p1Name = p1Name;
    reloadName();
});
editP2Name.addEventListener("click",()=>{
    p2Name = prompt("Please enter a new Name.")
    document.getElementById("p2Name").innerHTML = p2Name;
    document.getElementById("p2Namebtm").innerHTML = p2Name; 
    localStorage.p2Name = p2Name;
    reloadName();
});
editP3Name.addEventListener("click",()=>{
    p3Name = prompt("Please enter a new Name.")
    document.getElementById("p3Name").innerHTML = p3Name;
    document.getElementById("p3Namebtm").innerHTML = p3Name; 
    localStorage.p3Name = p3Name;
    reloadName();
});
editP4Name.addEventListener("click",()=>{
    p4Name = prompt("Please enter a new Name.")
    document.getElementById("p4Name").innerHTML = p4Name;
    document.getElementById("p4Namebtm").innerHTML = p4Name; 
    localStorage.p4Name = p4Name;
    reloadName();
});

submit.addEventListener("click", roundFinish);
undo.addEventListener("click", ()=>{
    let text = "Are you sure to remove the last input?";
    if (confirm(text) == true) {
        scoreListRecord.pop();
        calTotal();
        eachRoundContainer.removeChild(eachRoundContainer.firstChild);
    } 
});



function roundFinish(){
    let confirmText = "Start next round?"
    if(dp1Score.innerHTML != ""&&dp2Score.innerHTML != ""&&dp3Score.innerHTML != ""&&dp4Score.innerHTML != ""){
        if (confirm(confirmText)==true){
            scoreList = [];
            scoreList.push(parseInt(dp1Score.innerHTML),
                           parseInt(dp2Score.innerHTML),
                           parseInt(dp3Score.innerHTML),
                           parseInt(dp4Score.innerHTML));
            scoreListRecord.push([parseInt(dp1Score.innerHTML),
                                  parseInt(dp2Score.innerHTML),
                                  parseInt(dp3Score.innerHTML),
                                  parseInt(dp4Score.innerHTML)]);
            calTotal();  
            dp1Score.innerHTML = "";
            dp2Score.innerHTML = "";
            dp3Score.innerHTML = "";
            dp4Score.innerHTML = "";
            scoreboardDisplay();
            dialogSection.style.display = 'none';
            localStorage.p1Score = p1Score;
            localStorage.p2Score = p2Score;
            localStorage.p3Score = p3Score;
            localStorage.p4Score = p4Score;
            localStorage.scoreListRecord = JSON.stringify(scoreListRecord);
            winner = "";
            timer.style.display = "grid";
        }
    }else{
        alert("Please enter score of all players.");
    }

}
// function roundFinish(){
//     scoreList = [];
//     scoreList.push(parseInt(p1ScoreInput.value),
//                     parseInt(p2ScoreInput.value),
//                     parseInt(p3ScoreInput.value),
//                     parseInt(p4ScoreInput.value));
//     scoreListRecord.push([parseInt(p1ScoreInput.value),
//         parseInt(p2ScoreInput.value),
//         parseInt(p3ScoreInput.value),
//         parseInt(p4ScoreInput.value)]);
//     calTotal();  
//     p1ScoreInput.value = "";
//     p2ScoreInput.value = "";
//     p3ScoreInput.value = "";
//     p4ScoreInput.value = "";
//     scoreboardDisplay();
//     document.querySelector('#inputSection').style.display = 'none';
//     localStorage.p1Score = p1Score;
//     localStorage.p2Score = p2Score;
//     localStorage.p3Score = p3Score;
//     localStorage.p4Score = p4Score;
//     localStorage.scoreListRecord = JSON.stringify(scoreListRecord);
// }

function calTotal(){
    p1Total = 0;
    p2Total = 0;
    p3Total = 0;
    p4Total = 0;
    for (var i = 0; i < scoreListRecord.length ; i++) {
        console.log(scoreListRecord[i]);
        p1Total += scoreListRecord[i][0];
        p2Total += scoreListRecord[i][1];
        p3Total += scoreListRecord[i][2];
        p4Total += scoreListRecord[i][3];
    }
    p1Score = 0-((p1Total - p2Total) + (p1Total-p3Total) + (p1Total-p4Total));
    p2Score = 0-((p2Total - p1Total) + (p2Total-p3Total) + (p2Total-p4Total));
    p3Score = 0-((p3Total - p1Total) + (p3Total-p2Total) + (p3Total-p4Total));
    p4Score = 0-((p4Total - p1Total) + (p4Total-p2Total) + (p4Total-p3Total));
    showScore();
}
function showScore(){
    p1ScoreDisplay.innerHTML = p1Score;
    p2ScoreDisplay.innerHTML = p2Score;
    p3ScoreDisplay.innerHTML = p3Score;
    p4ScoreDisplay.innerHTML = p4Score;
}

function scoreboardDisplay(){
    if (restore == true){
        for (var i = 0; i <scoreListRecord.length; i++){
            var eachRound = document.createElement("div");
            eachRound.classList.add("eachRound");
            const p1ScoreDisplay = document.createElement("div");
            p1ScoreDisplay.classList.add("scorebox");
            const p2ScoreDisplay = document.createElement("div");
            p2ScoreDisplay.classList.add("scorebox");
            const p3ScoreDisplay = document.createElement("div");
            p3ScoreDisplay.classList.add("scorebox");
            const p4ScoreDisplay = document.createElement("div");
            p4ScoreDisplay.classList.add("scorebox");
            const p1eachround = document.createTextNode(String(scoreListRecord.slice(i)[0][0]).padStart(2," "));
            const p2eachround = document.createTextNode(String(scoreListRecord.slice(i)[0][1]).padStart(2," "));
            const p3eachround = document.createTextNode(String(scoreListRecord.slice(i)[0][2]).padStart(2," "));
            const p4eachround = document.createTextNode(String(scoreListRecord.slice(i)[0][3]).padStart(2," "));
            p1ScoreDisplay.appendChild(p1eachround);
            p2ScoreDisplay.appendChild(p2eachround);
            p3ScoreDisplay.appendChild(p3eachround);
            p4ScoreDisplay.appendChild(p4eachround);
            eachRound.appendChild(p1ScoreDisplay);
            eachRound.appendChild(p2ScoreDisplay);
            eachRound.appendChild(p3ScoreDisplay);
            eachRound.appendChild(p4ScoreDisplay);
            eachRoundContainer.appendChild(eachRound);
            restore = false;
        }
    }else{
        var eachRound = document.createElement("div");
        eachRound.classList.add("eachRound");
        const p1ScoreDisplay = document.createElement("div");
        p1ScoreDisplay.classList.add("scorebox");
        const p2ScoreDisplay = document.createElement("div");
        p2ScoreDisplay.classList.add("scorebox");
        const p3ScoreDisplay = document.createElement("div");
        p3ScoreDisplay.classList.add("scorebox");
        const p4ScoreDisplay = document.createElement("div");
        p4ScoreDisplay.classList.add("scorebox");
        const p1eachround = document.createTextNode(String(scoreListRecord.slice(-1)[0][0]).padStart(2," "));
        const p2eachround = document.createTextNode(String(scoreListRecord.slice(-1)[0][1]).padStart(2," "));
        const p3eachround = document.createTextNode(String(scoreListRecord.slice(-1)[0][2]).padStart(2," "));
        const p4eachround = document.createTextNode(String(scoreListRecord.slice(-1)[0][3]).padStart(2," "));
        p1ScoreDisplay.appendChild(p1eachround);
        p2ScoreDisplay.appendChild(p2eachround);
        p3ScoreDisplay.appendChild(p3eachround);
        p4ScoreDisplay.appendChild(p4eachround);
        eachRound.appendChild(p1ScoreDisplay);
        eachRound.appendChild(p2ScoreDisplay);
        eachRound.appendChild(p3ScoreDisplay);
        eachRound.appendChild(p4ScoreDisplay);
        eachRoundContainer.appendChild(eachRound);
    }

}


window.onbeforeunload = function (e) {
    return "";
};

//Timer//
let timeSecond = 60;
const timeH = document.querySelector("h1");
const resetTimer = document.getElementById("resetTimer");
const timerSection = document.querySelector(".timer-section");
const timer = document.getElementById("timer");
const hint = document.getElementById("hint");
hint.style.display = "none";
displayTime(timeSecond);

timerSection.style.display = 'none';
resetTimer.addEventListener("click",()=>{
    if (timeSecond==0){
        timeSecond = 61;
        document.body.style.animation = "flash 0.5s linear";
        setTimeout(function(){document.body.style.animation = '';}, 2000);
        document.body.style.backgroundColor = "#062D51ff";
        const countDown = setInterval(() => {
            timeSecond--;
            displayTime(timeSecond);
            if (timeSecond<11){
              document.body.style.animation = 'party 1s linear infinite';
            }  
            if (timeSecond == 0 || timeSecond < 1) {
              endCount();
              clearInterval(countDown)
              document.body.style.animation = "";
              document.body.style.backgroundColor = "rgb(225, 251, 254)";
            }
          }, 1000);
        //   player1box.addEventListener("click",()=>{clearInterval(countDown);document.body.style.animation = "";});
        //   player2box.addEventListener("click",()=>{clearInterval(countDown);document.body.style.animation = "";});
        //   player3box.addEventListener("click",()=>{clearInterval(countDown);document.body.style.animation = "";});
        //   player4box.addEventListener("click",()=>{clearInterval(countDown);document.body.style.animation = "";});
    }else{
    timeSecond = 61;
    document.body.style.animation = "flash 0.5s linear";
    setTimeout(function(){document.body.style.animation = '';}, 2000);
    document.body.style.backgroundColor = "#062D51ff";
    }
});

timer.addEventListener("click",()=>{
    timeSecond = 61;
    document.body.style.animation = "flash 0.5s linear";
    setTimeout(function(){document.body.style.animation = '';}, 2000);
    document.body.style.backgroundColor = "#062D51ff";
    delay(1000).then(()=> {timerSection.style.display = 'flex';
    hint.style.display = "grid";
    timer.style.display = 'none';
    // if(dialogSection.style.display == "grid"){
    //     dialogSection.style.display = "none";
    // };
})
   

const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond<11){
        document.body.style.animation = 'party 1s linear infinite';
    }  
    if (timeSecond == 0 || timeSecond < 1) {
        endCount();
        clearInterval(countDown);
        document.body.style.animation = "";
        document.body.style.backgroundColor = "rgb(225, 251, 254)";
    }
    }, 1000);
    player1box.addEventListener("click",()=>{
        if(timer.style.display == 'none'){
            let text = p1Name + ' is the winner?';
            if (confirm(text) == true) {
                winner = "dp1Name";
                player1box.classList.replace("players","winners")
                if (player2box.classList.contains("winners")){
                    player2box.classList.replace("winners","players");
                }else if(player3box.classList.contains("winners")){
                    player3box.classList.replace("winners","players");
                }else if (player4box.classList.contains("winners")){
                    player4box.classList.replace("winners","players");
                };
                dp1Score.innerHTML = "0";
                timerSection.style.display = 'none';
                hint.style.display = "none";
                clearInterval(countDown);
                document.body.style.animation = "";
                dialogSection.style.display = "grid";
            }
        }
    });
    player2box.addEventListener("click",()=>{
        if(timer.style.display == 'none'){
            let text = p2Name + ' is the winner?';
            if (confirm(text) == true) {
                winner = "dp2Name";
                player2box.classList.replace("players","winners")
                if (player1box.classList.contains("winners")){
                    player1box.classList.replace("winners","players");
                }else if(player3box.classList.contains("winners")){
                    player3box.classList.replace("winners","players");
                }else if (player4box.classList.contains("winners")){
                    player4box.classList.replace("winners","players");
                };
                dp2Score.innerHTML=0;
                timerSection.style.display = 'none';
                hint.style.display = "none";
                clearInterval(countDown);
                document.body.style.animation = "";
                dialogSection.style.display = "grid";
            }}
        });
    player3box.addEventListener("click",()=>{
        if(timer.style.display == 'none'){
            let text = p3Name + ' is the winner?';
            if (confirm(text) == true) {
                winner = "dp3Name";
                player3box.classList.replace("players","winners")
                if (player1box.classList.contains("winners")){
                    player1box.classList.replace("winners","players");
                }else if(player2box.classList.contains("winners")){
                    player2box.classList.replace("winners","players");
                }else if (player4box.classList.contains("winners")){
                    player4box.classList.replace("winners","players");
                };
                dp3Score.innerHTML = "0";
                timerSection.style.display = 'none';
                hint.style.display = "none";
                clearInterval(countDown);
                document.body.style.animation = "";
                dialogSection.style.display = "grid";
            }}
        });
    player4box.addEventListener("click",()=>{
        if(timer.style.display == 'none'){
            let text = p4Name + ' is the winner?';
            if (confirm(text) == true) {
                winner = "dp4Name";
                player4box.classList.replace("players","winners")
                if (player1box.classList.contains("winners")){
                    player1box.classList.replace("winners","players");
                }else if(player2box.classList.contains("winners")){
                    player2box.classList.replace("winners","players");
                }else if (player3box.classList.contains("winners")){
                    player3box.classList.replace("winners","players");
                };
                dp4Score.innerHTML = "0";
                timerSection.style.display = 'none';
                hint.style.display = "none";
                document.body.style.animation = "";
                dialogSection.style.display = "grid";
                clearInterval(countDown);
            }}
    });
    clear.addEventListener("click", ()=>{
        let text = "Are you sure to start over?";
        if (confirm(text) == true) {
            scoreListRecord = [];
            p1Total = 0;
            p2Total = 0;
            p3Total = 0;
            p4Total = 0;
            calTotal();
            eachRoundContainer.innerHTML = "";
            localStorage.clear();
            document.getElementById("p1Name").innerHTML = "Player1";
            document.getElementById("p1Namebtm").innerHTML = "Player1"; 
            document.getElementById("p2Name").innerHTML = "Player2";
            document.getElementById("p2Namebtm").innerHTML = "Player2"; 
            document.getElementById("p3Name").innerHTML = "Player3";
            document.getElementById("p3Namebtm").innerHTML = "Player3"; 
            document.getElementById("p4Name").innerHTML = "Player4";
            document.getElementById("p4Namebtm").innerHTML = "Player4"; 
            clearInterval(countDown);
            timerSection.style.display = 'none';
            hint.style.display = "none";
            timer.style.display = 'flex';
        }
    });
    document.querySelector(".pauseTimer").addEventListener("click",()=>{
        alert("Timer has Paused. Press confirm to resume.")
    })
})

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
    ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
    `;
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  

function endCount() {
  timeH.innerHTML = "Time out";
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


