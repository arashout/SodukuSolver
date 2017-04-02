"use strict";
/**
 * The function that runs everytime user changes
 * the number on a tile
 * The function attempts to change the global
 * board representation and will notify the user
 * if the number cannot be placed
 * @param {object} tileElement [[Description]]
 */
function changeTile(tileElement) {
    var rc = parseTileId(tileElement.id);
    var tileValue = parseInt(tileElement.value);
    if (isNaN(tileValue)) {
        // Reset tile, if input field is ""
        globalBoard.setNum(0, rc.row, rc.column);
        return;
    }
    var result = globalBoard.setNum(tileValue, rc.row, rc.column);
    if (!result) console.log("Couldn't assign number");
    globalBoard.drawBoard();
}

//BOARD CREATION FUNCTIONS
/**
 * Initializes the board given
 * @param {object} inputElement [[Description]]
 */
function initBoard(n){
    initTiles(n);
    globalBoard = new Board(createZeroMatrix(n));
}
function initTiles(n) {
    var el = document.getElementById("board");
    // Clear previous tiles first
    while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            var tileElement = document.createElement("input");
            tileElement.setAttribute("type", "number");
            tileElement.setAttribute("min", 1);
            tileElement.setAttribute("max", n);
            tileElement.classList.add("tile");
            // Additional class that varies width/height of tiles
            // based on "n", where n is dimension of board (nxn)
            tileElement.classList.add("dimension" + n);
            tileElement.id = "tile" + i.toString() + j.toString();
            // The cool thing about this event is that if I change the
            // value with javascript the function doesn't run
            // This is actually perfect for me! Since I only want it
            // to fire when the user changes the values
            tileElement.setAttribute("oninput", "changeTile(this)");
            el.appendChild(tileElement);
        }
    }
};
