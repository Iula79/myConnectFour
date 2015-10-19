
var B = 'B';
var R = 'R';
var row = [R,B,B,R,R,R,R];

var black_count = 0;
var red_count = 0;

for (i=0;i<row.length;i++) {
    if (row[i] === R) {
        red_count++;
        black_count = 0;
    }
    else if (row[i] === B) {
        black_count++;
        red_count = 0;
    }
    if (black_count ===4) {
        console.log('black wins');
    } else if (red_count === 4) {
        console.log('red wins');
    }
}
