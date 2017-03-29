"use strict";

class Board {
    constructor(arrTwoD) {
        this.arrTwoD = arrTwoD;
        this.n = arrTwoD.length;
        this.s = Math.sqrt(this.n); //Square side length

        //Use associative array for squares within board
        this.squares = new Array();
        this.initSquareDict();
    }

    findFirstEmpty() {
        for (var r = 0; r < this.n; r++) {
            for (var c = 0; c < this.n; c++) {
                if (this.arrTwoD[r][c] === 0) return {
                    row: r,
                    column: c
                }
            }
        }
        return null;
    }

    isFull() {
        return null === this.findFirstEmpty();
    }
    /**
     * Combines row, column and square checking conditions
     * into one, easy to call method.
     * @param   {number} num [Number to check for]
     * @param   {number} r   [Row index]
     * @param   {number} c   [Column index]
     * @returns {boolean} [True means okay to insert num]
     */
    isValidMove(num, r, c){
        // Just variables for boolean conditions
        var a, b, c;
        a = !this.isInSquare(num, r, c);
        b = !this.isNumInRow(num, r);
        c = !this.isNumInColumn(num, c);
        return a && b && c;
    }
    getSize() {
        return this.n;
    }
    getNum(r, c) {
        return this.arrTwoD[r][c];
    }
    /**
     * Sets the number in the board, if the move is valid
     * but reuturns false when the move is not possible
     * @param   {int} num [The number to enter]
     * @param   {int} r   [The row]
     * @param   {int} c   [The column]
     * @returns {boolean}  [The status code]
     */
    setNum(num, r, c) {
        if(this.isValidMove(num, r, c)){
            this.arrTwoD[r][c] = num;
            return true;
        }
        else return false;
    }
    resetBoard(){
        for(var i = 0; i < this.n; i++){
            for(var j = 0; j < this.n; j++){
                this.arrTwoD[i][j] = 0;
            }
        }
    }
    // USER GUI & INPUT
    /**
     * "Draws" the current board onto the HTML page
     */
    drawBoard(){
        for (var r = 0; r < this.n; r++) {
            for (var c = 0; c < this.n; c++) {
                var tile = document.getElementById("tile" + r.toString() + c.toString());
                var val = this.arrTwoD[r][c];
                if(val > 0){
                    tile.value = this.arrTwoD[r][c];
                }
                else if(val > 0) tile.value = val;
                else{
                    tile.value = "";
                }
            }
        }
    }
    //HELPER FUNCTIONS
    /**
     * Splits up the Sudoku grid into squares
     * Which are stored in a dictionary with keys as
     * shown in getSquareIndex
     */
    initSquareDict() {
        for (var r = 0; r < this.n; r++) {
            for (var c = 0; c < this.n; c++) {
                var i = this.getSquareIndex(r, c);
                if (this.squares[i] === undefined) {
                    this.squares[i] = new Array();
                    this.squares[i].push({
                        row: r,
                        column: c
                    });
                } 
                else {
                    this.squares[i].push({
                        row: r,
                        column: c
                    });
                }
            }
        }
    }
    /**
     * Given a row and column, determines what key
     * to use to access the squares dictionary
     * @param   {number} r [row index]
     * @param   {number} c [column index]
     * @returns {string} i1 + i2 [key used for accessing squares dictionary]
     */
    getSquareIndex(r, c) {
        // Index for squares will be strings "XX"
        var i1 = Math.floor(r / this.s).toString();
        var i2 = Math.floor(c / this.s).toString();
        return i1 + i2; //Key!
    }
    isInSquare(num, r, c) {
        // Get index of square from square dictionary
        var i = this.getSquareIndex(r, c);
        var square = this.squares[i];
        // Iterate through list of row, column tuples in square
        // To check if number is in square
        var r, c;
        for (var j = 0; j < this.n; j++) {
            r = square[j].row;
            c = square[j].column;
            var curNum = this.getNum(r, c);
            if (num === curNum) return true;
        }
        return false;
    }

    isNumInRow(num, r) {
        for (var c = 0; c < this.n; c++) {
            if (this.arrTwoD[r][c] === num) return true;
        }
        return false;
    }

    isNumInColumn(num, c) {
        for (var r = 0; r < this.n; r++) {
            if (this.arrTwoD[r][c] === num) return true;
        }
        return false;
    }
}
