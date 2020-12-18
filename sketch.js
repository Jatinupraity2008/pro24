const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper,dustbin;
//var r1,r2,r3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	paper = new Paper(150,450,50)
	//r1 = new Dustbin(700,585,120,10);
	//r2 = new Dustbin(645,540,10,100)
	//r3 = new Dustbin(760,540,10,100)
    dustbinobj = new Dustbin(500,200)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  //r1.display();
  //r2.display();
  //r3.display();
  dustbinobj.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-10});
	}
}

