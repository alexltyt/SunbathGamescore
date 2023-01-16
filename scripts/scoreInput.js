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
const dialogLower = document.querySelector(".dialogLower");
const p1Crown = document.getElementById("p1Crown");
const p2Crown = document.getElementById("p2Crown");
const p3Crown = document.getElementById("p3Crown");
const p4Crown = document.getElementById("p4Crown");
const tooltip = document.querySelector(".tooltip");
const tooltipText = document.querySelector(".tooltiptext");
const dp1Name = document.getElementById("dp1Name");
const dp2Name = document.getElementById("dp2Name");
const dp3Name = document.getElementById("dp3Name");
const dp4Name = document.getElementById("dp4Name");
let showTip = false;
let input = "";
dialogLower.style.display = "none";
dialogSection.style.display = "none";
submit.style.display = "none";
p1Crown.style.display = "none";
p2Crown.style.display = "none";
p3Crown.style.display = "none";
p4Crown.style.display = "none";
let winCheck = false;

const winnerBtn = document.querySelector(".sect2-0");
const winText = document.getElementById("winner-text");

winnerBtn.addEventListener("click",()=>{
    winCheck = true;
    winText.innerHTML = "Tap the winner"
})

tooltip.addEventListener("click",()=>{
    if (showTip === false){
        tooltipText.style.visibility = "visible";
        showTip = !showTip;
    }else{
        tooltipText.style.visibility = "hidden";
        showTip = !showTip;
    }
})

for (let player of players){
    player.addEventListener("click",()=>{
        for (let player of players){player.classList.remove("selected");}
        if (winner != player.id){
            player.classList.add("selected");
            selectedPlayer = player.id;
            input = "";
            output.innerHTML = input;
            dialogLower.style.display = "grid";
        }
    })
}

for (let key of keys){
    const keyValue = key.dataset.key;
    key.addEventListener("click",()=>{
        
        dp1Score.style.animation = "";
        dp2Score.style.animation = "";
        dp3Score.style.animation = "";
        dp4Score.style.animation = "";
        if (keyValue == "confirm"){
            if(input==""){
                alert("Please enter the score.");
            }else{
            input = input.slice(0,-1);
            let result = eval(input);
            switch(selectedPlayer){
                case'dp1Name':
                dp1Score.style.animation = "mymove 1s";
                dp1Score.innerHTML = result;
                break;            
                case'dp2Name':
                dp2Score.style.animation = "mymove 1s";
                dp2Score.innerHTML = result;
                break;            
                case'dp3Name':
                dp3Score.style.animation = "mymove 1s";
                dp3Score.innerHTML = result;
                break;            
                case'dp4Name':
                dp4Score.style.animation = "mymove 1s";
                dp4Score.innerHTML = result;
                break;            
            }}
            input = "";
            output.innerHTML = input;
            dialogLower.style.display = "none";
            if (dp1Score.innerHTML != "" && dp2Score.innerHTML !=""&&dp3Score.innerHTML!=""&&dp4Score.innerHTML!=""){
                submit.style.display = "grid";
            }
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
        players[0].innerHTML = p1Name;
        players[1].innerHTML = p2Name;
        players[2].innerHTML = p3Name;
        players[3].innerHTML = p4Name;
    }
}

const eachRoundContainer = document.getElementById("eachRoundContainer");
eachRoundContainer.removeChild(eachRoundContainer.firstChild)

editP1Name.addEventListener("click",()=>{
    if (winCheck===false){
        p1Name = prompt("Please enter a new Name.");
        if (p1Name == null){
            p1Name = "Player1";
        }else if (p1Name){

        }else{
            p1Name = "Player1";
        }
        document.getElementById("p1Name").innerHTML = p1Name;
        document.getElementById("p1Namebtm").innerHTML = p1Name; 
        dp1Name.innerHTML = p1Name;
        localStorage.p1Name = p1Name;
        reloadName();
    }
});
editP2Name.addEventListener("click",()=>{
    if (winCheck===false){
    p2Name = prompt("Please enter a new Name.");
    if (p2Name == null){
        p2Name = "Player2";
    }else if (p2Name){

    }else{
        p2Name = "Player2";
    }
    document.getElementById("p2Name").innerHTML = p2Name;
    document.getElementById("p2Namebtm").innerHTML = p2Name; 
    dp2Name.innerHTML = p2Name;
    localStorage.p2Name = p2Name;
    reloadName();
    }
});
editP3Name.addEventListener("click",()=>{
    if (winCheck===false){
    p3Name = prompt("Please enter a new Name.");
    if (p3Name == ""){
        p3Name = "Player3";
    }else if (p3Name){

    }else{
        p3Name = "Player3";
    }

    document.getElementById("p3Name").innerHTML = p3Name;
    document.getElementById("p3Namebtm").innerHTML = p3Name; 
    dp3Name.innerHTML = p3Name;
    localStorage.p3Name = p3Name;
    reloadName();
    }
});
editP4Name.addEventListener("click",()=>{
    if (winCheck===false){
        p4Name = prompt("Please enter a new Name.");
        if (p4Name == ""){
            p4Name = "Player4";
        }else if (p4Name){

        }else{
            p4Name = "Player4";
        }
        document.getElementById("p4Name").innerHTML = p4Name;
        document.getElementById("p4Namebtm").innerHTML = p4Name; 
        dp4Name.innerHTML = p4Name;
        localStorage.p4Name = p4Name;
        reloadName();
    }
});

submit.addEventListener("click", roundFinish);


restoredata.addEventListener("click",()=>{
    let text = "Are you sure to restore data?";
    if (confirm(text) == true) {
        p1Score = localStorage.p1Score;
        if(p1Score==undefined){p1Score = 0;}
        p2Score = localStorage.p2Score;
        if(p2Score==undefined){p2Score = 0;}
        p3Score = localStorage.p3Score;
        if(p3Score==undefined){p3Score = 0;}
        p4Score = localStorage.p4Score;
        if(p4Score==undefined){p4Score = 0;}
        p1Name = localStorage.p1Name;
        if(p1Name==undefined){p1Name = "Player1";}
        p2Name = localStorage.p2Name;
        if(p2Name==undefined){p2Name = "Player2";}
        p3Name = localStorage.p3Name;
        if(p3Name==undefined){p3Name = "Player3";}
        p4Name = localStorage.p4Name;
        if(p4Name==undefined){p4Name = "Player4";}
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
        dp1Name.innerHTML = p1Name;
        dp2Name.innerHTML = p2Name;
        dp3Name.innerHTML = p3Name;
        dp4Name.innerHTML = p4Name;
        scoreboardDisplay();
    }
})
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
    }});

undo.addEventListener("click", ()=>{
    let text = "Are you sure to erase the last input?";
    if (confirm(text) == true) {
        eachRoundContainer.innerHTML = "";
        scoreListRecord.pop();
        calTotal();
        showScore();
        scoreboardDisplay();
        //eachRoundContainer.removeChild(eachRoundContainer.firstChild);
    } 
});

function roundFinish(){
    let confirmText = "Start next round?"
    if(dp1Score.innerHTML != "" && dp2Score.innerHTML != "" && dp3Score.innerHTML != "" && dp4Score.innerHTML != ""){
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

            winner = "";
            dialogLower.style.display = "none";
            submit.style.display = "none";
            winText.innerHTML = "WIN!"
            winnerBtn.style.display = "grid";
            winCheck=false;
        }
    }else{
        alert("Please enter score of all players.");
    }

}

function calTotal(){
    p1Total = 0;
    p2Total = 0;
    p3Total = 0;
    p4Total = 0;
    for (var i = 0; i < scoreListRecord.length ; i++) {
        // console.log(scoreListRecord[i]);
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
    p1ScoreDisplay.style.visibility = "hidden";
    p2ScoreDisplay.style.visibility = "hidden";
    p3ScoreDisplay.style.visibility = "hidden";
    p4ScoreDisplay.style.visibility = "hidden";
    setTimeout(()=>{p1ScoreDisplay.style.animation = "mymoveBig 1s"},300);
    setTimeout(()=>{p2ScoreDisplay.style.animation = "mymoveBig 1s"},600);
    setTimeout(()=>{p3ScoreDisplay.style.animation = "mymoveBig 1s"},1200);
    setTimeout(()=>{p4ScoreDisplay.style.animation = "mymoveBig 1s"},1700);
    setTimeout(()=>{p1ScoreDisplay.style.visibility = "visible"},700);
    setTimeout(()=>{p2ScoreDisplay.style.visibility = "visible"},700);
    setTimeout(()=>{p3ScoreDisplay.style.visibility = "visible"},700);
    setTimeout(()=>{p4ScoreDisplay.style.visibility = "visible"},700);
    localStorage.p1Score = p1Score;
    localStorage.p2Score = p2Score;
    localStorage.p3Score = p3Score;
    localStorage.p4Score = p4Score;
    localStorage.scoreListRecord = JSON.stringify(scoreListRecord);
}

function scoreboardDisplay(){
    eachRoundContainer.innerHTML = "";
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
        }
    }


window.onbeforeunload = function (e) {
    return "";
};


player1box.addEventListener("click",()=>{
    if(winCheck===true){
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
            document.body.style.animation = "";
            dialogSection.style.display = "grid";
            p2Crown.style.display = "none";
            p3Crown.style.display = "none";
            p4Crown.style.display = "none";
            p1Crown.style.display = "grid";
            winnerBtn.style.display = "none";
        }
    }
});

player2box.addEventListener("click",()=>{
    if(winCheck===true){
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
            document.body.style.animation = "";
            dialogSection.style.display = "grid";
            p1Crown.style.display = "none";
            p3Crown.style.display = "none";
            p4Crown.style.display = "none";
            p2Crown.style.display = "grid";
            winnerBtn.style.display = "none";
        }}
    });
player3box.addEventListener("click",()=>{
    if(winCheck===true){
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
            document.body.style.animation = "";
            dialogSection.style.display = "grid";
            p1Crown.style.display = "none";
            p2Crown.style.display = "none";
            p4Crown.style.display = "none";
            p3Crown.style.display = "grid";
            winnerBtn.style.display = "none";
        }}
    });
player4box.addEventListener("click",()=>{
    if(winCheck===true){
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
            document.body.style.animation = "";
            dialogSection.style.display = "grid";
            p1Crown.style.display = "none";
            p2Crown.style.display = "none";
            p3Crown.style.display = "none";
            p4Crown.style.display = "grid";
            winnerBtn.style.display = "none";
        }}
});


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


