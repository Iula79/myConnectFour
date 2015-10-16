$(document).ready(function() {
    console.log('loaded');
    //creating a board in js
    var newBoard = new MyBoard();
    newBoard.makeBoard();
    $('button').text("Start Game");
    //creating a board in html
    var board = $('.board');
    var currentPlayer = "R";
    //adding an event listener to each cell
    board.on("click", ".cell", function() {
        var index = this.id.split('-');
        //gives me the cell on the board that has that index
        //var cell = newBoard.board[index[0]][index[1]];
        //gives me the column(array) on the board that has that index
        var columnIndex = newBoard.board[index[0]];
        //assigns that position the value of "r"
        if (columnIndex.length <= 6) {
            columnIndex.push(currentPlayer);
            var cellIndex = (columnIndex.length - 1);
            var newId = index[0] + '-' + cellIndex;
            console.log(newId);
            $(this).id = newId;
            $(this).css('background-color','red');
        }
        //index1.push(new Cell());
        //index1.value = currentPlayer;
        console.log(columnIndex);
        console.log(cellIndex);

    });
    console.log(newBoard);
    console.log(newBoard.board);
    console.log(newBoard.board[0]);
    console.log(newBoard.board[0][0]);
    // board.click('.col',function(){
    //     console.log(event.target);
    //     for (var i = 0; i<6; i++){

    //}
    //});
    //$('#1').click(function(){alert('hello')})
});





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
    this.checkWin = function() {};
};

var Game = {


};
