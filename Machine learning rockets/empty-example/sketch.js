var rockets, count;
var lifespan = 500;

function setup() {
  createCanvas(400, 400);
  rockets = new Population(25);
  count = 0;
}

function draw() {
  background(0);

  rockets.update(count);

  count++;
}
