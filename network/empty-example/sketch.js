var nodes = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    for(var i = 0; i < 20; i++){
        nodes[i] = new Node(random(width), random(height), 8, 20);
    }
}

function draw() {
    background(255);
    nodes.forEach(function(node){
        node.draw();
    });
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
