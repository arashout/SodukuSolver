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
            tileElement.classList.add("tile");
            tileElement.id = "tile" + i.toString() + j.toString();
            tileElement.setAttribute("oninput","changeTile(this)");
            tileElement.value = arr2D[i][j]; //For debugging
            el.appendChild(tileElement);
        }
    }
};
function changeTile(tileElement){
    if(tileElement.value > 0) tileElement.classList.add("fixedNum");
    else tileElement.classList.remove("fixedNum");
}
function readBoard(n) {
    var arrTileNums = createSquareArray(n);
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            var idName = "tile" + i.toString() + j.toString();
            var tileElement = document.getElementById(idName);
            // Read values from input field - 0 represents empty
            if(tileElement.value === "") arrTileNums[i][j] = 0;
            else arrTileNums[i][j] = parseInt((tileElement.value));
        }
    }
    return arrTileNums;
}
