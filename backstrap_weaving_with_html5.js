'use strict'; // Barják László, 2017.06.07.

var canvas = document.getElementById("backstrap")
var weaving = canvas.getContext('2d')

const patterns = {
"hullamos": {"upper": "vvvvvsvvvv", "lower": "vvvvsvvvvv"},
"lancos": {"upper": "vvvvsvsvvvv", "lower": "vvvvssvvvv"},
"csikos": {"upper": "vvssssssssssvv", "lower": "vvsssssssssvv"},
"keresztcsikos": {"upper": "vvvvvvvvvvvvvvvvv", "lower": "ssssssssssssssss"},
"kigyohatas": {"upper": "ssssvvvvvvvsssvsssvvvvvvvssss", "lower": "ssssvvvssssssvvssssssvvvssss"},
"keresztes": {"upper": "vvvsssvvsssvvsssvvv", "lower": "sssvvsssvvsssvvsss"},
"colors": {"v": "white", "s": "red"},
"healds": {"0": "upper", "1": "lower"}
}
var nameOfPattern = "keresztes"
const hex = [[0, 7],[7, 0],[14, 7],[14, 39],[7, 46],[0, 39]]
var row = 0, pos = 0, lengthOfPattern, timer
var pattNow = patterns[nameOfPattern]
var corr = pattNow.upper.length === pattNow.lower.length ? 4 : 0

const hexagon = (x, y, color) => {
    weaving.beginPath()
    weaving.moveTo(x + hex[0][0], y + hex[0][1])
    for (let i = 1; i < hex.length; i++)
        weaving.lineTo(x + hex[i][0], y + hex[i][1])
    weaving.fillStyle = color; weaving.fill()
}

const draw = () => {
    var dir = row%2 ? -1 : 1 
    var x, y = 4 + row * 41, color
    var pattern = pattNow[patterns.healds[row%2]]
    x = 299 - pattern.length * 8
    x = x + pos * 16 + dir * corr * -1
    color = patterns.colors[pattern[pos]]
    hexagon(x, y, color)
    pos = pos + dir
    if (pos === pattern.length || pos === -1)
        pos = (++row%2) * (patterns[nameOfPattern][patterns.healds[row%2]].length - 1)
    timer = setTimeout(() => draw(), 50)
    if (row === 7) {
        clearTimeout(timer)
        row = 0; pos = 0
    }
};

draw();

canvas.addEventListener('click', () => {
    if (!row && !pos) {
        weaving.clearRect(0, 0, canvas.width, canvas.height)
        draw()
    }
})
