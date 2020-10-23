const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos=[];
var particles=[];
var divisions =[];
var divisionHeight=320;
function setup() {
  createCanvas(480,800);
  engine = Engine.create()
  world = engine.world;
  ground = new Ground(240 , 790 , 480 , 10)

  for ( var k= 0; k<=width; k=k+80){
    divisions.push(new Ground(k, height-divisionHeight/2-15,10, divisionHeight))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 75))
  }
  for(var  j=15; j<= width-10;j=j+50)
  {
   plinkos.push( new Plinko(j , 125))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 175))
  }
  for(var  j=15; j<= width-10;j=j+50)
  {
   plinkos.push( new Plinko(j , 225))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 275))
  }
  for(var  j=15; j<= width-10;j=j+50)
  {
   plinkos.push( new Plinko(j , 325))
  }
  for(var j =40; j<=width;  j=j+50 )
  {
    plinkos.push(new Plinko(j, 375))
  }
  for(var  j=15; j<= width-10;j=j+50)
  {
   plinkos.push( new Plinko(j , 425))
  }



}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display();
  for(var j= 0 ; j< plinkos.length; j++){
    plinkos[j].display()
  }
  for(var k= 0; k<divisions.length; k++){
    divisions[k].display()
  }

 


  
  for (var j=0 ; j< particles.length; j++){
    particles[j].display();
  }
}

function touchStarted(){
  console.log(touches)
  particles.push(new Particle(touches[0][0],touches[0][1], 10))
}
