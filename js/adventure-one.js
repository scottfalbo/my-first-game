'use strict';

// ---------------------------Get game board dimensions----------
var boardWidth = $('.play-field').width();
var boardHeight = $('.play-field').height();


// main adventure object

// ---------------------------------------------------------ZONE 01
// zone object
function createScene01(){
  thePlayer.mapLoc = [150,500,50,50];
  // ----------------------------Map
  let sceneArray = [[0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 7.5, 8, 8.5],[0, .5, 1, 1.5, 5, 5.5, 7.5, 8, 8.5], [0, .5, 1, 1.5, 5.5, 7.5, 8.5], [0, .5, 8.5], [0, .5, 3.5, 4, 4.5, 8.5], [0, .5, 3.5, 4, 4.5, 8.5], [0, .5, 1, 3.5, 4, 4.5, 8.5], [0, 3.5, 4, 4.5, 8.5], [], [0, 3, 8.5], [0, 3, 8.5], [0, 3, 8, 8.5], [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5]];
  var imgSrc = document.getElementById('rocks');
  let y = 0;
  sceneArray.forEach((value) => {
    value.forEach((x) => {
      makeBlock(x, y, imgSrc);
    });
    y += 50;
  });

  var imgSrc = document.getElementById('bridge');
  new PassThruMaker(200, 400, 50, 50, imgSrc);
  new PassThruMaker(750, 400, 50, 50, imgSrc);

  var imgSrc = document.getElementById('river');
  for (var i = 0; i < 150; i += 50){
    new BlockMaker(i, 400, 50, 50, imgSrc);
  }
  for (i = 200; i < 750; i += 50){
    new BlockMaker(i, 400, 50, 50, imgSrc);
  }
  for (i = 800; i < boardWidth; i += 50){
    new BlockMaker(i, 400, 50, 50, imgSrc);
  }
  //-------------------------------------------------Zone Events
  new EventTrigger(600, -25, 150, 25, function(){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc[1] = 600;
    loadZone('scene02');
  });
  //----------------------------------------------containers
  var imgSrc1 = document.getElementById('chest');
  var imgSrc2 = document.getElementById('chest-open');
  new ContainerMaker(800, 100, 50, 50, imgSrc1, imgSrc2, 'chest', ['gold', 25]);
  //-----------------------------------------create zone object
  new ZoneMaker('scene01', mapArray, passThruArray, npcArray, containerArray, eventArray, itemArray);
}
// new ZoneMaker(mapArray, npcArray, containerArray, eventArray, itemArray);
// blocks, npc, mobs, containers, items, events

// ------------------------------------------ZONE 02
function createScene02(){
  // ----------------------------Map
  var imgSrc = document.getElementById('rocks');
  var sceneArray = [[0, .5, 1, 1.5, 2, 4 ,4.5, 5, 5.5, 6, 6.5, 7 ,7.5, 8, 8.5], [0, .5, 1, 1.5, 7.5, 8.5], [0, .5, 1, 8.5], [0, .5, 8, 8.5], [0, 3.5, 4, 5.5, 6], [0, 3.5, 4, 5.5, 6], [0], [0, 8.5], [0, .5, 1 ,3 , 3.5 ,4 ,4.5, 8.5], [0, .5, 4, 4.5, 8.5], [0, .5, 4, 4.5, 5, 7.5, 8, 8.5], [0, .5 , 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 7.5, 8, 8.5], [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5 , 7.5, 8, 8.5]];
  var imgSrc = document.getElementById('rocks');
  let y = 0;
  sceneArray.forEach((value) => {
    value.forEach((x) => {
      makeBlock(x, y, imgSrc);
    });
    y += 50;
  });
  //-------------------------------------------------Zone Events
  new EventTrigger(600, 650, 150, 25, function(){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc[1] = 0;
    loadZone('scene01');
  });
  new EventTrigger(250, -25, 150, 25, function(){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc[1] = 600;
    loadZone('scene03');
  });
  new EventTrigger(900, 200, 25, 150, function(){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc[0] = 0;
    loadZone('scene04');
  });
  //-----------------------------------------create zone object
  new ZoneMaker('scene02', mapArray, passThruArray, npcArray, containerArray, eventArray, itemArray);
}
// ------------------------------------------ZONE 03
function createScene03(){
  // ----------------------------Map
  var imgSrc = document.getElementById('rocks');
  var sceneArray = [[0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5], [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 8.5], [0, .5, 1, 1.5, 4.5, 8.5], [0, 4.5, 5, 5.5, 8.5], [0, 1.5, 2, 2.5, 4.5, 5, 5.5, 8.5], [0, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 8.5], [0, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 8.5], [0, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 8.5], [0, 8.5], [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8.5], [0, 8.5], [0, 8, 8.5], [0, .5, 1, 1.5, 2, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5 ]];
  var imgSrc = document.getElementById('rocks');
  let y = 0;
  sceneArray.forEach((value) => {
    value.forEach((x) => {
      makeBlock(x, y, imgSrc);
    });
    y += 50;
  });
  //-------------------------------------------------Zone Events
  new EventTrigger(250, 650, 150, 25, function(){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc[1] = 0;
    loadZone('scene02');
  });
  // --------------------------------------create zone object
  new ZoneMaker('scene03', mapArray, passThruArray, npcArray, containerArray, eventArray, itemArray);
}
// ------------------------------------------ZONE 04
function createScene04(){
  // ----------------------------Map
  var imgSrc = document.getElementById('rocks');
  var sceneArray = [[0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5], [0, .5, 5, 5.5, 6, 8.5], [0, .5, 2, 2.5, 3, 3.5, 5, 5.5, 6, 7, 7.5, 8, 8.5], [0, 2, 2.5, 3, 3.5, 5, 5.5, 7, 8.5], [2, 2.5, 3, 3.5, 5, 5.5, 6.5, 7, 8.5], [2, 2.5, 3, 3.5, 5, 5.5, 8.5], [1.5, 2, 3, 5, 5.5, 6, 7, 8.5], [0, 1, 1.5, 2, 3, 4.5, 5, 5.5, 6, 7, 8.5], [0, 2, 3, 4, 4.5, 5, 5.5, 6, 7, 7.5, 8, 8.5], [0, 3, 4, 4.5, 5, 5.5, 7.5, 8, 8.5], [0, 3, 4.5, 5, 8, 8.5], [0, .5, 1, 3, 8, 8.5], [0, .5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5]];
  var imgSrc = document.getElementById('rocks');
  let y = 0;
  sceneArray.forEach((value) => {
    value.forEach((x) => {
      makeBlock(x, y, imgSrc);
    });
    y += 50;
  });
  //-------------------------------------------------Zone Events
  new EventTrigger(-25, 200, 25, 150, function(){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc[0] = 850;
    loadZone('scene02');
  });
  //---------------------------------------- containers------
  var imgSrc1 = document.getElementById('chest');
  var imgSrc2 = document.getElementById('chest-open');
  new ContainerMaker(800, 150, 50, 50, imgSrc1, imgSrc2, 'chest', ['gold', 75]);
  //-----------------------------------------create zone object
  new ZoneMaker('scene04', mapArray, passThruArray, npcArray, containerArray, eventArray, itemArray);
}
// ------------------------------------------ZONE 05
function createScene05(){
  // ----------------------------Map
  var imgSrc = document.getElementById('rocks');
  //-----------------------------------------create zone object
  new ZoneMaker('scene05', mapArray, passThruArray, npcArray, containerArray, eventArray, itemArray);
}
// ------------------------------------------ZONE 06
function createScene06(){
  // ----------------------------Map
  var imgSrc = document.getElementById('rocks');
  //-----------------------------------------create zone object
  new ZoneMaker('scene06', mapArray, passThruArray, npcArray, containerArray, eventArray, itemArray);
}
// ------------------------------------------ZONE 07
function createScene07(){
  // ----------------------------Map
  var imgSrc = document.getElementById('rocks');
  //-----------------------------------------create zone object
  new ZoneMaker('scene07', mapArray, passThruArray, npcArray, containerArray, eventArray, itemArray);
}

function boxItUp(){
  createScene01();
  resetArrays();
  createScene02();
  resetArrays();
  createScene03();
  resetArrays();
  createScene04();
  resetArrays();
  createScene05();
  resetArrays();
  createScene06();
  resetArrays();
  createScene07();
  resetArrays();
  return new AdventureMaker('adventure one', zoneArray);
}

//------------------ Make the map objects -------------------
function makeBlock(x, y, imgSrc){
  new BlockMaker (x*100, y, 50, 50, imgSrc);
}
// function makeBlock(x, y, imgSrc){
//   new BlockMaker (x*10, y*10, 50, 50, imgSrc);
// }

//------------------ Reset the Arrays -----------------------
function resetArrays(){
  mapArray = [];
  passThruArray = [];
  npcArray = [];
  containerArray = [];
  eventArray = [];
  itemArray = [];
}
