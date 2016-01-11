$(document).ready(function() {

    console.log('loaded');
    //creating a board in js
    var newBoard = new MyBoard();
    //newBoard.makeBoard();
    $('button').text("Start Game");
    $('button').on("click",function(){
        newBoard.makeBoard();
        $('button').text("Reset Game");
    })
    //creating a board in html
    var board = $('.board');
    //adding an event listener to each cell
    board.on("click", ".cell", function() {
        //getting the coordinates of the cell clicked
        var clickedCellCoordinates = this.id.split('-');
        var colIndex = parseInt(clickedCellCoordinates[0]);
        //var cell = newBoard.board[index[0]][index[1]];
        //gives me the array on the board that has the cell's column index
        var selectedColumnArray = newBoard.board[colIndex];
        //console.log(selectedColumnArray)
        //pushing the value representing the current player on the first available spot on the board array (unless it is already full)
        if (selectedColumnArray.length <= 6) {
            selectedColumnArray.push(newBoard.currentPlayer);
            console.log(selectedColumnArray)
            //console.log(newBoard.board)
            var rowIndex = (selectedColumnArray.length - 1);
            var newId = colIndex + '-' + rowIndex;
            //console.log(newId);
            //console.log(rowIndex);
            //Changing the color of the cell and switching player

            if (newBoard.currentPlayer == "R") {
                document.getElementById(newId).style.background = 'red';
                checkWinner(colIndex,rowIndex,newBoard.currentPlayer, newBoard.board);
                newBoard.currentPlayer = "B";

            } else {
                document.getElementById(newId).style.background = 'black';
                newBoard.currentPlayer = "R";
                checkWinner(colIndex,rowIndex,newBoard.currentPlayer, newBoard.board);
            }
        }
    });
});



var MyBoard = function() {
    this.currentPlayer = "R";
    this.board = [];
    this.player1 = null;
    this.player2 = null;
    this.makeBoard = function() {
        for (var i = 0; i < 7; i++) {
            //creating the Cols in html
            var myCol = $('<div>');
            //adding the class to the Cols
            myCol.addClass("col");
            myCol.attr('id', i);
            //creating the Cols in js
            var col = [];
            for (var j = 0; j < 6; j++) {
                //adding the cells to the Col
                //col.push(new Cell());
                //creating the cells in html
                var myCell = $('<div>');
                myCell.addClass("cell");
                var identifier = i + '-' + j;
                myCell.attr("id", identifier);
                //attach cell divs to Col divs
                myCol.append(myCell);
            }
            //adding the Cols to the board
            this.board.push(col);
            $('.board').append(myCol);
        }
    };
    this.destroyBoard = function(){

    }
};

var checkWinner = function(col, row, player, table){
    if (checkUpDown(col, row, player,table) ||
        checkLeftRight(col, row, player,table) ||
        checkUpLeftDownRight(col, row, player,table) ||
        checkDownLeftUpRight(col, row, player,table)){
            alert("winner is " + player)
      return true;
    }
    return false;
};

    var checkLeftRight = function(col, row, player, table){
    var colRight = col;
    var colLeft = col;
    var sum = 1;
    while (definedCell(++colRight,row, player,table)) {
        console.log("here");
        sum++;
    }
    while (definedCell(--colLeft,row, player,table)) {
        console.log("also here");
        sum++;
    }
    if (sum >= 4) {
        console.log(player +"wins");
        return true;
    }
    return false;
};

var checkUpDown = function(col, row, player, table){
var rowUp = row;
var rowDown = row;
var sum = 1;
while (definedCell(col,++rowUp, player,table)) {
    sum++;
}
while (definedCell(col,--rowDown, player,table)) {
    sum++;
}
if (sum >= 4) {
    return true;
}
return false;
};

var checkUpLeftDownRight = function(col, row, player, table){
var rowUL = row;
var rowDR = row;
var colUL = col;
var colDR = col;
var sum = 1;
while (definedCell(--colUL,++rowUL, player,table)) {
    sum++;
}
while (definedCell(++colDR,--rowDR, player,table)) {
    sum++;
}
if (sum >= 4) {
    return true;
}
return false;
};

var checkDownLeftUpRight = function(col, row, player, table){
var rowUR = row;
var rowDL = row;
var colUR = col;
var colDL = col;
var sum = 1;
while (definedCell(++colUR,++rowUR, player,table)) {
    sum++;
}
while (definedCell(--colDL,--rowDL, player,table)) {
    sum++;
}
if (sum >= 4) {
    alert(player +"wins");
    return true;
}
return false;
};

var definedCell = function(col, row, player, table){
    if (table[col] && table[col][row]) {
        return table[col][row] == player;
    } else {
        return false;
    }
};

var resetBoard = function(){
}

var Game = {


};
