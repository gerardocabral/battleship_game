$(document).ready(function(){
 for (var row = 0; row < 10; row++) {
  $("table").append('<tr id="' + row + '"></tr>')
  for (var col = 0; col < 10; col++) {
     $('#' + row).append('<td class="tile"></td>')
  }
 }
  $("td").on("click", function() {
    $("#torpedoCount").text("Torpedo Count: " + count++)
    //turn off the click on this TD
    // $("td").click(function(){} --> worked after commenting this out becuase it was making you click twice before triggering the "off click"
      $(this).off("click");
    //click triggers 'hit' class and changes color of tile
    $(this).addClass("hit");
  })
 var count = 1;
});

//'<tr id="' + row + '">'


// create a counter to keep track of how many torpedos the user has left
//num = +$(".counter").val();
