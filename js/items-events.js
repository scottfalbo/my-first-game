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
// Container maker, chests, jars, boxes, etc
function ContainerMaker(x, y, w, h, imgSrc1, imgSrc2, type, contents){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.imgSrc1 = imgSrc1;
  this.imgSrc2 = imgSrc2;
  this.type = type;
  this.contents = contents;
  items.push(this);
}

//------------------------------- ITEMS
//---------------------------------------- chest
function scene01Items(){
  var imgSrc1 = document.getElementById('chest');
  var imgSrc2 = document.getElementById('chest-open');
  new ContainerMaker(50, 450, 50, 50, imgSrc1, imgSrc2, 'chest', '');
}



//-------------------------------EVENTS
//----------------------------------------zone change
function scene01Events(){
  new EventTrigger(550, 0, 100, 25, function(){
    theHeroLoc.clearRect(theHero.mapLoc[0], theHero.mapLoc[1], theHero.mapLoc[2], theHero.mapLoc[3]);
    theHero.mapLoc[1] = 550;
    buildScene02();
  });
}

//----------------------------------------zone change
function scene02Events(){
  new EventTrigger(550, 575, 100, 25, function(){
    theHeroLoc.clearRect(theHero.mapLoc[0], theHero.mapLoc[1], theHero.mapLoc[2], theHero.mapLoc[3]);
    theHero.mapLoc[1] = 0;
    buildScene01();
  });
}
