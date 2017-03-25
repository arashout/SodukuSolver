"use strict";

class Solver {
    constructor(board) {
        this.board = board;
    }
    solve(){
        var rcObject = this.board.findFirstEmpty();
        this.backtrack(rcObject);
    }
    backtrack(rc){
        if (this.board.isFull()){
            return true;
        }
        for(var i = 1; i <= this.board.getSize(); i++){
            // Check if possible to place number
            if(this.board.isValidMove(i, rc.row, rc.column)){
                this.board.setNum(i, rc.row, rc.column);
                this.board.drawBoard();
                var newRC = this.board.findFirstEmpty()
                if(this.backtrack(newRC) === true) return true;
            }
        }
        this.board.setNum(0, rc.row, rc.column);
        return false;
    };
}
