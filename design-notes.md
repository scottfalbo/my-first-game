## First Game

*9/24/20*

+ Dialed in HTML/CSS structure.
+ Added the basic UI buttons and corresponding windows.
+ Redid how the zones load both on load and on screen change.

## Starting over completely
*9/19/20*
Starting with better planning this time instead of trying to add things as I go.

+ I was running into the issue of the game remembering what you had done if you left a screen and came back.  Each time the screen was loading a fresh build.  Need to build each level into it's own object that saves it's own progress.

*Started 9/4 2020*

+ **Brain Dropping** of things I'd like to include
  + Turn based combat.
  + Collecting items, equipment and keys
    + Combining items to solve puzzles, open chests and unlock doors.
  + Upgradable character stats and equipment.
+ **Thoughts on initial approach.**
  + I'm going to try to use layered `<canvas>` elements with independent elements for the zone map, hero, mobs and items.
  + I'll also need hidden expandable frames for inventory, equipment, character sheet, quest log and a main menu.
  + Need to also consider a combat window.

### Task One
+ Build out two `<canvas>` elements.  One for the zone map and one for the hero. 
  + The zone map layer should have the play field with background imagery as well as zone barriers.
  + The hero layer will render and move the hero around making sure it can't move through barriers or the element edge.

*updated 9/7*

+ Created `js/map-01.js` to hold the environmental constructor functions as well as the instantiate code.
+ Got the the `checkPath()` function working properly. The hero sprite is restricted by environmental objects.

### Task Two
+ Build out a basic map.
+ Populate some items and work on even triggers.
+ Add a basic UI 


