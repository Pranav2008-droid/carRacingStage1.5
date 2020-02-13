var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4;
var cars = [];
var track,c1i, c2i, c3i, c4i, ground; 

function preload(){
  track = loadImage("images/track.jpg");
  c1i = loadImage("images/car1.png");
  c2i = loadImage("images/car2.png");
  c3i = loadImage("images/car3.png");
  c4i = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
