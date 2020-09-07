'use strict';

// code adapted from MDN.  Listens for keyboard input from the arrow keys and calls the appropriate movement function.
window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed.
  }
  switch (event.key) {
  case 'ArrowDown':
    arrowInput(0, 25);
    break;
  case 'ArrowUp':
    arrowInput(0, -25);
    break;
  case 'ArrowLeft':
    arrowInput(-25, 0);
    break;
  case 'ArrowRight':
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
function zoneSize(){
  var getZone = document.getElementById('zone');
  var zoneWidth = getZone.getAttribute('width');
  var zoneHeight = getZone.getAttribute('height');
  mapBorder = [0, (zoneWidth-50), (zoneHeight-50), 0]; //eslint-disable-line
}
zoneSize();

// Hero coords (x, y, xFill, yFill).
var heroLoc = [375, 275, 50, 50];

// array to hold all of the impassable blocks on the map
var blocks = [];

// Object to hold hero information.
var theHeroObject = { //eslint-disable-line
  name: 'Hero',
  mapLoc: heroLoc,
  heroImage: ''
};
// Get the canvas elements and define context
var zoneCanvas = document.getElementById('zone');
var theZone = zoneCanvas.getContext('2d');
var heroCanvas = document.getElementById('hero');
var theHero = heroCanvas.getContext('2d');
var mobsCanvas = document.getElementById('baddies');
var theMobs = mobsCanvas.getContext('2d');
var itemsCanvas = document.getElementById('items');
var theItems = itemsCanvas.getContext('2d');

// --------------------------------------------------------------
// -------- Block Constructor ------------
function BlockMaker(x, y){
  this.x = x;
  this.y = y;
  this.w = 50;
  this.h = 50;
  blocks.push(this);
}
// ----------- Render Functions -------------------
// Load the Hero to the screen.
window.onload = function() {
  renderZone();
  renderAll();
};
function renderAll(){
  renderHero();
  renderMobs();
  renderItems();
}
function renderZone(){
  // for (var n = 100; n < 500; n += 50){
  new BlockMaker(100, 100);
  new BlockMaker(200, 200);
  new BlockMaker(300, 300);
  new BlockMaker(400, 400);
  for (var i in blocks){
    theZone.fillRect(blocks[i].x, blocks[i].y, blocks[i].w, blocks[i].h);
  }
}
function renderHero(){
  theHero.fillStyle = 'blue';
  theHero.fillRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
}
function renderMobs(){
  theMobs.fillStyle = 'red';
  theMobs.fillRect(700, 300, 50, 50);
  theMobs.fillRect(600, 500, 50, 50);
}
function renderItems(){
  theItems.fillStyle = 'gold';
  theItems.fillRect(0, 0, 50, 50);
}

// ------------------- Movement Functions ---------------------
function arrowInput(xMove, yMove){

  var moveTo = [heroLoc[0] + xMove, heroLoc[1] + yMove, 50, 50];

  var moveMe = true;

  for (var i in blocks){
    if (checkPath(moveTo, blocks[i])){
      moveMe = false;
    }
  }

  if (moveMe){
    theHero.clearRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
    heroLoc = moveTo;
  } else {
    //
  }
  renderAll();
}

function checkPath(move, blocks){
  return !(move[0] >= blocks.x + blocks.w || move[0] + move[2] <= blocks.x || move[1] >= blocks.y + blocks.h || move[1] + move[3] <= blocks.y);
}

