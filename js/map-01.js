'use strict';

// --------------- ZONE CONSTRUCTORS -------------
// global array to hold blocks
var blocks = [];
// block constructor, use multiples of 25
function BlockMaker(x, y, w, h, imgSrc){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.imgSrc = imgSrc;
  blocks.push(this);
}
function ChestMaker(x, y, w, h, imgSrc, contents, quantity){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.imgSrc = imgSrc;
  this.contents = contents;
  this.quantity = quantity;
  blocks.push(this);
}

// Instantiate some blocks
function buildScene01(){
  var imgSrc = document.getElementById('tile');
  for (var n = 0; n < 800; n += 50){
    new BlockMaker(n, 0, 50, 50, imgSrc);
    new BlockMaker(n, 550, 50, 50, imgSrc);
  }
  for (n = 0; n < 600; n += 50){
    new BlockMaker(0, n, 50, 50, imgSrc);
    new BlockMaker(750, n, 50, 50, imgSrc);
  }
  new BlockMaker(150, 150, 50, 50, imgSrc);
  new BlockMaker(150, 450, 50, 50, imgSrc);
  new BlockMaker(650, 150, 50, 50, imgSrc);
  new BlockMaker(650, 450, 50, 50, imgSrc);

  imgSrc = document.getElementById('chest');
  new ChestMaker(50, 50, 50, 50, imgSrc, 'gold', 100);
}
buildScene01();
