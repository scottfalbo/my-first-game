'use strict';

// code adapted from MDN.  Listens for keyboard input from the arrow keys and calls the appropriate movement function.
window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed.
  }
  switch (event.key) {
  case 'ArrowDown':
  case 's':
    arrowInput(0, 25);
    break;
  case 'ArrowUp':
  case 'w':
    arrowInput(0, -25);
    break;
  case 'ArrowLeft':
  case 'a':
    arrowInput(-25, 0);
    break;
  case 'ArrowRight':
  case 'd':
    arrowInput(25, 0);
    break;
  default:
    return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice.
  event.preventDefault();
}, true);

// -------------- GLOBAL VARIABLES --------------
// Get the size of the play field and puts limits into mapBorder
// mapBorder = [top, right, bottom, left];
var mapBorder = [];

var getZone = document.getElementById('zone');
var zoneWidth = getZone.getAttribute('width');
var zoneHeight = getZone.getAttribute('height');
  mapBorder = [0, (zoneWidth-50), (zoneHeight-50), 0]; //eslint-disable-line
// Get the canvas elements and define context
var zoneCanvas = document.getElementById('zone');
var theZone = zoneCanvas.getContext('2d');
var heroCanvas = document.getElementById('hero');
var theHeroLoc = heroCanvas.getContext('2d');
var mobsCanvas = document.getElementById('baddies');
var theMobs = mobsCanvas.getContext('2d');//eslint-disable-line
var itemsCanvas = document.getElementById('items');
var theItems = itemsCanvas.getContext('2d');//eslint-disable-line

// --------------------------------------------------------------
// ----------- Render Functions -------------------
// Load the Hero to the screen.
window.onload = function() {
  buildScene01();
  renderZone();
  renderAll();
};
function renderAll(){
  renderHero();
  renderMobs();
  renderItems();
  renderStats();
}
function renderZone(){
  for (var i in blocks){ //eslint-disable-line
    theZone.drawImage(blocks[i].imgSrc, blocks[i].x, blocks[i].y, blocks[i].w, blocks[i].h); //eslint-disable-line
  }
  for (var i in passThrough){ //eslint-disable-line
    theZone.drawImage(passThrough[i].imgSrc, passThrough[i].x, passThrough[i].y, passThrough[i].w, passThrough[i].h); //eslint-disable-line
  }
}
function renderHero(){
  theHeroLoc.drawImage(theHero.heroImage, theHero.mapLoc[0], theHero.mapLoc[1], theHero.mapLoc[2], theHero.mapLoc[3]);
}
function renderMobs(){
  // theMobs.fillStyle = 'red';
  // theMobs.fillRect(700, 300, 50, 50);
  // theMobs.fillRect(600, 500, 50, 50);
}
function renderItems(){
  for (var i in items){
    theItems.drawImage(items[i].imgSrc1, items[i].x, items[i].y, items[i].w, items[i].h);
  }
}
function renderStats(){
  var hp = document.getElementById('hp');
  var mp = document.getElementById('mp');
  var exp = document.getElementById('exp');
  var gold = document.getElementById('gold');
  hp.textContent = theHero.hp;
  mp.textContent = theHero.mp;
  exp.textContent = theHero.exp;
  gold.textContent = theHero.gold;
}

// ------------------- Movement Functions ---------------------
function arrowInput(xMove, yMove){

  var moveTo = [theHero.mapLoc[0] + xMove, theHero.mapLoc[1] + yMove, 50, 50];

  var moveMe = true;
  // loops through the blocks, if there is a barrier returns false and does nothing
  for (var i in blocks){ //eslint-disable-line
    if (checkPath(moveTo, blocks[i])){ //eslint-disable-line
      moveMe = false;
    }
  }
  for (var j in triggerEvents){
    if (checkEvent(moveTo, triggerEvents[j])){
      triggerEvents[j].trigger();
      moveMe = false;
    }
  }
  // if the path is clear make the move
  if (moveMe){
    theHeroLoc.clearRect(theHero.mapLoc[0], theHero.mapLoc[1], theHero.mapLoc[2], theHero.mapLoc[3]);
    theHero.mapLoc = moveTo;
  }
  renderAll();
}

// check to make sure the path is clear before moving
function checkPath(move, blocks){
  return !(move[0] >= blocks.x + blocks.w || move[0] + move[2] <= blocks.x || move[1] >= blocks.y + blocks.h || move[1] + move[3] <= blocks.y);
}

// check for event triggers
function checkEvent(move, triggerEvents){
  return !(move[0] >= triggerEvents.x + triggerEvents.w || move[0] + move[2] <= triggerEvents.x || move[1] >= triggerEvents.y + triggerEvents.h || move[1] + move[3] <= triggerEvents.y);
}

// snippet from stack overflow, questions/22549505
// makes a pop up tooltip at the cursor
// function showMenu(event) {
//   var tooltip = event.target.classList.contains('menu-wheel')
//     ? event.target
//     : event.target.querySelector(':scope .menu-wheel');
//   tooltip.style.left =
//       (event.pageX + tooltip.clientWidth + 10 < document.body.clientWidth)
//         ? (event.pageX + 10 + 'px')
//         : (document.body.clientWidth + 5 - tooltip.clientWidth + 'px');
//   tooltip.style.top =
//       (event.pageY + tooltip.clientHeight + 10 < document.body.clientHeight)
//         ? (event.pageY + 10 + 'px')
//         : (document.body.clientHeight + 5 - tooltip.clientHeight + 'px');
// }
// var toolTipMenu = document.querySelectorAll('.test-block');
// for(var i = 0; i < toolTipMenu.length; i++) {
//   toolTipMenu[i].addEventListener('mousemove', showMenu);
// }

document.onmousemove = function(e) {
  var x = e.clientX;
  var y = e.clientY;
  document.getElementsByClassName('menu-wheel').style.marginLeft = x+'px';
  document.getElementsByClassName('menu-wheel').style.marginTop = y+'px';
};

