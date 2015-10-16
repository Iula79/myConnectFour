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
    this.board = [];
    this.player = null;
    this.makeBoard = function() {
        for (var i = 0; i < 6; i++) {
            //creating the rows in html
            var myRow = $('<div>');
            console.log(myRow);
            //adding the class to the rows
            myRow.addClass("row");
            //creating the rows in js
            var row = [];
            for (var j = 0; j < 7; j++) {
                //adding the cells to the row
                row.push(new Cell());
                //creating the cells in html
                var myCell = $('<div>');
                myCell.addClass("cell");
                var identifier = i + '-' + j;
                myCell.attr("id", identifier);
                //attach cell divs to row divs
                myRow.append(myCell);
            }
            //adding the rows to the board
            this.board.push(row);
            $('.board').append(myRow);
        }
    };
    this.checkWin = function( ) {};
};

var Game = {


};
