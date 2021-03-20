const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var boggy1,boggy2,boggy3,boggy4,boggy5,boggy6,chain1,chain2,chain3,chain4,chain5,ground,rock;
var flag;
function preload() {
   backgroundImg=loadImage("images/bg.jpg")
   trumpSound=loadSound("sound/train_crossing.mp3")
   dudeSound=loadSound("sound/train.mp3")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);
   
    
   
    boggy1 = new Boggy(50,170,50,50)
    boggy2 = new Boggy(150,170,50,50)
    boggy3 = new Boggy(250,170,50,50)
    boggy4 = new Boggy(350,170,50,50)
    boggy5 = new Boggy(450,170,50,50)
    boggy6 = new Boggy(550,170,50,50)
    chain1 = new Chain(boggy1.body,boggy2.body);
    chain2 = new Chain(boggy2.body,boggy3.body);
    chain3 = new Chain(boggy3.body,boggy4.body);
    chain4 = new Chain(boggy4.body,boggy5.body);
    chain5 = new Chain(boggy5.body,boggy6.body);
    rock = new Rock(1100,200,100,100)
}

function draw(){
    
        background(backgroundImg);
    

     
    Engine.update(engine);
   boggy1.show();
   boggy2.show();
   boggy3.show();
   boggy4.show();
   boggy5.show();
   boggy6.show();
   chain1.show();
   chain2.show();
   chain3.show();
   chain4.show();
   chain5.show();
   rock.show();
   var collision=Matter.SAT.collides(boggy6.body,rock.body)
   var flag
   if(collision.collided){
       flag=1
   }
   if(flag===1){
textSize(50)
stroke(3)
fill("GREY")
text("CRASH",500,200)
trumpSound.play();

   }
}


function keyPressed(){
    if(keyCode===RIGHT_ARROW){
        Matter.Body.applyForce(boggy6.body,{x:boggy6.body.position.x,y:boggy6.body.position.y},{x:0.5,y:0})
        dudeSound.play();
    }
}