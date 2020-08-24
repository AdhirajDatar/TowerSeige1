class BOX {
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 30,50);
        this.width = 20+10;
        this.height = 10+40; 
        World.add(world,this.body);   
    }
    display (){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}