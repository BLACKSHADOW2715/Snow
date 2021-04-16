class Snow{
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':10000000000000000,
            'density': 0.00000000004,
          'mass':0.1,
          'frictionAir':0.09
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image=loadImage("snow5.webp");
        this.body=Bodies.rectangle(x,y,width,height,options)
   


      World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
      rectMode(CENTER);
     imageMode(CENTER);
        image(this.image,this.x,this.y,this.width, this.height);
        pop();
    }
}