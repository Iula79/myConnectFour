
var ROW_LEN = 6;
var COL_LEN = 7;
var board = new Array(ROW_LEN);

for (i = 0; i < board.length; i++) {
    board[i] = new Array(COL_LEN);
    for (j = 0; j < board[i].length; j++) {
        board[i][j] = "(" + i + "," + j + ")";
    }
}

for (i = 0; i < board.length; i++) {
    console.log(board[i]);
}

var saved_array = [];
for (i=0;i<board.length;i++){
    for (j=0;j<board[i].length;j++) {
        if (j === 0) { //get first column
            saved_array.push(board[i][j]);
        }
    }
}
console.log("col 0: " + saved_array);
