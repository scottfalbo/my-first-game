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
    theZone.fillRect(blocks[i].x, blocks[i].y, 50, 50);
  }
  // }
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
function arrowInput(direction){
  theHero.clearRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
  if (direction === 'up' && heroLoc[1] !== mapBorder[0]){
    // if (checkPathUp('up')){
      heroLoc[1] -= 25;
    // }
  } else if (direction === 'right' && heroLoc[0] < mapBorder[1]){
    heroLoc[0] += 25;
  } else if (direction === 'down' && heroLoc[1] < mapBorder[2]){
    heroLoc[1] += 25;
  } else if (direction === 'left' && heroLoc[0] !== mapBorder[3]){
    heroLoc[0] -= 25;
  }
  renderAll();
}

// function checkPathUp(direction) {
//   var checker = [];
//   var overallCheck = [];
//   for (var i in blocks){
//     console.log(i);
//     checker = [];
//     if ((heroLoc[0] < (blocks[i].x + 50) && heroLoc[0] > (blocks[i].x -50))){
//       checker.push(false);
//     } else {
//       checker.push(true);
//     }
//     if (heroLoc[1] < (blocks[i].y + 50) && heroLoc[1] > (blocks[i].y - 50)){
//       checker.push(false);
//     } else {
//       checker.push(true);
//     }
//     overallCheck.push(checker);
//     console.log(overallCheck);
//   }
//   for (var j in overallCheck){
//     for (var k in overallCheck[j]){
//       if (overallCheck[j][k] === false){
//         return false;
//       }
//     }
//   }
//   return true;
// }
// // function checkPathDown(direction) {
// //   var checker = [''];
// //   for (var i in blocks){
// //     console.log(i);
// //     if ((heroLoc[0] < (blocks[i].x + 50) && heroLoc[0] > (blocks[i].x -50)) && (heroLoc[1] < (blocks[i].y + 75) && heroLoc[1] > (blocks[i].y -75)) ){
// //       checker.push(false);
// //     } else {
// //       checker.push(true);
// //     }
// //     for (var j in checker){
// //       if (checker[j] === false){
// //         console.log(checker);
// //         return false;
// //       }
// //     }
// //   }
// //   return true;
// // }
