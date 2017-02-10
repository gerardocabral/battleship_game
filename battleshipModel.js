

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

  var survivors = [];

  function space(row,col) {

    var nRow = row-1;
    if (nRow < 0) {
      nRow = row;
    }
    var pRow = row+1;
    if (pRow > 9) {
      pRow = row;
    }
    var nCol = col-1;
    if (nCol < 0) {
      nCol = col;
    }
    var pCol = col+1;
    if (pCol > 9) {
      pCol = col;
    }

   return (
      board[nRow][col] != ship &&
      board[pRow][col] != ship &&
      board[row][pCol] != ship &&
      board[row][nCol] != ship &&
      board[pRow][pCol] != ship &&
      board[pRow][nCol] != ship &&
      board[nRow][pCol] != ship &&
      board[nRow][nCol] != ship &&
      board[row][col] != ship
    )
  };

//variables for ship locations
var fiveShip = [];
var fourShip = [];
var threeShip = [];
var twoShip = [];

//function to call differnt ship sizes
// function shipLoc() {



  //five spot ship creator
  function fiveShipLoc() {
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if((row + 4) < 10 && (col + 4) < 10 && space(row, col) &&
    space(row + 1, col) && space(row + 2, col) && space(row + 3, col) && space(row + 4, col)){

      board[row][col] = ship;
      board[row + 1][col] = ship;
      board[row + 2][col] = ship;
      board[row + 3][col] = ship;
      board[row + 4][col] = ship;

    fiveShip.push((row.toString() + col.toString()), ((row + 1).toString() + col.toString()),
    ((row + 2).toString() + col.toString()), ((row + 3).toString() + col.toString()),
    ((row + 4).toString() + col.toString()) );
  }else {
    fiveShipLoc();
    }
  };

  // // four spot ship creator
  function fourShipLoc() {
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if((row + 3) < 10 && (col + 3) < 10 && space(row, col) &&
    space(row + 1, col) && space(row + 2, col) && space(row + 3, col) ){

      board[row][col] = ship;
      board[row + 1][col] = ship;
      board[row + 2][col] = ship;
      board[row + 3][col] = ship;

    fourShip.push((row.toString() + col.toString()), ((row + 1).toString() + col.toString()),
    ((row + 2).toString() + col.toString()), ((row + 3).toString() + col.toString()) );
    }else {
    fourShipLoc();
    }
  };

  function threeShipLoc() {
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if((row + 2) < 10 && (col + 2) < 10 && space(row, col) &&
    space(row + 1, col) && space(row + 2, col)){

      board[row][col] = ship;
      board[row + 1][col] = ship;
      board[row + 2][col] = ship;

    threeShip.push((row.toString() + col.toString()), ((row + 1).toString() + col.toString()),
    ((row + 2).toString() + col.toString()) );
    }else {
    threeShipLoc();
    }
  };

  function twoShipLoc() {
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    if((row + 1) < 10 && (col + 1) < 10 && space(row, col) &&
    space(row + 1, col)){

      board[row][col] = ship;
      board[row + 1][col] = ship;

    twoShip.push((row.toString() + col.toString()), ((row + 1).toString() + col.toString())
     );
    }else {
    twoShipLoc();
    }
  };





    // function threeShipLoc() {
    //   var row = Math.floor(Math.random() * 10);
    //   var col = Math.floor(Math.random() * 10);
    //   if(fiveShipLoc.length < 3 && (row + 2) < 10 && (col + 2) < 10 && space(row, col) &&
    //   space(row + 1, col) && space(row + 2, col) && space(row + 3, col) && space(row + 4, col)){
    //
    //     function twoShipLoc() {
    //       var row = Math.floor(Math.random() * 10);
    //       var col = Math.floor(Math.random() * 10);
    //       if(fiveShipLoc.length < 2 && (row + 4) < 10 && (col + 4) < 10 && space(row, col) &&
    //       space(row + 1, col) && space(row + 2, col) && space(row + 3, col) && space(row + 4, col)){



  // var direction = Math.floor(Math.random() * 3);
  // console.log(direciton)

  //pick a spot
  //pick a direction use a random function
  //make sure it fits
  //place ship
function shipSpot() {
  // for (var i = 0; i < 5; i++) {
    //for loop --> to gain 5 ship spots
    var row = Math.floor(Math.random() * 10);
    var col = Math.floor(Math.random() * 10);
    //if condition(space function) is met place ship, conditions to be met cannot bet touching another ship
    //top,bottom,left,right, or diagonally. cannot place ship on spot with existing ship.
   if(space(row, col)){
      board[row][col] = ship;
      survivors.push(row.toString() + col.toString());
    }
    fiveShipLoc();
    survivors.push(fiveShip);
    fourShipLoc();
    survivors.push(fourShip);
    threeShipLoc();
    survivors.push(threeShip);
    twoShipLoc();
    survivors.push(twoShip);
    console.log(board);
    console.log(survivors);
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
