def convertTxtGridToJSArr(listLines, index, n):
    index += 1
    jsArray = "[\n"
    for r in range(0, n):
        row = listLines[r + index]
        for c in range(0, n):
            if c == (n - 1):
                jsArray += "{0}],\n".format(row[c])
            elif c == 0:
                jsArray += "[{0},".format(row[c])
            else:
                jsArray += "{0},".format(row[c])
    jsArray += "]\n"
    return jsArray

filename = "sudoku.txt"
jsFilename = "jsSudoku.txt"

with open(filename, "r") as f:
    listLines = f.readlines()

n = 9
jsText = ""
for i in range(0, len(listLines)):
    line = listLines[i]
    # Start of a grid
    if "Grid" in line:
        jsText += line + "\n"
        jsText += convertTxtGridToJSArr(listLines, i, n)
        break

with open(jsFilename, "w") as f:
    f.write(jsText)
