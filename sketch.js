const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(150,340,300,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 box1 = new Ground(300,350,10,100)
 box2 = new Ground(380,350,10,100)
 var ball_options = {
   density:2,
   restitution:0,
 }
ball = Bodies.circle(50,200,10,ball_options);
World.add(world,ball)
push1 = createImg ("push.png");
push1.position(50,100);
push1.size(50,50);
push1.mouseClicked(hForce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  box1.show();
  box2.show();
  ellipse(ball.position.x,ball.position.y,10,10);
  Engine.update(engine);
}

function hForce(){

Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-0.009});


}