'usr strict';

// global array to hold blocks
var blocks = [];
var imgSrc;
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
  imgSrc = document.getElementById('tile');
  new BlockMaker(50, 50, 50, 50, imgSrc);
  new BlockMaker(100, 100, 50, 50,imgSrc);
  new BlockMaker(150, 150, 50, 50,imgSrc);
  new BlockMaker(200, 200, 50, 50,imgSrc);
}

buildScene01();
