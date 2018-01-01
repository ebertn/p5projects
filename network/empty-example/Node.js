class Node{
    constructor(x,y, sides, rad){
        this.x = x;
        this.y = y;
        this.sides = sides;
        this.connections = [];
        this.connections.length = sides;
        this.rad = rad; // Size of shape
    }

    connect() {

    }

    getConnections(nodes){
        nodes.forEach(function(node){

        });
    }

    draw () {
        fill("#21b4a5");
        if(this.connections.length > 2){
            beginShape();
            angleMode(DEGREES);
            var angle = 360 / this.connections.length;
            for(var i = 0; i < this.connections.length; i++){
                vertex(this.rad * cos(angle * i - 90) + this.x, this.rad * sin(angle * i - 90) + this.y);
            }
            endShape(CLOSE);
        } else {
            ellipse(this.x, this.y, this.rad * 2);
        }
    }
}
