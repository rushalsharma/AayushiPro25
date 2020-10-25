class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(650,690,10,10, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("dustbingreen.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push();
    rotate (angle);
    translate(650,620);
    imageMode(CENTER);
      image(this.image,0,0,150,130)
    pop();
   
  }
};
