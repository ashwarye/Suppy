const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

drops = [];

 var engine, world;
  var umbrellaObj;
  var maxDrops = 100;

function preload(){
    image = loadImage("Umbrella boy.jpg")
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(200, 400);
  umbrellaObj = new Umbrella(375, 200, 25);
}

function draw(){
  Engine.update(engine);
    for(var i = 0; i<maxDrops; i++){
      drops.push(new Drop (random(0, 200), random(0, 400)));
    }
    umbrellaObj.display();

}   

