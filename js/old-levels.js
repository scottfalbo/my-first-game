'use strict';

thePlayer.mapLoc[0] = 150;
thePlayer.mapLoc[1] = 450;
// Build the Map
function buildScene01(){
  theZone.clearRect(0, 0, 800, 600);
  theItems.clearRect(0, 0, 800, 600);
  // ------------------------------------clear the arrays
  blocks = [];
  passThrough = [];
  objectEvents = [];
  // ----------------------------------------------rocks
  var imgSrc = document.getElementById('rocks');
  new BlockMaker(550, -50, 100, 50, imgSrc);
  for (var n = 0; n < 800; n += 50){
    new BlockMaker(n, 550, 50, 50, imgSrc);
  }
  for (n = 0; n < 550; n += 50){
    new BlockMaker(n, 0, 50, 50, imgSrc);
  }
  new BlockMaker(650, 0, 50, 50, imgSrc);
  new BlockMaker(700, 0, 50, 50, imgSrc);
  for (n = 0; n < 600; n += 50){
    new BlockMaker(0, n, 50, 50, imgSrc);
    new BlockMaker(750, n, 50, 50, imgSrc);
  }
  for (n = 50; n < 300; n += 50){
    new BlockMaker(n, 250, 50, 50, imgSrc);
  }
  for (n = 50; n < 200; n += 50){
    new BlockMaker(150, n, 50, 50, imgSrc);
  }
  for (n = 100; n < 250; n += 50){
    new BlockMaker(250, n, 50, 50, imgSrc);
  }
  new BlockMaker(100, 150, 50, 50, imgSrc);
  for (n = 50; n < 200; n += 50){
    new BlockMaker(450, n, 50, 50, imgSrc);
  }
  new BlockMaker(500, 200, 50, 50, imgSrc);
  new BlockMaker(550, 200, 50, 50, imgSrc);
  new BlockMaker(500, 250, 50, 50, imgSrc);
  new BlockMaker(550, 250, 50, 50, imgSrc);
  new BlockMaker(550, 300, 50, 50, imgSrc);
  new BlockMaker(500, 350, 50, 50, imgSrc);
  new BlockMaker(550, 500, 50, 50, imgSrc);
  new BlockMaker(650, 450, 50, 50, imgSrc);
  // --------------------------------------------river
  imgSrc = document.getElementById('river-top');
  for (n = 0; n < 300; n += 50){
    new BlockMaker(n, 400, 50, 25, imgSrc);
  }
  for (n = 350; n < 700; n += 50){
    new BlockMaker(n, 400, 50, 25, imgSrc);
  }
  new BlockMaker(750, 400, 50, 25, imgSrc);
  imgSrc = document.getElementById('river-bottom');
  for (n = 0; n < 300; n += 50){
    new BlockMaker(n, 425, 50, 25, imgSrc);
  }
  for (n = 350; n < 700; n += 50){
    new BlockMaker(n, 425, 50, 25, imgSrc);
  }
  new BlockMaker(750, 425, 50, 25, imgSrc);

  // -------------------------------little rocks and bushes
  imgSrc = document.getElementById('little-rocks');
  new BlockMaker(400, 50, 25, 25, imgSrc);
  new BlockMaker(425, 50, 25, 25, imgSrc);
  new BlockMaker(50, 525, 25, 25, imgSrc);
  new BlockMaker(350, 525, 25, 25, imgSrc);
  new BlockMaker(725, 275, 25, 25, imgSrc);
  imgSrc = document.getElementById('small-bush');
  new BlockMaker(50, 500, 25, 25, imgSrc);
  new BlockMaker(75, 500, 25, 25, imgSrc);
  new BlockMaker(75, 525, 25, 25, imgSrc);
  new BlockMaker(425, 75, 25, 25, imgSrc);
  new BlockMaker(350, 275, 25, 25, imgSrc);
  new BlockMaker(650, 175, 25, 25, imgSrc);

  // --------------------------------pass through objects
  imgSrc = document.getElementById('bridge');
  new PassThroughMaker(300, 400, 50, 50, imgSrc);
  new PassThroughMaker(700, 400, 50, 50, imgSrc);
  //--------------------------------------add event triggers
  scene01Events();
  //------------------------------------- add items
  // scene01Items();
  // ----------------------------------------write the new zone
  renderZone();
  renderAll();
}

function buildScene02(){
  theZone.clearRect(0, 0, 800, 600);
  theItems.clearRect(0, 0, 800, 600);
  // ------------------------------------clear the arrays
  blocks = [];
  passThrough = [];
  objectEvents = [];
  // -------------------------------------------rocks
  var imgSrc = document.getElementById('rocks');
  new BlockMaker(550, 600, 100, 25, imgSrc);
  for (var n = 0; n < 800; n +=50){
    new BlockMaker(n, 0, 50, 50, imgSrc);
  }
  for (n = 0; n < 550; n +=50){
    new BlockMaker(n, 550, 50, 50, imgSrc);
  }
  for (n = 0; n < 300; n +=50){
    new BlockMaker(n, 450, 50, 50, imgSrc);
  }
  for (n = 0; n < 450; n +=50){
    new BlockMaker(n, 500, 50, 50, imgSrc);
  }
  for (n = 0; n < 500; n +=50){
    new BlockMaker(n, 200, 50, 50, imgSrc);
  }
  for (n = 150; n < 350; n +=50){
    new BlockMaker(200, n, 50, 50, imgSrc);
  }
  new BlockMaker(650, 550, 50, 50, imgSrc);
  new BlockMaker(700, 550, 50, 50, imgSrc);
  for (n = 0; n < 600; n += 50){
    new BlockMaker(0, n, 50, 50, imgSrc);
    new BlockMaker(750, n, 50, 50, imgSrc);
  }
  for (n = 350; n < 800; n += 50){
    new BlockMaker(n, 50, 50, 50, imgSrc);
  }
  for (n = 600; n < 800; n += 50){
    new BlockMaker(n, 100, 50, 50, imgSrc);
    new BlockMaker(n, 150, 50, 50, imgSrc);
  }
  for (n = 650; n < 800; n += 50){
    new BlockMaker(n, 200, 50, 50, imgSrc);
    new BlockMaker(n, 250, 50, 50, imgSrc);
    new BlockMaker(n, 300, 50, 50, imgSrc);
  }
  // -------------------------------little rocks and bushes
  imgSrc = document.getElementById('little-rocks');
  new BlockMaker(200, 125, 25, 25, imgSrc);
  new BlockMaker(350, 175, 25, 25, imgSrc);
  new BlockMaker(375, 175, 25, 25, imgSrc);
  new BlockMaker(400, 100, 25, 25, imgSrc);
  new BlockMaker(425, 100, 25, 25, imgSrc);
  new BlockMaker(175, 325, 25, 25, imgSrc);
  new BlockMaker(350, 325, 25, 25, imgSrc);
  new BlockMaker(650, 425, 25, 25, imgSrc);
  new BlockMaker(425, 475, 25, 25, imgSrc);
  imgSrc = document.getElementById('small-bush');
  new BlockMaker(575, 100, 25, 25, imgSrc);
  new BlockMaker(100, 400, 25, 25, imgSrc);
  new BlockMaker(125, 400, 25, 25, imgSrc);
  new BlockMaker(100, 425, 25, 25, imgSrc);
  new BlockMaker(125, 425, 25, 25, imgSrc);
  new BlockMaker(250, 350, 25, 25, imgSrc);
  new BlockMaker(275, 350, 25, 25, imgSrc);
  new BlockMaker(250, 375, 25, 25, imgSrc);
  new BlockMaker(275, 375, 25, 25, imgSrc);
  new BlockMaker(400, 475, 25, 25, imgSrc);
  new BlockMaker(475, 375, 25, 25, imgSrc);
  new BlockMaker(500, 400, 25, 25, imgSrc);
  new BlockMaker(500, 425, 25, 25, imgSrc);
  new BlockMaker(600, 200, 25, 25, imgSrc);
  new BlockMaker(625, 200, 25, 25, imgSrc);
  new BlockMaker(625, 225, 25, 25, imgSrc);
  scene02Events();
  // ----------------------------------------write the new zone
  renderZone();
  renderAll();
}

//-------------------------------EVENTS
//----------------------------------------zone change
function scene01Events(){
  new EventTrigger(550, 0, 100, 25, function(){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc[1] = 550;
    buildScene02();
  });
  //---------------------------------------chest
  var imgSrc1 = document.getElementById('chest');
  var imgSrc2 = document.getElementById('chest-open');
  new ContainerMaker(50, 450, 50, 50, imgSrc1, imgSrc2, 'chest', ['gold', 25]);
  new ContainerMaker(500, 150, 50, 50, imgSrc1, imgSrc2, 'chest', ['gold', 50]);
}

//----------------------------------------zone change
function scene02Events(){
  new EventTrigger(550, 575, 100, 25, function(){
    theHero.clearRect(thePlayer.mapLoc[0], thePlayer.mapLoc[1], thePlayer.mapLoc[2], thePlayer.mapLoc[3]);
    thePlayer.mapLoc[1] = 0;
    buildScene01();
  });
}


// old prototype for opening chest

ContainerMaker.prototype.react = function(event){
  if(event === 'open' || event === 'use'){
    if (this.opened === true){
      infoOutput(`You've already opened this ${this.type}.`);
    } else {
      this.imgSrc1 = this.imgSrc2;
      thePlayer.gold += this.contents[1];
      infoOutput(`You open the ${this.type} and find ${this.contents[1]} ${this.contents[0]}.`);
      this.opened = true;
      console.log(objectEvents);
    }
  } else if (event === 'talk'){
    infoOutput(`You talk to the ${this.type}, it doesn't respond.`);
  } else if (event === 'search'){
    infoOutput(`You search the area and find a ${this.type}.`);
  }
  renderStats();
  eventObjects();
};
