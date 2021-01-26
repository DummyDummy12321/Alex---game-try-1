var bgimg;
var bg, playerimg, Wonder;
var enemyimg1, Tarkus,enemyimg2, enemyimg3, hog, mage, enemyimg4, goblin;
var gameState = "play";
var score = 0;
var lives = 3;

function preload()
{
  bgimg = loadImage("images/background.jpg");

  fireimg = loadImage("images/aura.png");
  playerimg = loadImage("images/link_neutral.png");
  enemyimg1 = loadImage("images/Ganon_neutral.png");
  enemyimg2 = loadImage("images/Goblin.png");
  enemyimg3 = loadImage("images/hog.png");
  enemyimg4 = loadImage("images/mage.png");


}

function setup()
{
  createCanvas(1500,730);
  bg = createSprite(750,365,width,height);
  bg.addImage("bg",bgimg);
  bg.scale = 7;

  Wonder = createSprite(450,100,50,50);
  Wonder.addImage("Wonder",playerimg);
  Wonder.scale = 0.05;
}

function draw()
{
  background(0);

 
  drawSprites();
}