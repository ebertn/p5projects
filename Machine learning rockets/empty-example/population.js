class Population {
    constructor(num){
        this.rockets = [];
        this.num = num;

        for(var i = 0; i < num; i++){
            this.rockets[i] = new Rocket();
        }
    }

    update(count){
        for(var i = 0; i < this.num; i++){
            this.rockets[i].update(count);
            this.rockets[i].draw();
        }
    }
}
