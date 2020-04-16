const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var bird;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    
    var bird_options = {restitution:0.9}    
    bird = Bodies.circle(200,200,20,bird_options);
    World.add(world,bird);
    
    console.log(ground);
    console.log(bird);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(RADIUS);
    ellipse(bird.position.x,bird.position.y,20,20);

}