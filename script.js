/* Time's Reckoning, Created by Katelyn Villacres */
/* global fill loadImage textSize createCanvas text noLoop background createP frameRate floor nf*/

let celesteArray = [], celeste_idle, canvas_width, canvas_height;
let total_time = 3;
let timerDisplay;
let checkpoint_num = 0;

function preload(){
  celeste_idle = loadImage('https://cdn.glitch.global/239c792d-ef8d-4048-9244-2fa999f57e13/thumbnails%2Fcelelste_idle.PNG?1730576876791');
}

function setup(){
  canvas_width = 800;
  canvas_height = 600;
  createCanvas(canvas_width, canvas_height);
  timerDisplay = createP();
  timerDisplay.style('font-size', '24px');
  frameRate(1)
}

function draw(){
  game_intro();
  // actOne();
  // actTwo();
  // actThree();
  // actFour()
  // youWin(ending);
  // TODO: Create a timer that counts down from 30 minutes
  
}

function game_intro(){
  background(95);
  text("This is a placeholder frame for the game", 100, 100);
  
  // Calculates minutes and seconds remaining
  let minutes = floor(total_time / 60);
  let seconds = total_time % 60;
  
  // Formats the display
  let time_string = nf(minutes, 2) + ":" + nf(seconds, 2);
  text(`Time Remaining: ${time_string}`, 353, 190);
  
  // Determines whether or not the player still has time remaining. If there's still time, keep counting down
  // Otherwise, trigger the "YOU LOST" screen
  if (total_time > 0){
    total_time--;
  } else {
    noLoop(); // stops the draw loop once the timer is out
    lose();
  }
  
}

function lose(){
  background('black')
  fill('red')
  text('YOU LOSE', 220, 300);
  text('You ran out of time! The world is doomed...', 230, 310);
  text('Try again?', 250, 350);
  textSize(35);
}