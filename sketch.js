
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy1;
var mango1,mango2,mango3,mango4,mango5
var tree1;
var stone1;
var constrain1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var mango1 = new Mango(650,50);
	var mango1 = new Mango(660,60);
	var mango1 = new Mango(670,70);
	var mango1 = new Mango(680,65);
	var mango1 = new Mango(670,55);

	var boy1 = new Boy(100,650);

	var tree1 = new Tree(620,350,50,605);

	var stone1 = new Stone(105,350);

	constrain1 = new Constrain (stone1.body,{x:235,y:420}) ;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy1.display();
  tree1.display();
  stone1.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);

  drawSprites();
 
}

function keyPressed () {

	if(keyCode === 32){
		Matter.body.setPosition(stone1.body,{x:235,y:420}
		boy1.attach(stone1.body)


	}

}

function detectollision (lstone,lmango) {
	
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}

}
