

var ship = 1;
var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];


  // var direction = Math.floor(Math.random() * 3);
  // console.log(direciton)

//pick a spot
//pick a direction use a random function
//make sure it fits
//place ship
function shipSpot() {
  for (var i = 0; i < 5; i++) {
    //for loop --> to gain 5 ship spots
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if(board[row][col] == 0){
      board[row][col] = ship;
    }
  };

  console.log(board);
  // loop through board, if board[row][col] == 0, make it equal ship
  // if it already equals ship, try again
  // keep doing this until 5 ships have been placed
};



//
// As user I expect there to be 5 single length ships on the board.
//
// Hint: Create a global variable called board and have it hold an empty array. Have that empty array hold 10 empty arrays, creating a 2d array.
// Hint: Create a global constant SHIP variable with a value of 1.
// Hint: Create a loop that accesses the board at a random row and column and places a SHIP.
// how you access a 2d array example board[0][5] use a while loop if its out of range
