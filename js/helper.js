/**
 * Given a tile element id returns
 * an object containing the row and column
 * @param   {string}   tileId [Id of element]
 * @returns {object} [row column object]
 */
function parseTileId(tileId) {
    var matches = tileId.match(/\d+/g);
    var rc = {
        row: matches[0],
        column: matches[1]
    };
    return rc;
}
/**
 * Given a row and column returns a tile element id
 * @param   {[[Type]]} row    [[Description]]
 * @param   {[[Type]]} column [[Description]]
 * @returns {string}   [Tile element id]
 */
function getTileId(row, column){
    return "tile" + row.toString() + "-" + column.toString();
}
/**
 * Given an integer create a nxn matrix
 * filled with zeros.
 * Arrays within array
 * @param   {Integer} n
 * @returns {2D array} the created matrix
 */
function createZeroMatrix(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        // Initialize rows of 2D array here
        arr[i] = [];
        for (var j = 0; j < n; j++) {
            // Initialize columns in each row
            arr[i].push([]);
            arr[i][j] = 0;
        }
    }
    return arr;
};
