'use strict';


// -------------------------------THE HERO
var thePlayer = {
  name: 'Hero',
  mapLoc: [0, 0, 50, 50],
  heroImage: document.getElementById('heroSprite'),
  hp: 10,
  mp: 5,
  exp: 0,
  gold: 0,
  inventory: [],
  equipped: []
};

// ---------------------------ADVENTURE OBJECT
function AdventureMaker(name, zones){
  this.name = name;
  this.zones = zones;
  this.hero = thePlayer;
}
var zoneArray = [];
// --------------------------- ZONE MAKER
function ZoneMaker(name, map, passThru, npc, containers, events, items){
  this.name = name;
  this.map = map;
  this.passThru = passThru;
  this.npc = npc;
  this.containers = containers;
  this.events = events;
  this.items = items;
  zoneArray.push(this);
}
// ----------------------------------------------------------MAP MAKER
var mapArray = [];
// ------------------------- IMPASSABLE BLOCKS
function BlockMaker(x, y, w, h, imgSrc){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.imgSrc = imgSrc;
  mapArray.push(this);
}
var passThruArray = [];
// ------------------------- PASS THROUGH BLOCKS
function PassThruMaker(x, y, w, h, imgSrc){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.imgSrc = imgSrc;
  passThruArray.push(this);
}
// --------------------------------------------------NPC and MOB MAKER
var npcArray = [];
// ------------------------------------ NPC MAKER
function NpcMaker(name){
  this.name = name;
  npcArray.push(this);
}
// --------------------------------- MONSTER MAKER
function MonsterMaker(name, type, mapLoc, stats, exp, loot){
  this.name = name;
  this.type = type;
  this.mapLoc = mapLoc;
  this.stats = stats;
  this.exp = exp;
  this.loot = loot;
  npcArray.push(this);
}
//-------------------------------------------------EVENTS and CONTAINERS
var eventArray = [];
// -------------------------------TRIGGERED EVENTS
function EventTrigger(x, y, w, h, trigger){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.trigger = trigger;
  eventArray.push(this);
}
var containerArray = [];
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
  this.opened = false;
  containerArray.push(this);
}
// ----------------------------------------------------- ITEMS
var itemArray = [];
function ItemMaker(){
  // make items
}

// ------------------------container reaction function ----
ContainerMaker.prototype.react = function(event){
  if(event === 'open' || event === 'use'){
    if (this.opened === true){
      gameOutput(`You've already opened this ${this.type}`);
    } else {
      this.imgSrc1 = this.imgSrc2;
      thePlayer.gold += this.contents[1];
      gameOutput(`You open the ${this.type} and find ${this.contents[1]} ${this.contents[0]}.`);
      this.opened = true;
      theZone.drawImage(this.imgSrc1, this.x, this.y, this.w, this.h);
    }
  } else if (event === 'talk'){
    gameOutput(`You talk to the ${this.type}, it doesn't respond.`);
  } else if (event === 'inspect'){
    gameOutput(`You search the area and find a ${this.type}.`);
  }
};
