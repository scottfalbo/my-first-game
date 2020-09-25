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
  var imgSrc = document.getElementById('rocks');
  for (i = 0; i < boardWidth; i += 50){
    new BlockMaker(i, 600, 50, 50, imgSrc);
  }
  for (i = 0; i < 600; i += 50){
    new BlockMaker(i, 0, 50, 50, imgSrc);
  }
  for (i = 750; i < boardWidth; i += 50){
    new BlockMaker(i, 0, 50, 50, imgSrc);
  }
  for (var j = 50; j < 150; j += 50){
    for (i = 0; i < 200; i += 50){
      new BlockMaker(i, j, 50, 50, imgSrc);
    }
  }
  for (j = 150; j < 350; j += 50){
    for (i = 0; i < 100; i += 50){
      new BlockMaker(i, j, 50, 50, imgSrc);
    }
  }
  new BlockMaker(0, 350, 50, 50, imgSrc);
  new BlockMaker(100, 300, 50, 50, imgSrc);
  for (i = 450; i < boardHeight; i += 50){
    new BlockMaker(0, i, 50, 50, imgSrc);
  }
  for (j = 200; j < 400; j += 50){
    for (i = 350; i < 500; i += 50){
      new BlockMaker(i, j, 50, 50, imgSrc);
    }
  }
  for (i = 450; i < boardHeight; i += 50){
    new BlockMaker(300, i, 50, 50, imgSrc);
  }
  for (i = 50; i < 400; i += 50){
    new BlockMaker(850, i, 50, 50, imgSrc);
  }
  for (i = 450; i < boardHeight; i += 50){
    new BlockMaker(850, i, 50, 50, imgSrc);
  }
  new BlockMaker(800, 550, 50, 50, imgSrc);
  new BlockMaker(500, 50, 50, 50, imgSrc);
  new BlockMaker(550, 50, 50, 50, imgSrc);
  new BlockMaker(550, 100, 50, 50, imgSrc);
  new BlockMaker(750, 50, 50, 50, imgSrc);
  new BlockMaker(800, 50, 50, 50, imgSrc);
  new BlockMaker(750, 100, 50, 50, imgSrc);
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
  var sceneArray = [[0,0],[5,0], [10,0], [15,0], [20,0], [40,0], [45,0], [50,0], [55,0], [60,0], [65,0], [70,0], [75,0], [80,0], [85,0], [0,5], [5,5], [10,5], [15,5], [75,5], [85,5], [0,10], [5,10], [10,10], [85,10], [0,15], [5,15], [80,15], [85,15], [0,20], [35,20], [40,20], [55,20], [60,20], [0,25], [35,25], [40, 25], [55,25], [60,25], [0,30], [0,35], [85,35], [0,40], [5,40], [10,40], [30,40], [35,40], [40,40], [45,40], [85,40], [0,45], [5,45], [40,45], [45,45], [85,45], [0,50], [5,55], [40,50], [45,50], [50,50], [75,50], [80,50], [85,50], [0,55],[5,55], [10,55], [15,55], [20,55], [25,55], [30,55], [35,55], [40,55], [45,55], [50,55], [55,55], [75,55], [80,55], [85,55], [0,60],[5,60], [10,60], [15,60], [20,60], [25,60], [30,60], [35,60], [40,60], [45,60], [50,60], [55,60], [75,60], [80,60], [85,60]];
  for (var i = 0; i < sceneArray.length; i++){
    makeBlock(sceneArray[i][0], sceneArray[i][1], imgSrc);
  }
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
  for (var i = 0; i < boardWidth; i += 50){
    new BlockMaker(i, 0, 50, 50, imgSrc);
  }
  for (i = 0; i < 450; i += 50){
    new BlockMaker(i, 50, 50, 50, imgSrc);
  }
  for (i = 0; i < 150; i += 50){
    new BlockMaker(i, 100, 50, 50, imgSrc);
  }
  new BlockMaker(450, 100, 50, 50, imgSrc);
  for (i = 0; i < boardHeight; i += 50){
    new BlockMaker(0, i, 50, 50, imgSrc);
  }
  for (i = 0; i < boardHeight; i += 50){
    new BlockMaker(850, i, 50, 50, imgSrc);
  }
  for (var j = 150; j < 400; j += 50){
    for (i = 450; i < 600; i += 50){
      new BlockMaker(i, j, 50, 50, imgSrc);
    }
  }
  for (j = 300; j < 400; j += 50){
    for (i = 300; i < 450; i += 50){
      new BlockMaker(i, j, 50, 50, imgSrc);
    }
  }
  for (var j = 200; j < 400; j += 50){
    for (i = 150; i < 300; i += 50){
      new BlockMaker(i, j, 50, 50, imgSrc);
    }
  }
  for (i = 0; i < 750; i += 50){
    new BlockMaker(i, 450, 50, 50, imgSrc);
  }
  for (i = 0; i < 250; i += 50){
    new BlockMaker(i, 600, 50, 50, imgSrc);
  }
  for (i = 400; i < boardWidth; i += 50){
    new BlockMaker(i, 600, 50, 50, imgSrc);
  }
  new BlockMaker(800, 550, 50, 50, imgSrc);
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
  var sceneArray = [[0,0],[5,0], [10,0], [15,0], [20,0], [25,0], [30,0], [35,0], [40,0], [45,0], [50,0], [55,0], [60,0], [65,0], [70,0], [75,0], [80,0], [85,0], [0,5], [5,5], [50,5], [55,5], [60,5], [85,5], [0,10], [5,10], [20,10], [25,10], [30,10], [35,10], [50,10], [55,10], [60,10], [70,10], [75,10], [80,10], [85,10], [0,15], [20,15], [25,15], [30,15], [35,15], [50, 15], [55,15], [70,15], [85,15], [20,20], [25,20], [30,20], [35,20], [50,20], [55,20], [65,20], [70,20], [85,20], [20,25], [25,25], [30,25], [35,25], [50,25], [55,25], [85,25], [15,30], [20,30], [30,30], [50,30], [55,30], [60,30], [70,30], [85,30], [0,35], [10,35], [15,35], [20,35], [30,35], [45,35], [50,35], [55,35], [60,35], [70,35], [85,35], [0,40], [20,40], [30,40], [40,40], [45,40], [50,40], [55,40], [60,40], [70,40], [75,40], [80,40], [85,40], [0,45], [30,45], [40,45], [45,45], [50,45], [55,45], [75,45], [80,45], [85,45], [0,50], [30,50], [45,50], [50,50], [80,50], [85,50], [0,55], [5,55], [10,55], [30,55], [80,55], [85,55], [0,60],[5,60], [10,60], [15,60], [20,60], [25,60], [30,60], [35,60], [40,60], [45,60], [50,60], [55,60], [60,60], [65,60], [70,60], [75,60], [80,60], [85,60]];
  for (var i = 0; i < sceneArray.length; i++){
    makeBlock(sceneArray[i][0], sceneArray[i][1], imgSrc);
  }
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
  new BlockMaker (x*10, y*10, 50, 50, imgSrc);
}

//------------------ Reset the Arrays -----------------------
function resetArrays(){
  mapArray = [];
  passThruArray = [];
  npcArray = [];
  containerArray = [];
  eventArray = [];
  itemArray = [];
}
