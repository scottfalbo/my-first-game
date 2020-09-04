'use strict';

// code adapted from MDN.  Listens for keyboard input from the arrow keys and calls the appropriate movement function.
window.addEventListener('keydown', function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  switch (event.key) {
  case 'ArrowDown':
    downArrow();
    break;
  case 'ArrowUp':
    upArrow();
    break;
  case 'ArrowLeft':
    leftArrow();
    break;
  case 'ArrowRight':
    rightArrow();
    break;
  default:
    return; // Quit when this doesn't handle the key event.
  }

  