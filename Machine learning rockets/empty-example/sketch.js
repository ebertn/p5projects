var population, time, barrierWidth, barrierHeight, targetLocation, targetRadius, keptPopPercent;
var lifespan = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  population = new Population(100);
  time = 0;
  barrierWidth = width * 1/2;
  barrierHeight = 20;
  targetLocation = createVector(width/2, height * 1/6);
  targetRadius = 40;
  keptPopPercent = 0.5
}

function draw() {
  background(0);

  population.run();
  drawBarrier();
  drawTarget();

  time++;
}

function drawBarrier(){
    push();
    translate(width/2, height/2);
    rectMode(CENTER);
    rect(0,0, barrierWidth, barrierHeight);
    pop();
}

function drawTarget(){
    push();
    fill(244, 78, 66);
    ellipse(targetLocation.x, targetLocation.y, targetRadius*2);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
