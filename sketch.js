
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1;
var rope1;
var box1, box2, box, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var ground;
var world;


function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	ground=new roof(400,400,500,20);
	bob1 = new bob(320,575,40);
	
	
	
	rope1=new rope(bob1.body,{x:200,y:50});

	box1=new Block(320,350,50,50);
    box2=new Block(320,300,50,50);
    box3=new Block(320,250,50,50);
    box4=new Block(320,200,50,50);
    box5=new Block(320,150,50,50);
    box6=new Block(380,350,50,50);
    box7=new Block(380,300,50,50);
    box8=new Block(380,250,50,50);
    box9=new Block(380,200,50,50);
    box10=new Block(380,150,50,50);
    box11=new Block(440,350,50,50);
    box12=new Block(440,300,50,50);
    box13=new Block(440,250,50,50);
    box14=new Block(440,200,50,50);
    box15=new Block(440,150,50,50);
 
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ground.display();

  rope1.display();


  bob1.display();

  box1.display();
  box2.display();
  box3.display(); 
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}






