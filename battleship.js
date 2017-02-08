$(document).ready(function(){
 for (var r = 0; r < 10; r++) {
  $("table").append('<tr id="' + r + '"></tr>')
  for (var c = 0; c < 10; c++) {
     $('#' + r).append('<td id="' + r + c + '" class="tile"></td>')
  }
 }
  $("td").on("click", function() {
    var row = $(this).attr("id") [0];
    var col = $(this).attr("id") [1];
    $("#torpedoCount").text("Torpedo Count: " + count++)
    if (board[row][col] == 0){
      $("#miss").text("MISS");
    }else if(board[row][col] == 1) {
      $("#hit").text("HIT");
    }
    // $(this).click(function () {
    //   $(".hitMiss").hide();
    // })
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


//.on click let the user know if the ship was hit or miss
// board[row][col] == 0 ---> miss
// board[row][col] == 1 ---> hit
