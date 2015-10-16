$(document).ready(function() {
    console.log('loaded');
    //creating a board in js
    var newBoard = new MyBoard();
    newBoard.makeBoard();
    $('button').text("Start Game");
    //creating a board in html
    var board = $('.board');
    //adding an event listener to each cell
    board.on("click", ".cell", function() {
        var index = this.id.split('-');
        myColumn = [];
        myColumn.push;
        for (var i = 0; i<newBoard.board.length; i ++) {

        }
        var cell = newBoard.board[index[0]][index[1]];
        console.log(cell.playable);
        console.log(cell);
    });
});



var Cell = function() {
    this.value = null;
    this.playable = true;
    this.setValue = function() {
        if (this.value == player1 || this.value == player2) {
                return false;
            }
        };
    };

var MyBoard = function() {
    this.currentPlayer = "R";
    this.board = [];
    this.player = null;
    this.makeBoard = function() {
        for (var i = 0; i < 7; i++) {
            //creating the Cols in html
            var myCol = $('<div>');
            console.log(myCol);
            //adding the class to the Cols
            myCol.addClass("col");
            //creating the Cols in js
            var col = [];
            for (var j = 0; j < 6; j++) {
                //adding the cells to the Col
                col.push(new Cell());
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
    this.checkWin = function( ) {};
};

var Game = {


};
