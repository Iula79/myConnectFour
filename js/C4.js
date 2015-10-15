$(document).ready(function() {
console.log('loaded');
boardDivs = $('div*42>div');
body = $('body');
body.append(boardDivs);
});
