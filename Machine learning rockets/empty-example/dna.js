class DNA {
    constructor(behavior){
        this.behavior = [];
        if(behavior){
            this.behavior = behavior;
        } else {
            for(var i = 0; i < lifespan; i++) {
                this.behavior[i] = p5.Vector.random2D();
            }
        }
    }
}
