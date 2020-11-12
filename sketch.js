
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ball2;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var options = {
  isStatic : true
}

  ground = Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);


  var ball_options = {
    restitution : 0.5
  }
  var ball2_options = {
    restitution : 0.5
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  //console.log(object);
  ball2 = Bodies.circle(200,100,10,ball2_options);
  World.add(world,ball2);
}

function draw() {
  background(0);  
  Engine.update(engine)
 rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  ellipse(ball2.position.x, ball2.position.y, 20, 20);
}