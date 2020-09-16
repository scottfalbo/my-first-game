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

//get interaction buttons
var interactionButton = document.getElementById('interactions');

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
  for (var i in objectEvents){
    theItems.drawImage(objectEvents[i].imgSrc1, objectEvents[i].x, objectEvents[i].y, objectEvents[i].w, objectEvents[i].h);
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

// even handler for the interaction buttons.  If the hero is in range of an event when clicked it will call the events method
function reactions(event){
  event.preventDefault();
  var moveTo = [theHero.mapLoc[0], theHero.mapLoc[1], 50, 50];
  // console.log(event.target.id);
  for (var i in objectEvents){
    var nothing = true;
    if (checkEvent(moveTo, objectEvents[i])){
      objectEvents[i].react(event.target.id);
      nothing = false;
    }
  }
  if (nothing === true){
    if (event.target.id === 'open'){infoOutput('There is nothing to open.');}
    if (event.target.id === 'talk'){infoOutput('You start talking to yourself.');}
    if (event.target.id === 'search'){infoOutput('You search around, you find nothing.');}
    // this one will eventually do something with inventory items
    if (event.target.id === 'use'){infoOutput('You don\'t have anything to use.');}
  }
}

// output game information to the player in the bottom corner
var infoOut = document.getElementById('gameoutput');
function infoOutput(output){
  var p = document.createElement('p');
  p.textContent = `>  ${output}`;
  infoOut.insertAdjacentElement('afterbegin', p);
}

// Interactions event listener
interactionButton.addEventListener('click', reactions);
