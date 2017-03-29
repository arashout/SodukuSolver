"use strict";
function initTiles(n){
    var el = document.getElementById("board");
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            var tileElement = document.createElement("input");
            tileElement.setAttribute("type","number");
            tileElement.setAttribute("min","1");
            tileElement.setAttribute("max",n.toString());
            tileElement.classList.add("tile");
            tileElement.id = "tile" + i.toString() + j.toString();
            // The cool thing about this event is that if I change the
            // value with javascript the function doesn't run
            // This is actually perfect for me! Since I only want it
            // to fire when the user changes the values
            tileElement.setAttribute("oninput","changeTile(this)");
            el.appendChild(tileElement);
        }
    }
};
function changeTile(tileElement){
    var rc = parseTileId(tileElement.id);
    var tileValue = parseInt(tileElement.value);
    if(isNaN(tileValue)) {
        // Reset tile
        globalBoard.setNum(0, rc.row, rc.column);
        return;
    }
    var result = globalBoard.setNum(tileValue, rc.row, rc.column);
    if(!result) console.log("Couldn't assign number");
    globalBoard.drawBoard();
}
function parseTileId(tileId){
    var matches = tileId.match(/\d/g);
    var rc = {row: matches[0],
             column: matches[1]};
    return rc;
}
