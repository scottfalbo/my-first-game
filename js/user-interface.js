'use strict';

// ------------------------------------------------ Pop Menus -----
$(function(){
  // ----------------------open the popup menu for the corresponding ico----
  $('.slide').click(function(event){
    $(event.target.children).slideToggle(500);
  });
  $('.fade').click(function(event){
    $(event.target.children).fadeToggle(500);
  });
  // ------------------- stops clicking on popup from closing the window ------
  $('#playerUI>li>section').click(function(event){
    event.stopPropagation();
  });
  // ---------------------------------- X button to close each window-------
  $('.closeX').click(function(event){
    var temp = $(event.target).parent();
    $(temp).hide();
    // $(event.target.parent).hide();
  });
});
// ------------------------------- Closes all menus when escape is hit-----
function closeAll(){
  $(function(){
    $('.popupUI').hide();
  });
}
