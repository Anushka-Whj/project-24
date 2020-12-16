
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject, ground,dustbin;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
  
	  ground=new Ground(500,690,1000,20);
	  paperObject=new Paper(20,580,20,20);
	  dustbin=new Dustbin(880, 690, 200, 20 )
	  dustbin2=new Dustbin(980, 630, 20, 100 )
	  dustbin3=new Dustbin(780, 630, 20, 100 )

}


function draw() {
	background("skyBlue");  
	rectMode(CENTER);
  
	Engine.update(engine)
  
	
ground.display();
paperObject.display();
dustbin.display();
dustbin2.display();
dustbin3.display();
}

function keyPressed(){
 if (keyCode===UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
 }

}

