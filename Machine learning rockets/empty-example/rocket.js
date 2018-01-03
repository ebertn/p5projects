class Rocket{
    constructor(){
        this.pos = createVector(width/2, height * .95);
        this.vel = p5.Vector.random2D();
        this.acc = createVector();

        this.moving = true;
        this.angle = 0;

        this.genes = new DNA();
    }

    update(time) {
        if(!this.isTouchingBarrier() && !this.isTouchingTarget() && time < lifespan){
            this.applyForce(this.genes.behavior[time]);

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
        //stroke(255, 160); // White with some alpha
        fill(154, 26, 239, 160);

        translate(this.pos.x, this.pos.y);
        if(!this.isTouchingBarrier() && !this.isTouchingTarget()){
            this.angle = this.vel.heading() + PI/2;
        }
        rotate(this.angle);

        triangle(0, 0, 5, 25, -5, 25);
        pop();
    }

    isTouchingBarrier(){
        if((this.pos.x > width/2 - barrierWidth/2 && // Touching barrier
           this.pos.x < width/2 + barrierWidth/2) &&
           (this.pos.y > height/2 - barrierHeight/2 &&
           this.pos.y < height/2 + barrierHeight/2)){
            return true;
        }
        if(this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height){
            return true;
        }
        return false;
    }

    isTouchingTarget(){
        return dist(this.pos.x, this.pos.y, targetLocation.x, targetLocation.y) < targetRadius;
    }

    getScore(){
        this.score = 1000 / dist(this.pos.x, this.pos.y, targetLocation.x, targetLocation.y);
        if(this.isTouchingBarrier()){
            this.score /= 5;
        }
        if(this.isTouchingTarget()){
            this.score *= 2
        }
        return this.score;
    }
}
