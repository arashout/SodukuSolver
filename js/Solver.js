"use strict";

class Solver {
    constructor(board) {
        this.board = board;
    }
    solve() {
        var rcObject = this.board.findFirstEmpty();
        this.backtrack(rcObject);
    }
    /**
     * A recursive Sudoku solving algorithm
     * @param   {object}  rc [row access by rc.row, same for column]
     * @returns {boolean} [[Description]]
     */
    backtrack(rc) {
        this.board.drawBoard();
        if (this.board.isFull()) {
            return true;
        }
        for (var i = 1; i <= this.board.getSize(); i++) {
            // Check if possible to place number
            if (this.board.isValidMove(i, rc.row, rc.column)) {
                this.board.setNum(i, rc.row, rc.column);
                var newRC = this.board.findFirstEmpty()
                if (this.backtrack(newRC) === true) return true;
            }
        }
        this.board.setNum(0, rc.row, rc.column);
        return false;
    };
    /**
     * Method that brute force checks every tile
     * to ensure Sudoku is valid
     * @returns {boolean} True for valid Sudoku
     */
    isValidSudoku() {
        for (var r = 0; r < this.board.getSize(); r++) {
            for (var c = 0; c < this.board.getSize(); c++) {
                var num = this.board.getNum(r, c);
                this.board.setNum(0, r, c);
                if(this.board.isValidMove(num, r, c) === false) return false;
                this.board.setNum(num, r, c);
            }
        }
        return true;
    }
}
