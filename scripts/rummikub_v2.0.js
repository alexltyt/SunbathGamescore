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

const nextGame = document.getElementById("submit");
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
let showTip = false;
let pauseCheck = true;
let input = "";
let flashTrigger = true;
dialogLower.style.display = "none";
dialogSection.style.display = "none";
nextGame.style.display = "none";
p1Crown.style.display = "none";
p2Crown.style.display = "none";
p3Crown.style.display = "none";
p4Crown.style.display = "none";

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
                nextGame.style.display = "grid";
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
    if (dialogSection.style.display === "none" && timerSection.style.display==="none"){
        p1Name = prompt("Please enter a new Name.");
        if (p1Name == null){
            p1Name = "Player1";
        }else if (p1Name){

        }else{
            p1Name = "Player1";
        }
        document.getElementById("p1Name").innerHTML = p1Name;
        document.getElementById("p1Namebtm").innerHTML = p1Name; 
        localStorage.p1Name = p1Name;
        reloadName();
    }
});
editP2Name.addEventListener("click",()=>{
    if (dialogSection.style.display === "none" && timerSection.style.display==="none"){
    p2Name = prompt("Please enter a new Name.");
    if (p2Name == null){
        p2Name = "Player2";
    }else if (p2Name){

    }else{
        p2Name = "Player2";
    }
    document.getElementById("p2Name").innerHTML = p2Name;
    document.getElementById("p2Namebtm").innerHTML = p2Name; 
    localStorage.p2Name = p2Name;
    reloadName();
    }
});
editP3Name.addEventListener("click",()=>{
    if (dialogSection.style.display === "none" && timerSection.style.display==="none"){
    p3Name = prompt("Please enter a new Name.");
    if (p3Name == ""){
        p3Name = "Player3";
    }else if (p3Name){

    }else{
        p3Name = "Player3";
    }

    document.getElementById("p3Name").innerHTML = p3Name;
    document.getElementById("p3Namebtm").innerHTML = p3Name; 
    localStorage.p3Name = p3Name;
    reloadName();
    }
});
editP4Name.addEventListener("click",()=>{
    if (dialogSection.style.display === "none" && timerSection.style.display==="none"){
        p4Name = prompt("Please enter a new Name.");
        if (p4Name == ""){
            p4Name = "Player4";
        }else if (p4Name){

        }else{
            p4Name = "Player4";
        }
        document.getElementById("p4Name").innerHTML = p4Name;
        document.getElementById("p4Namebtm").innerHTML = p4Name; 
        localStorage.p4Name = p4Name;
        reloadName();
    }
});

nextGame.addEventListener("click", roundFinish);


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
        scoreboardDisplay();
        pauseCheck = true;
        flashTrigger = true;
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
        pauseCheck = true;
        flashTrigger = true;
        timeSecond = 61;
        timerSection.style.display = 'none';
        hint.style.display = "none";
        startIcon.style.display = 'flex';
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
            startIcon.style.display = "grid";
            dialogLower.style.display = "none";
            nextGame.style.display = "none";
        }
    }else{
        alert("Please enter score of all players.");
    }

}

function calTotal(){
    p1Score = 0;
    p2Score = 0;
    p3Score = 0;
    p4Score = 0;
    for (var i = 0; i < scoreListRecord.length ; i++) {
        // console.log(scoreListRecord[i]);
        p1Score += scoreListRecord[i][0];
        p2Score += scoreListRecord[i][1];
        p3Score += scoreListRecord[i][2];
        p4Score += scoreListRecord[i][3];
    }
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

//Timer//
let timeLimit = 60;
let timeSecond = timeLimit;
const timeH = document.querySelector("h1");
const resetTimer = document.getElementById("resetTimer");
const timerSection = document.querySelector(".timer-section");
const startIcon = document.getElementById("timer");
const hint = document.getElementById("hint");
hint.style.display = "none";
displayTime(timeSecond);

timerSection.style.display = 'none';
let countDown;
let timeLeft = 0; // Initialize timeLeft

function startCountdown() {
    timeLeft = timeLimit; // Reset timeLeft
    clearInterval(countDown);
    displayTime(timeLeft);

    countDown = setInterval(() => {
        if (pauseCheck === false && timeLeft > 0) {
            document.body.style.animation = '';
            timeLeft--;
        }
        displayTime(timeLeft);
        if (timeLeft < 11 && flashTrigger === true) {
            document.body.style.animation = 'party 1s linear infinite';
        }
        if (timeLeft === 0) {
            clearInterval(countDown);
            endCount();
            document.body.style.animation = '';
            document.body.style.backgroundColor = 'rgb(225, 251, 254)';
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countDown);
    displayTime(timeLimit);
    startCountdown();
}


startIcon.addEventListener('click', () => {
    console.log('start');
    p1ScoreDisplay.style.animation = '';
    p2ScoreDisplay.style.animation = '';
    p3ScoreDisplay.style.animation = '';
    p4ScoreDisplay.style.animation = '';
    document.body.style.animation = "";
    document.body.style.backgroundColor = "#062D51ff";
    
    if (timeSecond <= 0) {
        timeSecond = timeLimit;
    }

    pauseCheck = false;
    flashTrigger = true;
    document.body.style.animation = 'flash 0.5s linear';
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);

    document.body.style.backgroundColor = '#062D51ff';

    delay(1000).then(() => {
        timerSection.style.display = 'flex';
        hint.style.display = 'grid';
        startIcon.style.display = 'none';
        startCountdown(); // Start the countdown
    });
});

resetTimer.addEventListener('click', () => {
    resetCountdown();
});

const pauseTimer = document.getElementById('pauseTimer');
pauseTimer.addEventListener('click', () => {
    pauseCheck = !pauseCheck;
    
    if (pauseCheck) {
        pauseTimer.innerHTML = '✔';
    } else {
        pauseTimer.innerHTML = '||';
    }
});

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
  
//
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

  const playerBoxes = [player1box, player2box, player3box, player4box];

  playerBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        pauseCheck = true;
      document.body.style.animation = "";
      if (startIcon.style.display == 'none') {
        const playerIndex = playerBoxes.indexOf(box);
        const playerName = window["p" + (playerIndex + 1) + "Name"];
        const text = `${playerName} is the winner?`;
  
        if (confirm(text)) {
          winner = "dp" + (playerIndex + 1) + "Name";
          box.classList.replace("players", "winners");
          
          playerBoxes.forEach((otherBox, index) => {
            if (index !== playerIndex && otherBox.classList.contains("winners")) {
              otherBox.classList.replace("winners", "players");
            }
          });
  
          const playerScore = window["dp" + (playerIndex + 1) + "Score"];
          document.body.style.backgroundColor = "#062D51ff";
          playerScore.innerHTML = "0";
          timerSection.style.display = 'none';
          hint.style.display = "none";
          dialogSection.style.display = "grid";
          pauseCheck = true;
          flashTrigger = false;
          playerBoxes.forEach((otherBox, index) => {
            const crown = window["p" + (index + 1) + "Crown"];
            crown.style.display = (index === playerIndex) ? "grid" : "none";
          });
        }else {
            pauseCheck = false;
        }
      }
    });
  });

// Time limit selector

let selectedButton = null;

function selectTime(limit) {
  if (selectedButton) {
    selectedButton.classList.remove('timeSelected');
  }
  selectedButton = document.getElementById(`btn${limit}`);
  selectedButton.classList.add('timeSelected');
  timeLimit = limit;
}


// player1box.addEventListener("click",()=>{
//     if(timer.style.display == 'none'){
//         let text = p1Name + ' is the winner?';
//         if (confirm(text) == true) {
//             winner = "dp1Name";
//             player1box.classList.replace("players","winners")
//             if (player2box.classList.contains("winners")){
//                 player2box.classList.replace("winners","players");
//             }else if(player3box.classList.contains("winners")){
//                 player3box.classList.replace("winners","players");
//             }else if (player4box.classList.contains("winners")){
//                 player4box.classList.replace("winners","players");
//             };
//             dp1Score.innerHTML = "0";
//             timerSection.style.display = 'none';
//             hint.style.display = "none";
//             document.body.style.animation = "";
//             dialogSection.style.display = "grid";
//             pauseCheck = true;
//             p2Crown.style.display = "none";
//             p3Crown.style.display = "none";
//             p4Crown.style.display = "none";
//             p1Crown.style.display = "grid";
//         }
//     }
// });

// player2box.addEventListener("click",()=>{
//     if(timer.style.display == 'none'){
//         let text = p2Name + ' is the winner?';
//         if (confirm(text) == true) {
//             winner = "dp2Name";
//             player2box.classList.replace("players","winners")
//             if (player1box.classList.contains("winners")){
//                 player1box.classList.replace("winners","players");
//             }else if(player3box.classList.contains("winners")){
//                 player3box.classList.replace("winners","players");
//             }else if (player4box.classList.contains("winners")){
//                 player4box.classList.replace("winners","players");
//             };
//             dp2Score.innerHTML=0;
//             timerSection.style.display = 'none';
//             hint.style.display = "none";
//             document.body.style.animation = "";
//             dialogSection.style.display = "grid";
//             pauseCheck = true;
//             p1Crown.style.display = "none";
//             p3Crown.style.display = "none";
//             p4Crown.style.display = "none";
//             p2Crown.style.display = "grid";
//         }}
//     });
// player3box.addEventListener("click",()=>{
//     if(timer.style.display == 'none'){
//         let text = p3Name + ' is the winner?';
//         if (confirm(text) == true) {
//             winner = "dp3Name";
//             player3box.classList.replace("players","winners")
//             if (player1box.classList.contains("winners")){
//                 player1box.classList.replace("winners","players");
//             }else if(player2box.classList.contains("winners")){
//                 player2box.classList.replace("winners","players");
//             }else if (player4box.classList.contains("winners")){
//                 player4box.classList.replace("winners","players");
//             };
//             dp3Score.innerHTML = "0";
//             timerSection.style.display = 'none';
//             hint.style.display = "none";
//             document.body.style.animation = "";
//             dialogSection.style.display = "grid";
//             pauseCheck = true;
//             p1Crown.style.display = "none";
//             p2Crown.style.display = "none";
//             p4Crown.style.display = "none";
//             p3Crown.style.display = "grid";
//         }}
//     });
// player4box.addEventListener("click",()=>{
//     if(timer.style.display == 'none'){
//         let text = p4Name + ' is the winner?';
//         if (confirm(text) == true) {
//             winner = "dp4Name";
//             player4box.classList.replace("players","winners")
//             if (player1box.classList.contains("winners")){
//                 player1box.classList.replace("winners","players");
//             }else if(player2box.classList.contains("winners")){
//                 player2box.classList.replace("winners","players");
//             }else if (player3box.classList.contains("winners")){
//                 player3box.classList.replace("winners","players");
//             };
//             dp4Score.innerHTML = "0";
//             timerSection.style.display = 'none';
//             hint.style.display = "none";
//             document.body.style.animation = "";
//             dialogSection.style.display = "grid";
//             pauseCheck = true;
//             p1Crown.style.display = "none";
//             p2Crown.style.display = "none";
//             p3Crown.style.display = "none";
//             p4Crown.style.display = "grid";
//         }}
// });

