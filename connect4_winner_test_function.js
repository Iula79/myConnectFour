
var B = 'B';
var R = 'R';
var row = [R,B,B,R,B,R,R];

var black_count = 0;
var red_count = 0;

var checkConnectLine = function(line) {
    if (line.length < 4) {
        return null;
    }
    for (i=0;i<line.length;i++) {
        if (line[i] === R) {
            red_count++;
            black_count = 0;
        }
        else if (line[i] === B) {
            black_count++;
            red_count = 0;
        }
        if (black_count ===4) {
            return B;
        } else if (red_count === 4) {
            return R;
        }
    }
    return null;
};

console.log(checkConnectLine(row));
