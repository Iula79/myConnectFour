$(document).ready(function() {

    console.log('loaded');
    //creating a board in js
    var newBoard = new MyBoard();
    newBoard.makeBoard();
    $('button').text("Start Game");
    //creating a board in html
    var board = $('.board');
    //this below created confusion
    //var currentPlayer = newBoard.currentPlayer;

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
            checkUpDown(colIndex,rowIndex,newBoard.currentPlayer, newBoard.board);
            if (newBoard.currentPlayer == "R") {
                newBoard.currentPlayer = "B";
                document.getElementById(newId).style.background = 'red';

            } else {
                newBoard.currentPlayer = "R";
                document.getElementById(newId).style.background = 'black';

            }

            //console.log(newBoard.currentPlayer);

            //checkWinner();
        }
    });
});





var MyBoard = function() {
    this.currentPlayer = "R";
    this.board = [];
    this.player = null;
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
};

var checkWinner = function(cell, currentPlayer){


    if (checkUpDown(col, row, player) ||
        checkLeftRight(col, row, player) ||
        checkUpLeftDownRight(col, row, player) ||
        checkDownLeftUpRight(col, row, player)){
      return true;
    };
    return false;
}

var checkUpDown = function(mycol, myrow, player, table){
    var sum = 1;
    var col = mycol;
    var row = myrow;
    // var player = thisplayer;
    console.log("this is sum:");
    console.log(sum);
    console.log("this is column:");
    console.log(col);
    console.log("this is row:");
    console.log(row);
    console.log("this is player:");
    console.log(player);
    console.log(table[col][row]);
    console.log(table[--col][row]);
    console.log(table[col--][row]);
    console.log(table[++col][row]);
    console.log(table[col++][row]);
    while (checkCell(++col,row, player,table)) {
        console.log("here");
        sum++;
    }
    while (checkCell(--col,row, player,table)) {
        sum++;
    }
    if (sum >= 4) {
        console.log(player +"wins");
        return true;
    }
    return false;
};

var checkCell = function(col, row, player, table){
    if (table[col][row]) {
        return table[col][row] == player;
    } else {
        return false;
    }

}
// this.checkWin = function() {
//     sum = 0;
//indexNum = parseInt(index[0]);
//     while (sum <= 4) {
//         if (newBoard.board[indexNum + 1][cellIndex + 1] == currentPlayer || newBoard.board[indexNum - 1][cellIndex - 1] == currentPlayer) {
//             sum = sum++;
//             if (sum == 4) {
//                 return currentPlayer + "wins";
//             }
//         } else if (newBoard.board[indexNum + 1][cellIndex - 1] == currentPlayer &&
//             newBoard.board[indexNum - 1][cellIndex + 1] == currentPlayer) {
//             sum = sum++;
//             if (sum == 4) {
//                 return currentPlayer + "wins";
//             }
//         } else if (newBoard.board[indexNum][cellIndex - 1] == currentPlayer &&
//             newBoard.board[indexNum][cellIndex + 1] == currentPlayer) {
//             sum = sum++;
//             if (sum == 4) {
//                 return currentPlayer + "wins";
//             }
//         } else {
//             sum = 0;
//         }
//     }
//};



var Game = {


};
