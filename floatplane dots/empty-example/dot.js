const speed = 0.5;

class Dot {
	constructor(){
		this.x = random(width);
		this.y = random(height);
		this.xv = random(-speed, speed);
		this.yv = random(-speed, speed);
		fill(DOT_COLOR);
		this.radius = random(5) + 0.1;
		strokeWeight(this.radius);
		point(this.x, this.y);
		console.log("dot created");
	}

	update() {
		this.x += this.xv;
		this.y += this.yv;
		if(this.x < 0 || this.x > width){
			this.xv = -this.xv;
		}
		if(this.y < 0 || this.y > height){
			this.yv = -this.yv;
		}
		strokeWeight(this.radius);
		point(this.x, this.y);
	}
}
