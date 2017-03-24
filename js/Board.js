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

    isFull(){
        return null === this.findFirstEmpty();        
    }

    isInSquare(num, r, c) {
        var i = this.getSquareIndex(r, c);
        for (var j = 0; j < this.n; j++) {
            var curNum = this.getNumFromObject(this.squares[i][j]);
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
    
    getNum(r, c){
        return this.arrTwoD[r][c];
    }
    
    setNum(num, r, c){
        this.arrTwoD[r][c] = num;
    }
    
    //HELPER FUNCTIONS
    initSquareDict() {
        for (var r = 0; r < this.n; r++) {
            for (var c = 0; c < this.n; c++) {
                var i = this.getSquareIndex(r, c);
                if (this.squares[i] === undefined) {
                    this.squares[i] = new Array();
                    this.squares[i].push({
                        row: r,
                        column: c
                    })
                } else {
                    this.squares[i].push({
                        row: r,
                        column: c
                    })
                }
            }
        }

    }
    getSquareIndex(r, c) {
        // Index for squares will be strings "XX"
        var i1 = Math.floor(r / this.s).toString();
        var i2 = Math.floor(c / this.s).toString();
        return i1 + i2;
    }
    getNumFromObject(rcO) {
        return this.arrTwoD[rcO.row][rcO.column];
    }
}
