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
            // The cool thing about this event is that if I change the
            // value with javascript the function doesn't run
            // This is actually perfect for me! Since I only want it
            // to fire when the user changes the values
            tileElement.setAttribute("oninput","changeTile(this)");
            tileElement.value = arr2D[i][j];
            el.appendChild(tileElement);
        }
    }
};
function resetBoard(n){
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            var idName = "tile" + i.toString() + j.toString();
            var tileElement = document.getElementById(idName);
            // Reset to blank
            tileElement.classList.remove("generatedNum");
            tileElement.classList.remove("fixedNum");
            tileElement.value = "";
        }
    }
}
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
            // Only read values that user enters (red tiles), otherwise enter blank
            if(tileElement.value === "" && !tileElement.classList.contains("fixNum")) arrTileNums[i][j] = 0;
            else arrTileNums[i][j] = parseInt((tileElement.value));
        }
    }
    return arrTileNums;
}
