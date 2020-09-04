# my-first-game

## First Game
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