const  Bodies = Matter.Bodies;
const  World  = Matter.World;
const Engine = Matter.Engine;


var myengine,myworld;
var ball;
var ground;
var options;
function setup() {
  createCanvas(800,400);


  myengine = Engine.create() ;
  myworld = myengine.world;

  //circular tennis ball/body
  var ball_options = {
   
   mass: 30,
   restitution : 10
  }

  ball = Bodies.circle(400, 100, 30,ball_options) ;
  World.add(myworld,ball);
 
  //make a ground
 var ground_options = {
 "isStatic" : true 
 }
ground = Bodies.rectangle (400,400,800,20,ground_options)
World.add(myworld,ground)
 

}

function draw() {
  background(100,0,0);  
 
  Engine.update(myengine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  rectMode(CENTER);
  fill(rgb(23,56,45));
  rect(ground.position.x,ground.position.y,800,20)

}