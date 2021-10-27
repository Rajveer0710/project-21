

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var rightArrow;
var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

rightArrow = createImage("right.png");
rightArrow.position(350, 50);
rightArrow.size(50, 50);
rightArrow.mouseClicked(goRight);

var options = {restitution:0.5}
ball = Bodies.circle(200, 100, 20, options);
World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  
}


function goRight(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0})
}

