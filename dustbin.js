class Dustbin{
    constructor(x, y) {
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x,y,width,height);
    this.dustbinWidth = 200;
    this.dustbinHeight = 150;
    this.angle = 0;
    World.add(world,this.body);
    
  }
  display(){
    var pos = this.body.position
    push() 
    translate(posLeft.x, posLeft.y); 
    rectMode(CENTER) 
    angleMode(RADIANS) 
    fill(255) 
    stroke(255) 
    rotate(this.angle) 
    rect(0,0,this.dustbinWidth, this.dustbinHeight); 
    pop()
  }
};