$(document).ready(function(){
  shipSpot();
 for (var r = 0; r < 10; r++) {
  $("table").append('<tr id="' + r + '"></tr>')
  for (var c = 0; c < 10; c++) {
     $('#' + r).append('<td id="' + r + c + '" class="tile"></td>')
  }
 }
  $("td").on("click", function() {
    var row = $(this).attr("id") [0];
    var col = $(this).attr("id") [1];
    $("#torpedoCount").text("Torpedo Count: " + (count--))
    if (board[row][col] == 0){
      $("#miss").text("MISS")
      $(this).addClass("misses");
    }else if(board[row][col] == 1) {
      $("#hit").text("HIT");
      $("#hit").text("HIT Count: " + (hit+=1))
      alert("NICE SHOT SOLDIER");
    }
      if (hit == 15){
      $("#winner").text("You WIN!");
      $("td").off("click");
    } else if (hit != 15 && count < 0){
        $("#winner").text("YOU LOSE!!")
        alert("GO BACK TO BOOTCAMP")
        survivors.forEach(function(survivors){
          $("#" + survivors).addClass("reveal")
        })
        fiveShip.forEach(function(fiveShip){
          $("#" + fiveShip).addClass("reveal")
        })
        fourShip.forEach(function(fourShip){
          $("#" + fourShip).addClass("reveal")
        })
        threeShip.forEach(function(threeShip){
          $("#" + threeShip).addClass("reveal")
        })
        twoShip.forEach(function(twoShip){
          $("#" + twoShip).addClass("reveal")
        });
        $("td").off("click");
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
      // resets gameboard
    $("button").on("click", function() {
    // clearShips();
    // board = [];
    // game1=game();
    location.reload();
  })

 var count = 34;
 var hit = 0;
 var miss = "";

});

//'<tr id="' + row + '">'


// create a counter to keep track of how many torpedos the user has left
//num = +$(".counter").val();


//.on click let the user know if the ship was hit or miss
// board[row][col] == 0 ---> miss
// board[row][col] == 1 ---> hit

//STEP 7&8 reference
//need to have a way to stop the game after 5 hits to display winner:
//if #hit == 5 .text --> you win
//else if #hit != 5 && #torpedoCount >25 .text --> you lose
