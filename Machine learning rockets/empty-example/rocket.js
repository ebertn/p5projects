class Rocket{
    constructor(){
        this.pos = createVector(width/2, height);
        this.vel = p5.Vector.random2D();
        this.acc = createVector();

        this.genes = new DNA();
    }

    update(count){
        if(count < lifespan){
            this.applyForce(this.genes.behavior[count]);

            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        } else {
            this.vel.mult(0);
        }
    }

    applyForce(force){
        this.acc.add(force);
    }

    draw(){
        push();
        stroke(255, 160); // White with some alpha

        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading() + PI/2);
        triangle(0, 0, 2, 10, -2, 10);
        pop();
    }
}
