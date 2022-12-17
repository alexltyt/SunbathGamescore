const p1ScoreDisplay = document.getElementById("p1Score");
const p2ScoreDisplay = document.getElementById("p2Score");
const p3ScoreDisplay = document.getElementById("p3Score");
const p4ScoreDisplay = document.getElementById("p4Score");
const p1ScoreInput = document.getElementById("p1ScoreInput");
const p2ScoreInput = document.getElementById("p2ScoreInput");
const p3ScoreInput = document.getElementById("p3ScoreInput");
const p4ScoreInput = document.getElementById("p4ScoreInput");

const submit = document.getElementById("submit");
const undo = document.getElementById("undo");
const clear = document.getElementById("clear");
var p1Score = 0;
var p2Score = 0;
var p3Score = 0;
var p4Score = 0;
var p1ScoreDiff = 0;
var p2ScoreDiff = 0;
var p3ScoreDiff = 0;
var p4ScoreDiff = 0;
var p1Total = 0;
var p2Total = 0;
var p3Total = 0;
var p4Total = 0;
var scoreList = [];
var scoreListRecord = [];

submit.addEventListener("click", roundFinish);
undo.addEventListener("click", ()=>{
    let text = "Are you sure to remove the last input?";
    if (confirm(text) == true) {
        scoreListRecord.pop();
        calTotal();
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
    }
});

function roundFinish(){
    // p1Score += parseInt(p1ScoreInput.value);
    // p2Score += parseInt(p2ScoreInput.value);
    // p3Score += parseInt(p3ScoreInput.value);
    // p4Score += parseInt(p4ScoreInput.value);
    scoreList = []
    scoreList.push(parseInt(p1ScoreInput.value),
                    parseInt(p2ScoreInput.value),
                    parseInt(p3ScoreInput.value),
                    parseInt(p4ScoreInput.value));
    scoreListRecord.push([parseInt(p1ScoreInput.value),
        parseInt(p2ScoreInput.value),
        parseInt(p3ScoreInput.value),
        parseInt(p4ScoreInput.value)]);
    calTotal();    
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
    p1ScoreDisplay.innerHTML = 0-p1Score;
    p2ScoreDisplay.innerHTML = 0-p2Score;
    p3ScoreDisplay.innerHTML = 0-p3Score;
    p4ScoreDisplay.innerHTML = 0-p4Score;
}
function showScore(){
    p1ScoreDisplay.innerHTML = 0-p1Score;
    p2ScoreDisplay.innerHTML = 0-p2Score;
    p3ScoreDisplay.innerHTML = 0-p3Score;
    p4ScoreDisplay.innerHTML = 0-p4Score;
}

window.onbeforeunload = function (e) {
    return "";
};