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
var p1Name = "Player1"
var p2Name = "Player2"
var p3Name = "Player3"
var p4Name = "Player4"

const submit = document.getElementById("submit");
const undo = document.getElementById("undo");
const clear = document.getElementById("clear");

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

document.querySelector('#inputSection').style.display = 'none';
player1box.addEventListener("click",()=>{
    document.querySelector('#inputSection').style.display = 'flex';
    player1box.classList.replace("players","winners")
    if (player2box.classList.contains("winners")){
        player2box.classList.replace("winners","players");
    }else if(player3box.classList.contains("winners")){
        player3box.classList.replace("winners","players");
    }else if (player4box.classList.contains("winners")){
        player4box.classList.replace("winners","players");
    };
    p1ScoreInput.value = "0";
    p2ScoreInput.value = p2ScoreInput.defaultValue;
    p3ScoreInput.value = p3ScoreInput.defaultValue;
    p4ScoreInput.value = p4ScoreInput.defaultValue;
    resetTimer.style.display = 'none';
})
player2box.addEventListener("click",()=>{
    document.querySelector('#inputSection').style.display = 'flex';
    player2box.classList.replace("players","winners")
    if (player1box.classList.contains("winners")){
        player1box.classList.replace("winners","players");
    }else if(player3box.classList.contains("winners")){
        player3box.classList.replace("winners","players");
    }else if (player4box.classList.contains("winners")){
        player4box.classList.replace("winners","players");
    };
    p2ScoreInput.value = "0";
    p1ScoreInput.value = p2ScoreInput.defaultValue;
    p3ScoreInput.value = p3ScoreInput.defaultValue;
    p4ScoreInput.value = p4ScoreInput.defaultValue;
    resetTimer.style.display = 'none';
})
player3box.addEventListener("click",()=>{
    document.querySelector('#inputSection').style.display = 'flex';
    player3box.classList.replace("players","winners")
    if (player1box.classList.contains("winners")){
        player1box.classList.replace("winners","players");
    }else if(player2box.classList.contains("winners")){
        player2box.classList.replace("winners","players");
    }else if (player4box.classList.contains("winners")){
        player4box.classList.replace("winners","players");
    };
    p3ScoreInput.value = "0";
    p1ScoreInput.value = p2ScoreInput.defaultValue;
    p2ScoreInput.value = p3ScoreInput.defaultValue;
    p4ScoreInput.value = p4ScoreInput.defaultValue;
    resetTimer.style.display = 'none';
})
player4box.addEventListener("click",()=>{
    document.querySelector('#inputSection').style.display = 'flex';
    player4box.classList.replace("players","winners")
    if (player1box.classList.contains("winners")){
        player1box.classList.replace("winners","players");
    }else if(player2box.classList.contains("winners")){
        player2box.classList.replace("winners","players");
    }else if (player3box.classList.contains("winners")){
        player3box.classList.replace("winners","players");
    };
    p4ScoreInput.value = "0";
    p1ScoreInput.value = p2ScoreInput.defaultValue;
    p2ScoreInput.value = p3ScoreInput.defaultValue;
    p3ScoreInput.value = p4ScoreInput.defaultValue;
    resetTimer.style.display = 'none';
})



const eachRoundContainer = document.getElementById("eachRoundContainer");
eachRoundContainer.removeChild(eachRoundContainer.firstChild)

editP1Name.addEventListener("click",()=>{
    p1Name = prompt("Please enter a new Name.")
    document.getElementById("p1Name").innerHTML = p1Name;
    document.getElementById("p1Namebtm").innerHTML = p1Name; 
    p1ScoreInput.placeholder = p1Name;
});
editP2Name.addEventListener("click",()=>{
    p2Name = prompt("Please enter a new Name.")
    document.getElementById("p2Name").innerHTML = p2Name;
    document.getElementById("p2Namebtm").innerHTML = p2Name; 
    p2ScoreInput.placeholder = p2Name;
});
editP3Name.addEventListener("click",()=>{
    p3Name = prompt("Please enter a new Name.")
    document.getElementById("p3Name").innerHTML = p3Name;
    document.getElementById("p3Namebtm").innerHTML = p3Name; 
    p3ScoreInput.placeholder = p3Name;
});
editP4Name.addEventListener("click",()=>{
    p4Name = prompt("Please enter a new Name.")
    document.getElementById("p4Name").innerHTML = p4Name;
    document.getElementById("p4Namebtm").innerHTML = p4Name; 
    p4ScoreInput.placeholder = p4Name;
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
    }
});

function doubleOrTriple(){
    if (parseInt(p1ScoreInput.value) >=10 && parseInt(p1ScoreInput.value) <=12){
        p1ScoreInput.value *= 2;
    }else if(parseInt(p1ScoreInput.value)==13){
        p1ScoreInput.value *= 3;
    }
    if (parseInt(p2ScoreInput.value) >=10 && parseInt(p2ScoreInput.value) <=12){
        p2ScoreInput.value *= 2;
    }else if(parseInt(p2ScoreInput.value)==13){
        p2ScoreInput.value *= 3;
    }
    if (parseInt(p3ScoreInput.value) >=10 && parseInt(p3ScoreInput.value) <=12){
        p3ScoreInput.value *= 2;
    }else if(parseInt(p3ScoreInput.value)==13){
        p3ScoreInput.value *= 3;
    }
    if (parseInt(p4ScoreInput.value) >=10 && parseInt(p4ScoreInput.value) <=12){
        p4ScoreInput.value *= 2;
    }else if(parseInt(p4ScoreInput.value)==13){
        p4ScoreInput.value *= 3;
    }
}

function roundFinish(){
    if (parseInt(p1ScoreInput.value) >=0 && parseInt(p1ScoreInput.value) <=13 &&
    parseInt(p2ScoreInput.value) >=0 && parseInt(p2ScoreInput.value) <=13 &&
    parseInt(p3ScoreInput.value) >=0 && parseInt(p3ScoreInput.value) <=13 &&
    parseInt(p4ScoreInput.value) >=0 && parseInt(p4ScoreInput.value) <=13){
        scoreList = [];
        doubleOrTriple();
        scoreList.push(parseInt(p1ScoreInput.value),
                        parseInt(p2ScoreInput.value),
                        parseInt(p3ScoreInput.value),
                        parseInt(p4ScoreInput.value));
        scoreListRecord.push([parseInt(p1ScoreInput.value),
            parseInt(p2ScoreInput.value),
            parseInt(p3ScoreInput.value),
            parseInt(p4ScoreInput.value)]);
        calTotal();  
        // winningEffect();  
        p1ScoreInput.value = "";
        p2ScoreInput.value = "";
        p3ScoreInput.value = "";
        p4ScoreInput.value = "";
        scoreboardDisplay();
        document.querySelector('#inputSection').style.display = 'none';
    }else {
        alert("Wrong Input, please enter 0-13 for each player.")
    };
}

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
    p1Score = (p1Total - p2Total) + (p1Total-p3Total) + (p1Total-p4Total);
    p2Score = (p2Total - p1Total) + (p2Total-p3Total) + (p2Total-p4Total);
    p3Score = (p3Total - p1Total) + (p3Total-p2Total) + (p3Total-p4Total);
    p4Score = (p4Total - p1Total) + (p4Total-p2Total) + (p4Total-p3Total);
    showScore();
}
function showScore(){
    p1ScoreDisplay.innerHTML = 0-p1Score;
    p2ScoreDisplay.innerHTML = 0-p2Score;
    p3ScoreDisplay.innerHTML = 0-p3Score;
    p4ScoreDisplay.innerHTML = 0-p4Score;
}

function scoreboardDisplay(){
    var eachRound = document.createElement("div");
    eachRound.classList.add("eachRound");
    const p1ScoreDisplay = document.createElement("div");
    p1ScoreDisplay.classList.add("scorebox")
    const p2ScoreDisplay = document.createElement("div");
    p2ScoreDisplay.classList.add("scorebox")
    const p3ScoreDisplay = document.createElement("div");
    p3ScoreDisplay.classList.add("scorebox")
    const p4ScoreDisplay = document.createElement("div");
    p4ScoreDisplay.classList.add("scorebox")
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


window.onbeforeunload = function (e) {
    return "";
};

//Timer//
let timeSecond = 61;
const timeH = document.querySelector("h1");
const resetTimer = document.getElementById("resetTimer");
const timer = document.getElementById("timer");
displayTime(timeSecond);


resetTimer.style.display = 'none';
resetTimer.addEventListener("click",()=>{
    timeSecond = 61;
});
timer.addEventListener("click",()=>{
    resetTimer.style.display = 'flex';
    timeSecond = 61;
})

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    // clearInterval(countDown);
    timeSecond = 61;
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Time out";
}
