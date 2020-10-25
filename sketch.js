
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var b1,b2,b3
var ball


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	rec1=new Box();
	ball=new Papper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
	rec1.display();
	ball.display()
	ground.display();
	
 
  drawSprites();
 
}


function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:370,y:-110})
	}
} 










