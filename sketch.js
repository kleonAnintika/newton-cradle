var bob1,bob2,bob3,bob4,bob5
var rob1,rob2,rob3,rob4,rob5

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
 const Constraint = Matter.Constraint

function preload()
{
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

	bob2= new Bob(300,350,50)
	rob2= new Rob(bob2.body,{x:300 ,y:100})
    bob3= new Bob(400,350,50)
    rob3= new Rob(bob3.body,{x:400,y:100})
    bob4= new Bob(500,350,50)
    rob4= new Rob(bob4.body,{x:500,y:100})
    bob5= new Bob(600,350,50)
    rob5= new Rob(bob5.body,{x:600,y:100})
    bob1= new Bob(200,350,50)
    rob1= new Rob(bob1.body,{x:200 ,y:100})
	Engine.run(engine);
  
}
 function keyPressed(){
   if(keyCode ===UP_ARROW)
  {Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-180})
  }
 }

function draw() {

  rectMode(CENTER);
  background("pink");
  bob1.display()
  rob1.display()
  bob2.display()
  rob2.display()
  bob3.display()
  rob3.display()
  bob4.display()
  rob4.display()
  bob5.display()
  rob5.display()

  drawSprites();
 
}



