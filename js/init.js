"use strict";
var n = 9;

var arr = [
[0, 0, 3, 0, 2, 0, 6, 0, 0],
[9, 0, 0, 3, 0, 5, 0, 0, 1],
[0, 0, 1, 8, 0, 6, 4, 0, 0],
[0, 0, 8, 1, 0, 2, 9, 0, 0],
[7, 0, 0, 0, 0, 0, 0, 0, 8],
[0, 0, 6, 7, 0, 8, 2, 0, 0],
[0, 0, 2, 6, 0, 9, 5, 0, 0],
[8, 0, 0, 2, 0, 3, 0, 0, 9],
[0, 0, 5, 0, 1, 0, 3, 0, 0],
];
window.onload = function () {
    /*Bind buttons*/
    document.getElementById("solveBtn").addEventListener("click", function () {
        var b = new Board(readBoard(n));
        var s = new Solver(b);
        s.solve();
    })
    document.getElementById("resetBtn").addEventListener("click", function () {
        resetBoard(n);
    })

    createBoardFromArray(arr, n);
};
