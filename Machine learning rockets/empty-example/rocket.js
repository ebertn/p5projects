class Rocket{
    constructor(behavior){
        this.pos = createVector(width/2, height * .95);
        this.vel = createVector();
        this.acc = createVector();

        this.moving = true;
        this.angle = 0;
        this.score = 0;
        this.cumScore = 0;

        this.genes = new DNA(behavior);
    }

    update(time) {
        if(this.shouldMove() && time < lifespan){
            this.cumScore += this.getScore();

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
        if(this.shouldMove()){
            this.angle = this.vel.heading() + PI/2;
        }
        rotate(this.angle);

        triangle(0, 0, 5, 25, -5, 25);
        pop();
    }

    isTouchingBarrier(){
        return (this.pos.x > width/2 - barrierWidth/2 && // Touching barrier
           this.pos.x < width/2 + barrierWidth/2) &&
           (this.pos.y > height/2 - barrierHeight/2 &&
           this.pos.y < height/2 + barrierHeight/2);
    }

    isTouchingWall(){
        return this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height;
    }

    isTouchingTarget(){
        return dist(this.pos.x, this.pos.y, targetLocation.x, targetLocation.y) < targetRadius;
    }

    shouldMove(){
        return !this.isTouchingBarrier() && !this.isTouchingTarget() && !this.isTouchingWall();
    }

    getScore(){
        this.score = 1000 / dist(this.pos.x, this.pos.y, targetLocation.x, targetLocation.y);
        if(this.isTouchingBarrier()){
            this.score /= 20;
        }
        if(this.isTouchingWall()){
            this.score /= 5;
        }
        if(this.isTouchingTarget()){
            this.score *= 2
        }
        return this.score;
    }
}
