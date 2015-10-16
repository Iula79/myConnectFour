//if current player = player 1 whenever I click on a cell it takes the first identifier and puts the cell in the //cell with the higher index number in that column. then it starts from that cell and counts 4


Evaluate rows
    Evaluate row 0
        red = 0
        black = 0
        for each element(red or black) of row/col/diag
            if element is red
                if black > 0
                    black = 0
                red++
                if red == 4 red wins exit loop
            else if element is black
                if red > 0
                    red = 0
                black++
                if black == 4 black wins exit loop
            else  //blank
                red = 0
                black = 0

---------------------------------------------------------------
                var Cell = function() {
                    this.value = null;
                    this.playable = true;
                    this.setValue = function() {
                        if (this.value == player1 || this.value == player2) {
                                return false;
                            }
                        };
                    };
