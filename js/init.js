"use strict";
function createSquareArray(n) {
    var arr = [];
    for(var i = 0; i < n; i++){
        // Initialize rows of 2D array here
        arr[i] = [];
        for(var j = 0; j < n; j++){
            // Initialize columns in each row
            arr[i].push([]);
        }
    }
    return arr;
};
function createBoard(n) {
    var el = document.getElementById("board");
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            var tileDiv = document.createElement("div");
            tileDiv.classList.add("tile");
            tileDiv.id = "tile" + i.toString() + j.toString();
            tileDiv.innerHTML = i.toString() + j.toString(); //For debugging
            el.appendChild(tileDiv);
        }
    }
};

function readBoard(n) {
    var arrTileNums = createSquareArray(n);
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            var idName = "tile" + i.toString() + j.toString();
            var tileDiv = document.getElementById(idName);
            arrTileNums[i][j] = parseInt((tileDiv.innerHTML));
        }
    }
    return arrTileNums;
}
window.onload = function () {
    createBoard(9);
    console.log(readBoard(9));
};