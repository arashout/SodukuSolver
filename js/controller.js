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
            tileElement.setAttribute("oninput","globalBoard.changeTile(this)");
            el.appendChild(tileElement);
        }
    }
};
function changeTile(tileElement){
    if(tileElement.value > 0){
        console.log(b.isValidMove(tileElement.value),0,0);
        tileElement.classList.add("fixedNum");
    }
    else tileElement.classList.remove("fixedNum");
}
