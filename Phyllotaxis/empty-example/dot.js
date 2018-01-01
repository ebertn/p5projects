var ACCEL = 10;

class Dot {
    constructor(x, y, col){
        this.pos = createVector(x, y);
        this.orig_pos = createVector(x, y);
        this.a = createVector(0,0);
        this.v = createVector(0,0);
        this.col = col;

        this.maxspeed = 20;
        this.maxforce = 1;
        this.fleeDist = 200;
    }

    update() {
        this.pos.add(this.v);
        this.v.add(this.a);
        this.a.mult(0);
    }

    draw(){
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, 10);
    }

    behaviors () {
        var arrive = this.arrive(this.orig_pos);
        this.applyForce(arrive);

        var mouse = createVector(mouseX, mouseY);
        var flee = this.flee(mouse);
        this.applyForce(flee);
    }

    applyForce (f) {
        this.a.add(f);
    }

    arrive(target) {
        var desired = p5.Vector.sub(target, this.pos);
        var d = desired.mag();
        var speed = this.maxspeed;
        if(d < 100){
            speed = map(d, 0, 100, 0, this.maxspeed);
        }
        desired.setMag(speed);
        var steer = p5.Vector.sub(desired, this.v);
        steer.limit(this.maxforce);
        return steer
    }

    flee(target) {
        var desired = p5.Vector.sub(target, this.pos);
        var d  = desired.mag();
        if(d < this.fleeDist){
            desired.setMag(this.maxspeed);
            desired.mult(-1);
            var steer = p5.Vector.sub(desired, this.v);
            steer.limit(this.maxforce);
            return steer
        }
        return createVector(0,0);
    }
}
