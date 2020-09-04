'use strict';

// Get the size of the play field and puts limits into mapBorder
// mapBorder = [top, right, bottom, left];
var mapBorder = [];
function zoneSize(){
  var getZone = document.getElementById('zone');
  var zoneWidth = getZone.getAttribute('width');
  var zoneHeight = getZone.getAttribute('height');
  mapBorder = [0, (zoneWidth-50), (zoneHeight-50), 0]; //eslint-disable-line
}
zoneSize();
