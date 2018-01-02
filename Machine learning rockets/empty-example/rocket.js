class Rocket{
    constructor(){
        this.pos = createVector(width/2, height);
        this.vel = p5.Vector.random2D();
        this.acc = createVector();

        this.moving = true;

        this.genes = new DNA();
    }

    update(count) {
        if(this.isTouchingBarrier() && count < lifespan){
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
        fill(154, 26, 239);

        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading() + PI/2);
        triangle(0, 0, 5, 25, -5, 25);
        pop();
    }

    isTouchingBarrier(){
        if(this.pos.x > width/2 - barrierWidth ||
           this.pos.x < width/2 + barrierHeight ||
           this.pos.y > height/2 - barrierHeight ||
           this.pos.y < height/2 + barrierHeight){
            return true;
        }
    }
}
