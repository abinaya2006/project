
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
 
var tree1;
 var ground1;
var stone1;
var boy,bo;
var man6,man7,man8;
var cons1;
var man1,man2,man3,man4,man5;
var gameState = "onSling";
launchingForce=1000;
function preload(){
boy=loadImage("boy.png")
}
function setup() {
	createCanvas(1366, 620);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
       tree1=new Tree(800,-10,600,600)
	   ground1=new Ground(900,610,25000,90);
	 

	   bo=createSprite(300,510,70,70);
		bo.addImage(boy);
		bo.scale=0.13

		stone1=new Stone(230,450,50); 
		cons1=new ConsT(stone1.body, {x:230,y:446});
	
		man1=new Mango(1100,50,53)
		man2=new Mango(900,170,53)
		man3=new Mango(1000,200,53)
		man4=new Mango(1150,150,53)
		man5=new Mango(1050,50,63)
		man6=new Mango(1050,200,45)
		man7=new Mango(1300,250,50);
		 man8=new Mango(1200,200,80)
	Engine.run(engine);
  
}


function draw() {  
	background("white");
	fill("#CCB146")
	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	Engine.update(engine);
	

 

  stone1.display();
  tree1.display();
  cons1.display();
 ground1.display();
  man1.display();
  man2.display();
  man3.display();
  man4.display();
  man5.display();
  man6.display();
  man7.display();
  man8.display();
 detectollision(stone1,man1)
  detectollision(stone1,man2)
  detectollision(stone1,man3)
  detectollision(stone1,man4)
  detectollision(stone1,man5)
  detectollision(stone1,man6)
  detectollision(stone1,man7)
    detectollision(stone1,man8)
drawSprites();

 
}
function mouseDragged(){
	
  //  if (gameState!=="launched"){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  //  }
}

function mouseReleased(){
	
	cons1.fly();
	//gameState = "launched";
//	Matter.Body.applyForce(stone1.body,stone1.body.position,{x:280,y:-130});
	
	
}
 
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
    if(keyCode === 32){
	
	Matter.Body.setPosition(stone1.body,{x:230,y:446});
	cons1.attach(stone1.body);
 
	 
   }
}

