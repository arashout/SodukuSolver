"use strict";

function createZeroMatrix(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        // Initialize rows of 2D array here
        arr[i] = [];
        for (var j = 0; j < n; j++) {
            // Initialize columns in each row
            arr[i].push([]);
            arr[i][j] = 0;
        }
    }
    return arr;
};
var n = 9;
var globalBoard;

window.onload = function () {
    initTiles(n);
    globalBoard = new Board(createZeroMatrix(n));
    /*Bind buttons*/
    document.getElementById("solveBtn").addEventListener("click", function () {
        var s = new Solver(globalBoard);
        var rc = globalBoard.findFirstEmpty();
        s.solve(rc);
        globalBoard.drawBoard();
    })
    document.getElementById("resetBtn").addEventListener("click", function () {
        globalBoard.resetBoard();
        globalBoard.drawBoard();
    })
};
