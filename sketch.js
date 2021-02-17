var database;
var firstPage,game,player;
function setup(){
    createCanvas(500,500);
    database= firebase.database();
  game= new Game;
  game.start();
}

function draw(){
    background("white");
   
}

