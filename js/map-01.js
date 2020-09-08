'usr strict';

// global array to hold blocks
var blocks = [];

// block constructor, use multiples of 25
function BlockMaker(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  blocks.push(this);
}
function buildScene01(){

}


buildScene01();




new BlockMaker(100, 100, 25, 25);
new BlockMaker(200, 200, 25, 25);
new BlockMaker(300, 300, 25, 25);
new BlockMaker(0, 575, 800, 25);
