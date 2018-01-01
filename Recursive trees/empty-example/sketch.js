var twig_mult, rotation, slider;

function setup() {
  createCanvas(400, 400);
  background(100);
  twig_mult = 0.66;
  rotation = PI / 3.6544;
  count = 0;
  slider = document.getElementById("myRange");
}

function draw() {
    background(100);
    twig_mult = 0.66;
    rotation = 20 * PI / log(slider.value);
    translate(width/2, height);
    stroke(255);
    strokeWeight(1.5);
    drawTree(height / 4, 0);
    console.log(slider.value);
}

function drawTree(size, count){
    if(count < 9){
        push();
        translate(0, -size);
        line(0, 0, 0, size);
        rotate(rotation);
        drawTree(size * twig_mult, count+1);
        pop();

        push();
        translate(0, -size);
        line(0, 0, 0, size);
        rotate(-rotation);
        drawTree(size * twig_mult, count+1);
        pop();
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    background(100);
}
