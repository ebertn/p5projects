class Population {
    constructor(num){
        this.rockets = [];
        this.num = num;
        this.generation = 0;
        this.time = 0;
        this.scores = [];
        this.averageScore = 0;

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
            this.resetRockets();
            this.calcData()
        }
        this.drawData();
    }

    createNextGen(){
        this.getAllScores();
        quickSort(this.rockets, 0, this.num-1);

        var oldRockets = this.rockets;
        var newRocketsCount = this.num * (1 - keptPopPercent);
        var father, mother;

        for(var i = 0; i < newRocketsCount; i++){
            // Change DNA
            father = oldRockets[int(random(newRocketsCount + 1))];
            mother = oldRockets[int(random(newRocketsCount + 1))];

            this.rockets[i] = this.mate(father, mother);
        }
        this.generation++;
        this.time = 0;
    }

    getAllScores(){
        for(var i = 0; i < this.num; i++){
            this.scores[i] = this.rockets[i].cumScore;
        }
    }

    mate(a, b){
        //console.log(a);
        var newRocket = new Rocket(a.behavior);
        for(var i = 0; i < lifespan; i++) {
            if(random(2) > 1){
                newRocket.genes.behavior[i] = b.genes.behavior[i];
            }
        }
        return newRocket;
    }

    resetRockets(){
        for(var i = 0; i < this.num; i++){
            console.log(this.rockets[i]);
            this.rockets[i].moving = true;
            this.rockets[i].pos = createVector(width/2, height * .95);
        }
    }

    calcData(){
        for(var i = 0; i < this.num; i++){
            this.averageScore += this.scores[i];
        }
        this.averageScore /= this.num;
        console.log(this.averageScore);
    }

    drawData(){
        textSize(32);
        fill(150);
        text("Generation: " + this.generation, 20, height - 20);

        text("Average score: " + this.averageScore, 20, height - 20 - 32);
    }
}
