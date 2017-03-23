'use strict';
function recursiveSolve(arr){
    
}







function findEmptyTile(arr) {
    for (var r = 0; r < arr.length; r++){
        for (var c = 0; c < arr[r].length; c++){
            if(arr[r][c] === undefined) return {row: r, column: c}
        }
    }
}

function isInSquare(num, r, c, arr){
    return true;
}
function isNumInRow(num, r, arr) {
    for (var c = 0; c < arr[r].length; c++){
        if(arr[r][c] === num) return true;
    }
    return false;
}

function isNumInColumn(num, c, arr) {
    for (var r = 0; r < arr.length; r++){
        if(arr[r][c] === num) return true;
    }
    return false;
}