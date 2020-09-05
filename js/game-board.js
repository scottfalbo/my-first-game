'use strict';

// code adapted from MDN.  Listens for keyboard input from the arrow keys and calls the appropriate movement function.
window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed.
  }
  switch (event.key) {
  case 'ArrowDown':
    arrowInput('down');
    break;
  case 'ArrowUp':
    arrowInput('up');
    break;
  case 'ArrowLeft':
    arrowInput('left');
    break;
  case 'ArrowRight':
    arrowInput('right');
    break;
  default:
    return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice.
  event.preventDefault();
}, true);

// -------------- Global Variables --------------
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

// Object to hold hero information.
var theHeroObject = {
  name: 'Hero',
  mapLoc: heroLoc,
  heroImage: ''
};
// Get the canvas elements and define context
var zoneCanvas = document.getElementById('zone');
var theZone = zoneCanvas.getContext('2d');
var heroCanvas = document.getElementById('hero');
var theHero = heroCanvas.getContext('2d');
var mobsCanvas = document.getElementById('hero');
var theMobs = mobsCanvas.getContext('2d');
var itemsCanvas = document.getElementById('hero');
var theItems = itemsCanvas.getContext('2d');


// Load the Hero to the screen.
window.onload = function() {
  theHero.fillStyle = 'green';
  theHero.fillRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
  theZone.fillRect(100, 100, 400, 50);
  theZone.fillRect(100, 400, 400, 50);
};

// ------------------- Movement Functions ---------------------
function arrowInput(direction){
  theHero.clearRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
  if (direction === 'up' && heroLoc[1] !== mapBorder[0]){
    heroLoc[1] -= 25;
  } else if (direction === 'right' && heroLoc[0] < mapBorder[1]){
    heroLoc[0] += 25;
  } else if (direction === 'down' && heroLoc[1] < mapBorder[2]){
    heroLoc[1] += 25;
  } else if (direction === 'left' && heroLoc[0] !== mapBorder[3]){
    heroLoc[0] -= 25;
  }
  renderAll();
}

function renderAll(){
  renderHero();
  // renderZone();
}
function renderZone(){
  theZone.fillRect(100, 100, 400, 50);
}
function renderHero(){
  theHero.fillRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
}

// var zoneCanvas = document.getElementById('zone');

// var tempBlocks = zoneCanvas.getContext('2d');

// window.onload = function() {
//   tempBlocks.fillStyle = 'green';
//   tempBlocks.fillRect(100, 100, 400, 50);
// };