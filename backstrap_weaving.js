//with p5.js! Insert to: https://p5js.org/
var a = 0;
var b = 0;
var c = 0;
var pattern = new Array('ssssvvvvvvvsssvsssvvvvvvvssss','ssssvvvssssssvvssssssvvvssss'); //patterns
var ey = 0; //to down
var h = 0; //length of the pattern's first row
var x = 0; //x position of hexagon
var y = 0; //y position of hexagon
var red = 0;
var green = 0;
var blue = 0;
var cycle = 0;
var canvas;
		
function hexagon(x, y, r, g, b) {
    beginShape();
    fill(r, g, b);
    noStroke();
    vertex(x, y + 7);
    vertex(x + 7, y);
    vertex(x + 14, y + 7);
    vertex(x + 14, y + 39);
    vertex(x + 7, y + 46);
    vertex(x, y + 39);
    endShape(CLOSE);
}
		
function setup() {
    canvas = createCanvas(600, 300);
    //canvas.parent('myContainer');
    background(255);
    fill(128);
    rect(0, 0, 600, 300);
}
	
function draw() {
	
    var h0 = pattern[0].length;
    var h = pattern[c].length;
    var t = (pattern[c].charAt(c * (h - 1 - 2 * a) + a));
    if (t === 's') {
        red = 255;
        green = 0;
        blue = 0;
    } else {
        red = 255;
        green = 255;
        blue = 255;
    }
    hexagon(1 + width / 2 - h0 * 8 + (c * (h - 1 - 2 * a) + a) * 16 + c * 8, 4 + b * 41 + ey, red, green, blue);
    a = a + 1;
  
    if ((a === h) && (c === 0)) {
        c = 1;
        a = 0;
        b = b + 1;
    }
    if ((a === h) && (c === 1)) {
        c = 0;
        a = 0;
        b = b + 1;
    }
    if ((b + 1) * 41 >= height - ey) {
        b = 0;
        c = 0;
			
	    cycle = cycle + 1;
        if (cycle < 2) {
	        fill(128);
            rect(0, 0, 600, 300);
        }
    }
    //if ((mouseIsPressed || touchIsDown) && mouseX < 600 && mouseY < 300 && mouseY) {
    if ((mouseIsPressed) && mouseX < 600 && mouseY < 300 && mouseY) {
        fill(128);
        rect(0, 0, 600, 300);
        a = 0;
        b = 0;
        c = 0;
    }
}
