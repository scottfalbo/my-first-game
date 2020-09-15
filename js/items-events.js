'use strict';

// --------------- ITEM CONSTRUCTORS ------------
//global array to hold items
var items = []; //eslint-disable-line
var triggerEvents = []; //eslint-disable-line

// Triggered Events
function EventTrigger(x, y, w, h, trigger){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.trigger = trigger;
  triggerEvents.push(this);
}

function scene01Events(){
  //----------------------------------------zone change
  new EventTrigger(550, 0, 100, 25, function(){
    theHeroLoc.clearRect(theHero.mapLoc[0], theHero.mapLoc[1], theHero.mapLoc[2], theHero.mapLoc[3]);
    theHero.mapLoc[1] = 550;
    buildScene02();
  });
}

function scene02Events(){
  //----------------------------------------zone change
  new EventTrigger(550, 575, 100, 25, function(){
    theHeroLoc.clearRect(theHero.mapLoc[0], theHero.mapLoc[1], theHero.mapLoc[2], theHero.mapLoc[3]);
    theHero.mapLoc[1] = 0;
    buildScene01();
  });
}
