"use strict";

var n = 9;
var globalBoard;

window.onload = function () {
    initBoard(n);
    /*Bind buttons*/
    document.getElementById("solveBtn").addEventListener("click", function () {
        var s = new Solver(globalBoard);
        var rc = globalBoard.findFirstEmpty();
        console.log(s.solve(rc));
    })
    document.getElementById("resetBtn").addEventListener("click", function () {
        globalBoard.resetBoard();
        globalBoard.drawBoard();
    })
};
