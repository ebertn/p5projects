var n;
var dots = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  n = 0;
  colorMode(HSB);
  background(75);
}

function draw() {
    background(75);
    //translate(width/2, height/2);
    var c = 30;
    var x, y, phi, r;
    phi = n * 137.5;
    r = c * sqrt(n);
    x = r * cos(phi);
    y = r * sin(phi);

    var col = color(phi % 256, 255, 255);
    dots.push(new Dot(x+width/2, y+height/2, col));
    dots.forEach(function(dot){
        dot.update();
        dot.draw();
        dot.behaviors();
    });
    n += 0.1;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(75);
}
