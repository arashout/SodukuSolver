"use strict";
window.onload = function () {
    createBoard(9);
};

function createBoard(n) {
    var el = document.getElementById("board");
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            var tileDiv = document.createElement("div");
            tileDiv.classList.add("tile");
            tileDiv.id = "tile" + i.toString() + j.toString();
            tileDiv.innerHTML = i.toString() + j.toString();
            el.appendChild(tileDiv);
        }
    }
};