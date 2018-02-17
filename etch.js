var mainContainer = document.getElementById('mainBox');
var setButton = document.getElementById('button');
var input = document.getElementById('input');
var rainbowCheck = document.querySelector("input[name=rainbow]");


function color(){
  if(rainbowCheck.checked){
    this.style.backgroundColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
  }else{
    this.style.backgroundColor = 'black';
  }
};
// //draw grid on load
drawGrid();

// //begin with a blank innerHTML, then construct a 10xgrid to start

function drawGrid(){
  mainContainer.innerHTML = '';
  var gridSize = input.value || 10;
  document.body.style.setProperty("--grid-size", gridSize);
    for (var i=gridSize**2; i>0; i--){
      let innerBoxes = document.createElement('div');
      innerBoxes.classList.add('innerBoxes');
      mainContainer.appendChild(innerBoxes);
      innerBoxes.addEventListener('mouseover', color);
  }}

function keyPress(e){
  if(e.which===13){
    drawGrid();}}

input.addEventListener('keypress', keyPress);
setButton.addEventListener('click', drawGrid);
