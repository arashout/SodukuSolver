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

