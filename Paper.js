class Paper{
    constructor(){
        var options =  {
        isStatic: false,
        restitution: 0.3,
        friction: 0,
        density: 1.2
        };
        this.image=loadImage("paper.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = this.height;
        World.add(world , this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        transalate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.paperWidth, this.paperHeight)  
        ellipse(0,0,this.width,this.height);
        pop();
    }
}