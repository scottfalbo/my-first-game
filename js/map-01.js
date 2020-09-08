'usr strict';

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
  
}

buildScene01();
