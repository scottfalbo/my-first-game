'use strict';

var mobArray = [];
// monster maker
function MonsterMaker(name, type, mapLoc, stats, exp, loot){
  this.name = name;
  this.type = type;
  this.mapLoc = mapLoc;
  this.stats = stats;
  this.exp = exp;
  this.loot = loot;
}
