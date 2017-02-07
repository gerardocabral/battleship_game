$(document).ready(function(){
 for (var row = 0; row < 10; row++) {
  $("table").append('<tr id="' + row + '"></tr>')
  for (var col = 0; col < 10; col++) {
     $('#' + row).append('<td class="tile"></td>')
  }
 }
  $("td").on("click", function() {
   $(this).addClass("hit");
  })

  var count = 1;
  $(this).on("click", function(){
    $("#torpedoCount").text("Torpedo Count" + count++)
  })
});

//'<tr id="' + row + '">'


// create a counter to keep track of how many torpedos the user has left
//num = +$(".counter").val();
