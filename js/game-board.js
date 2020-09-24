'use strict';

// -------------- GLOBAL VARIABLES --------------
// Get the size of the play field and puts limits into mapBorder
// mapBorder = [top, right, bottom, left];
// var mapBorder = [];

// var getZone = document.getElementById('zone');
// var zoneWidth = getZone.getAttribute('width');
// var zoneHeight = getZone.getAttribute('height');
//   mapBorder = [0, (zoneWidth-50), (zoneHeight-50), 0];
// Get the canvas elements and define context


// //get interaction buttons
// var interactionButton = document.getElementById('interactions');

// //------clear local storage for used objects---------
// if (localStorage['usedObjects']){
//   localStorage.removeItem('usedObjects');
// }

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
  eventObjects();
  renderStats();
}
function renderZone(){
  for (var i in blocks){
    theZone.drawImage(blocks[i].imgSrc, blocks[i].x, blocks[i].y, blocks[i].w, blocks[i].h);
  }
  for (var i in passThrough){
    theZone.drawImage(passThrough[i].imgSrc, passThrough[i].x, passThrough[i].y, passThrough[i].w, passThrough[i].h);
  }
}
function renderHero(){
  theHero.drawImage(thePlayer.heroImage, thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
}
function renderMobs(){
  // theMobs.fillStyle = 'red';
  // theMobs.fillRect(700, 300, 50, 50);
  // theMobs.fillRect(600, 500, 50, 50);
}
function eventObjects(){
  for (var i in objectEvents){
    theItems.drawImage(objectEvents[i].imgSrc1, objectEvents[i].x, objectEvents[i].y, objectEvents[i].w, objectEvents[i].h);
  }
}
// function renderStats(){
//   var hp = document.getElementById('hp');
//   var mp = document.getElementById('mp');
//   var exp = document.getElementById('exp');
//   var gold = document.getElementById('gold');
//   hp.textContent = thePlayer.hp;
//   mp.textContent = thePlayer.mp;
//   exp.textContent = thePlayer.exp;
//   gold.textContent = thePlayer.gold;
// }

// even handler for the interaction buttons.  If the hero is in range of an event when clicked it will call the events method
function reactions(event){
  event.preventDefault();
  var moveTo = [thePlayer.mapLoc[0], thePlayer.mapLoc[1], 50, 50];
  // console.log(event.target.id);
  for (var i in objectEvents){
    if (checkEvent(moveTo, objectEvents[i])){
      objectEvents[i].react(event.target.id);
    }
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
