
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,paper;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	  ground = new Ground (800,650,1600,20);
	  paper  = new Paper (250,450,40);
      dustbin=new Dustbin(1200,650);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display();
 paper.display();
 dustbin.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}

