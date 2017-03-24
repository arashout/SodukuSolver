def convertTxtGridToJSArr(listLines, index, n):
    index += 1
    jsArray = ""
    for i in range(0,n):
        row = listLines[i+index]
        for c in row:
            pass


filename = "sudoku.txt"

with open(filename, "r") as f:
    listLines = f.readlines()

n = 9
for i in range(0, len(listLines)):
    line = listLines[i]
    # Start of a grid
    if "Grid" in line:
        convertTxtGridToJSArr(listLines, i, n)
        break