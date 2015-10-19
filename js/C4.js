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
        var selectedColumnIndex = newBoard.board[index[0]];
        //assigns that position the value of "r"
        if (selectedColumnIndex.length <= 6) {
            selectedColumnIndex.push(currentPlayer);
            var rowIndex = (selectedColumnIndex.length - 1);
            var newId = index[0] + '-' + rowIndex;
            console.log(newId);
            //document.getElementById(newId).style.background = 'red';
            console.log(rowIndex);
            if (currentPlayer == "R") {
                currentPlayer = "B";
                document.getElementById(newId).style.background = 'red';

            } else {
                currentPlayer = "R";
                document.getElementById(newId).style.background = 'green';

            }

            var sum = 0;
            console.log(sum);
            var colIndex = parseInt(index[0]);
            console.log(colIndex + 1);
            while (newBoard.board[colIndex + 1][rowIndex] == currentPlayer) {
                sum++;
                colIndex++;
                rowIndex++;
                if (sum == 4) {
                    console.log(currentPlayer + "wins");
                }
            }
        }


    });


    //index1.push(new Cell());
    //index1.value = currentPlayer;

    //console.log(newBoard.board[0][0]);
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

// red = 0;
// black = 0;
//
// for (i = 0; i < board.length; i++) {
//     for (j = 0; j < board[i].length; j++) {
//         console.log(i + "," + j);
//         board[i]
//     }
//     console.log("\n");
// }
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
