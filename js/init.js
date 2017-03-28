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
function createBoardFromArray(arr2D, n){
    var el = document.getElementById("board");
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            var tileElement = document.createElement("input");
            tileElement.setAttribute("type","number");
            tileElement.classList.add("fixedNum");
            tileElement.classList.add("tile");
            tileElement.id = "tile" + i.toString() + j.toString();
            tileElement.setAttribute("oninput","changeTile(this)");
            tileElement.value = arr2D[i][j]; //For debugging
            el.appendChild(tileElement);
        }
    }
};
function readBoard(n) {
    var arrTileNums = createSquareArray(n);
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            var idName = "tile" + i.toString() + j.toString();
            var tileElement = document.getElementById(idName);
            arrTileNums[i][j] = parseInt((tileElement.value));
        }
    }
    return arrTileNums;
}

window.onload = function () {
};
var arr = [
[0,0,3,0,2,0,6,0,0],
[9,0,0,3,0,5,0,0,1],
[0,0,1,8,0,6,4,0,0],
[0,0,8,1,0,2,9,0,0],
[7,0,0,0,0,0,0,0,8],
[0,0,6,7,0,8,2,0,0],
[0,0,2,6,0,9,5,0,0],
[8,0,0,2,0,3,0,0,9],
[0,0,5,0,1,0,3,0,0],
]
;
createBoardFromArray(arr, 9);
var b = new Board(readBoard(9));
