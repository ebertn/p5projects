class Population {
    constructor(num){
        this.rockets = [];
        this.num = num;
        this.generation = 0;
        this.time = 0;

        for(var i = 0; i < num; i++){
            this.rockets[i] = new Rocket();
        }
    }

    update(){
        for(var i = 0; i < this.num; i++){
            this.rockets[i].update(this.time);
            this.rockets[i].draw();
            //console.log(this.rockets[i].getScore());
        }
    }

    run(){
        if(this.time < lifespan){
            this.update(this.time);
            this.time++;
        } else {
            this.createNextGen();
        }
    }

    createNextGen(){
        this.getAllScores();
        quickSort(this.rockets, 0, this.num-1);

        var oldRockets = this.rockets;

        for(var i = this.num * keptPopPercent; i < this.num; i++){
            // Change DNA
        }
        this.generation++;
    }

    getAllScores(){
        for(var i = 0; i < this.num; i++){
            this.rockets[i].getScore();
        }
    }
}
