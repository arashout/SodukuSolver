"use strict";

class Solver {
    constructor(board) {
        this.board = board;
    }
    /**
     * Starts off the backtracking solving algorithm
     * @returns {boolean} [If there is a solution returns true]
     */
    solve() {
        var rcObject = this.board.findFirstEmpty();
        if (this.backtrack(rcObject)) return true;
        else return false;
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
            if (this.board.setNum(i, rc.row, rc.column)) {
                var newRC = this.board.findFirstEmpty();
                if (this.backtrack(newRC) === true) return true;
            }
        }
        this.board.setNum(0, rc.row, rc.column)
        return false;
    };
}
