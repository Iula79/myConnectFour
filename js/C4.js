$(document).ready(function() {
    console.log('loaded');

    var board = $('.board');
    for (var i = 0; i < 6; i++) {
        var myRow = $('<div>');
        console.log(myRow);
        myRow.addClass("row");
        identifier = "R" + i;
        console.log(identifier);
        myRow.attr("id", identifier);

        for (var j = 0; j < 7; j++) {
            var myCell = $('<div>');
            console.log(myCell);
            myCell.addClass("cell");
            identifier = "C" + j;
            console.log(identifier);
            myCell.attr("id", identifier);
            myRow.append(myCell);
        }
        board.append(myRow);
    }
});




/*var myh1 = $('<h1>');
myh1.text("Connect Four");
body = $('body');
body.append(myh1);*/
