'use strict';

// code adapted from MDN.  Listens for keyboard input from the arrow keys and calls the appropriate movement function.
window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed.
  }
  switch (event.key) {
  case 'ArrowDown':
    downArrow();
    break;
  case 'ArrowUp':
    upArrow();
    break;
  case 'ArrowLeft':
    leftArrow();
    break;
  case 'ArrowRight':
    rightArrow();
    break;
  default:
    return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice.
  event.preventDefault();
}, true);

// -------------- Global Variables --------------
// Hero coords (x, y, xFill, yFill).
var heroLoc = [375, 275, 50, 50];
// Variable used to render to canvas.
var theHero;
// Object to hold hero information.
var theHeroObject = {
  name: 'Hero',
  mapLoc: heroLoc,
  heroImage: ''
};
// Get the canvas element and define context
var heroCanvas = document.getElementById('hero');
theHero = heroCanvas.getContext('2d');

// Load the Hero to the screen.
window.onload = function() {
  theHero.fillStyle = 'green';
  theHero.fillRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
};

// ----------------- Movement Functions --------------------
function upArrow(){
  if (heroLoc[1] !== mapBorder[0]){
    theHero.clearRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
    heroLoc[1] -= 25;
    moveHero();
  }
}
function rightArrow(){
  if (heroLoc[0] < mapBorder[1]){
    theHero.clearRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
    heroLoc[0] += 25;
    moveHero();
  }
}
function downArrow(){
  if (heroLoc[1] < mapBorder[2]){
    theHero.clearRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
    heroLoc[1] += 25;
    moveHero();
  }
}
function leftArrow(){
  if (heroLoc[0] !== mapBorder[3]){
    theHero.clearRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
    heroLoc[0] -= 25;
    moveHero();
  }
}

function moveHero() {
  theHero.fillRect(heroLoc[0], heroLoc[1], heroLoc[2], heroLoc[3]);
}