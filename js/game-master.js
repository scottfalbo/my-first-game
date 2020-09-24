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
  case 'Escape':
    closeAll();
    break;
  default:
    return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice.
  event.preventDefault();
}, true);

// ------------------------------- Movement Functions ---------------------
var edgeFinder = [];
var eventFinder = [];
var containerFinder = [];
function arrowInput(xMove, yMove){
  var moveTo = [thePlayer.mapLoc[0] + xMove, thePlayer.mapLoc[1] + yMove, 50, 50];
  var moveMe = true;
  //loops through the blocks, if there is a barrier returns false and does nothing
  for (var i in edgeFinder){ //eslint-disable-line
    if (checkPath(moveTo, edgeFinder[i])){ //eslint-disable-line
      moveMe = false;
    }
  }
  // if the path is clear make the move
  if (moveMe){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc = moveTo;
  }
  for (i in eventFinder){ //eslint-disable-line
    if (checkPath(moveTo, eventFinder[i])){ //eslint-disable-line
      eventFinder[i].trigger();
    }
  }
  renderHero();
}

// check to make sure the path is clear before moving
function checkPath(move, edgeFinder){
  return !(move[0] >= edgeFinder.x + edgeFinder.w || move[0] + move[2] <= edgeFinder.x || move[1] >= edgeFinder.y + edgeFinder.h || move[1] + move[3] <= edgeFinder.y);
}
//------------------------------ END OF MOVEMENT BLOCK ----

//--------------------------------- CANVAS ELEMENTS -------
var zoneCanvas = document.getElementById('zone');
var theZone = zoneCanvas.getContext('2d');
var heroCanvas = document.getElementById('hero');
var theHero = heroCanvas.getContext('2d');
var npcCanvas = document.getElementById('npc');
var theNpc = npcCanvas.getContext('2d');
var itemsCanvas = document.getElementById('items');
var theItems = itemsCanvas.getContext('2d');
// -------------------------------- Makes the Game object
var theGame = boxItUp();

//--------------------------------------------------- Render the player
function renderHero(){
  theHero.drawImage(thePlayer.heroImage, thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
}
//--------------------------------------------------- Load First Scene
window.onload = function() {
  loadZone('scene01');
};
// ----------------------------------------------- Load a new zone
function loadZone(name){
  clearCanvas();
  // resetLocalArrays();
  for (var i in theGame.zones){
    if (theGame.zones[i].name === name){
      for (var n = 0; n < theGame.zones[i].map.length; n++){
        theZone.drawImage(theGame.zones[i].map[n].imgSrc, theGame.zones[i].map[n].x, theGame.zones[i].map[n].y, theGame.zones[i].map[n].w, theGame.zones[i].map[n].h);
      }
      edgeFinder = theGame.zones[i].map;
      for (n = 0; n < theGame.zones[i].events.length; n++){
        theZone.fillRect(theGame.zones[i].events[n].x, theGame.zones[i].events[n].y, theGame.zones[i].events[n].w, theGame.zones[i].events[n].h);
      }
      eventFinder = theGame.zones[i].events;
      for (n = 0; n < theGame.zones[i].containers.length; n++){
        theZone.drawImage(theGame.zones[i].containers[n].imgSrc1, theGame.zones[i].containers[n].x, theGame.zones[i].containers[n].y, theGame.zones[i].containers[n].w, theGame.zones[i].containers[n].h);
      }
      containerFinder = theGame.zones[i].containers;
    }
  }
  renderHero();
}
// function resetLocalArrays(){
//   edgeFinder = [];
//   eventFinder = [];
//   containerFinder = [];
// }
function clearCanvas(){
  theZone.clearRect(0,0,boardWidth, boardHeight);
  theNpc.clearRect(0,0,boardWidth, boardHeight);
  theItems.clearRect(0,0,boardWidth, boardHeight);
}

function interaction(event){
  event.preventDefault();
  var moveTo = [thePlayer.mapLoc[0], thePlayer.mapLoc[1], 50, 50];
  // console.log(event.target.id);
  for (var i in containerFinder){
    if (checkPath(moveTo, containerFinder[i])){
      containerFinder[i].react(event.target.id);
    }
  }
}

// for (i in containerFinder){ //eslint-disable-line
//   if (checkPath(moveTo, containerFinder[i])){ //eslint-disable-line
//     containerFinder[i].react();
//   }
// }