var rockets, count, barrierWidth, barrierHeight;
var lifespan = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rockets = new Population(25);
  count = 0;
  barrierWidth = width * 2/3;
  barrierHeight = 20;
}

function draw() {
  background(0);

  rockets.update(count);
  createBarrier();

  count++;
}

function createBarrier(){
    push();
    translate(width/2, height/2);
    rectMode(CENTER);
    rect(0,0, barrierWidth, barrierHeight);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
