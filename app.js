let scoreOne = 0
let scoreTwo = 0


function addScoreOne() {
  scoreOne++;
  console.log(scoreOne);
  drawScoreOne();
}
function addThreeScoreOne() {
  scoreOne += 3;
  drawScoreOne();
}
function addScoreTwo() {
  scoreTwo++;
  console.log(scoreTwo);
  drawScoreTwo();

}
function addThreeScoreTwo() {
  scoreTwo += 3;
  drawScoreTwo();
}

function drawScoreOne() {
  document.getElementById("scoreOne").innerHTML = `<div> ${scoreOne} </div>`

}

function drawScoreTwo() {
  document.getElementById("scoreTwo").innerHTML = `<div> ${scoreTwo} </div>`

}

function resetScores() {
  scoreOne = 0;
  scoreTwo = 0;
  drawScoreOne()
  drawScoreTwo()

}

drawScoreOne()
drawScoreTwo()