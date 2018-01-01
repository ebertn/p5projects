var dots, DOT_COLOR, LINE_DIST, NUM_DOTS, MOUSE_DIST;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //background(100);
    dots = [];
    DOT_COLOR = color(78, 185, 244); // Blue
    //color(175, 37, 15); //Red

    //color(188, 132, 71); Orange
    //color(78, 185, 244); Blue
    LINE_DIST = 150;
    NUM_DOTS = 100;
    MOUSE_DIST = windowWidth * 3/14;
    createDots();
}

function draw() {
    background(4, 44, 109);

    // noFill();
    // ellipse(mouseX, mouseY, MOUSE_DIST*2);

    dots.forEach(function(dot){
        dot.update();
        connectLines(dot);
    });
}

function createDots(){
    for(var i = 0; i < NUM_DOTS; i++){
        dots[dots.length] = new Dot;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function connectLines(dot){
    dots.forEach(function(other){
        if(other != dot && dist(dot.x, dot.y, other.x, other.y) < LINE_DIST && dist(dot.x, dot.y, mouseX, mouseY) < MOUSE_DIST){
            stroke(DOT_COLOR);
            strokeWeight(0.3);
            line(dot.x, dot.y, other.x, other.y);
        }
    })
}
