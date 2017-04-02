"use strict";

function changeTile(tileElement) {
    var rc = parseTileId(tileElement.id);
    var tileValue = parseInt(tileElement.value);
    if (isNaN(tileValue)) {
        // Reset tile
        globalBoard.setNum(0, rc.row, rc.column);
        return;
    }
    var result = globalBoard.setNum(tileValue, rc.row, rc.column);
    if (!result) console.log("Couldn't assign number");
    globalBoard.drawBoard();
}

function parseTileId(tileId) {
    var matches = tileId.match(/\d/g);
    var rc = {
        row: matches[0],
        column: matches[1]
    };
    return rc;
}
