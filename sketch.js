const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine, world;
var ground, ball;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400, 375, 800, 50, options);
  World.add(world, ground);

  var ball_options = {
    restitution : 0.75
  }
  ball = Bodies.circle(400, 200, 50, ball_options);
  World.add(world, ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50, 50);
}