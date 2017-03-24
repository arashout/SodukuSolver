"use strict";

class Solver {
    constructor(board) {
        this.board = board;
    }

    backtrack(r, c){
        if (this.board.isFull()){
            return true;
        }
        for(var i = 1; i <= this.board.getSize(); i++){
            
        }
    };
}
