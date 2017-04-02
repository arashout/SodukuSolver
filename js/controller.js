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
    var isActualNum = false;

    if (isNaN(tileValue)) {
        // Reset tile if tileValue is "" or invalid
        globalBoard.setNum(0, rc.row, rc.column);
    }
    else if(!isValidTileNum(tileValue)){
        tileElement.value = "";
        setMessageText("Numbers must be between 1 - n");
    }
    else{
        var result = globalBoard.setNum(tileValue, rc.row, rc.column);
        if (!result) {
            setMessageText("Number is already in the same row, column or square");
        }
        else{
            tileElement.classList.add("userNum");
            isActualNum = true;
            setMessageText("");
        }
    }

    if(!isActualNum) tileElement.classList.remove("userNum");
    globalBoard.drawBoard();
}
/**
 * Quick function to validate inputs
 * @param   {Intger} num [[Description]]
 * @returns {boolean}  [Whether number is valid or not]
 */
function isValidTileNum(num){
    if(num > n || num < 0){
        return false;
    }
    return true;
}
/**
 * Simple setter function to set the text shown to the user
 * @param {[String]} stringMessage [The string to outputted]
 */
function setMessageText(stringMessage){
    var messageEl = document.getElementById("messageBar");
    messageEl.textContent = stringMessage;
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
/**
 * Clears the current board DIV
 * Loops through every tile in the board
 * and sets up the ids, classes and events
 * of each tile
 * @param {[Integer]} n [Dimension of board]
 */
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
            tileElement.classList.add("tile");
            // Additional class that varies width/height of tiles
            // based on "n", where n is dimension of board (nxn)
            tileElement.classList.add("dimension" + n);
            tileElement.id = getTileId(i,j);
            // The cool thing about this event is that if I change the
            // value with javascript the function doesn't run
            // This is actually perfect for me! Since I only want it
            // to fire when the user changes the values
            tileElement.setAttribute("oninput", "changeTile(this)");
            el.appendChild(tileElement);
        }
    }
};
