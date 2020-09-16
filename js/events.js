'use strict';

// --------------- ITEM CONSTRUCTORS ------------
//global array to hold items
var objectEvents = []; //eslint-disable-line
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
  objectEvents.push(this);
}
ContainerMaker.prototype.react = function(event){
  if(event === 'open' || event === 'use'){
    this.imgSrc1 = this.imgSrc2;
    theHero.gold += this.contents[1];
    infoOutput(`You open the ${this.type} and find ${this.contents[1]} ${this.contents[0]}.`);
  } else if (event === 'talk'){
    infoOutput(`You talk to the ${this.type}, it doesn't respond.`);
  } else if (event === 'search'){
    infoOutput(`You search the area and find a ${this.type}.`);
  }
  renderStats();
  renderItems();
};



//-------------------------------EVENTS
//----------------------------------------zone change
function scene01Events(){
  new EventTrigger(550, 0, 100, 25, function(){
    theHeroLoc.clearRect(theHero.mapLoc[0], theHero.mapLoc[1], theHero.mapLoc[2], theHero.mapLoc[3]);
    theHero.mapLoc[1] = 550;
    buildScene02();
  });
  //---------------------------------------chest
  var imgSrc1 = document.getElementById('chest');
  var imgSrc2 = document.getElementById('chest-open');
  new ContainerMaker(50, 450, 50, 50, imgSrc1, imgSrc2, 'chest', ['gold', 25]);
}

//----------------------------------------zone change
function scene02Events(){
  new EventTrigger(550, 575, 100, 25, function(){
    theHeroLoc.clearRect(theHero.mapLoc[0], theHero.mapLoc[1], theHero.mapLoc[2], theHero.mapLoc[3]);
    theHero.mapLoc[1] = 0;
    buildScene01();
  });
}
