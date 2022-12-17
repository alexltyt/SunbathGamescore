const p1score = document.getElementById("p1Score");
const p2score = document.getElementById("p2Score");
const p3score = document.getElementById("p3Score");
const p4score = document.getElementById("p4Score");
var p1scoreInput = document.getElementById("p1ScoreInput").value;
var p2scoreInput = document.getElementById("p2ScoreInput");
var p3scoreInput = document.getElementById("p3ScoreInput");
var p4scoreInput = document.getElementById("p4ScoreInput");
const submit = document.getElementById("submit");

p1score.innerHTML = 0;
p2score.innerHTML = 0;
p3score.innerHTML = 0;
p4score.innerHTML = 0;

submit.addEventListener("click", calculation);

function calculation(){
    p1score.innerHTML = parseInt(p1score.innerHTML)+parseInt(p1scoreInput);
    p2score.innerHTML += p2scoreInput.innerText;
    p3score.innerHTML += p3scoreInput;
    p4score.innerHTML += p4scoreInput;
}

