class Box{
    constructor(x,y,width,height){
        var options = {
            density:1.2,
            friction:0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visibility = 255;

        World.add(world,this.body);
    }

    display(){
        strokeWeight(3);
        stroke("red");
        fill(random(0,255),random(0,255),random(0,255));
        console.log(this.body.speed);
        if(this.body.speed < 10){
            var pos = this.body.position;
            rect(pos.x,pos.y,this.width,this.height);
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility -= 1;
            tint(255,this.visibility);
            rect(rect,this.body.position.x,this.body.position.y,this.width,this.height)
            pop();
        }
    }
}
