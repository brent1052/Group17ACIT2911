"use strict"

let count = 0;
let score = 0;
let highscore = 0;
let scoreboard = [];
let speed = 2000;
//Movement Intervals
let timer1;
let timer2;
let timer3;
let timer4;

let timeout1;
let timeout2;
let timeout3;
let timeout4;

let gameTimer;
let time = 0;
let bgMusic = document.getElementById("bgmusic");

let survival = false;
let insane = false;
let lives = 10;
 

// scoreboard.sort(function(a, b){return b - a});

// Randomizer
function letsRandomize(min,max){
     return (Math.floor(Math.random() * max) + min);
}

// Lowers Volume
function lowerVolume(){
    bgMusic.volume = 0.1;
}

// Plays Background music
function bgPlay(){
    bgMusic.play()
}

// Stops background music
function bgStop(){
    bgMusic.pause();
    bgMusic.currentTime = 0;
}



// Calls functions to reveal mole and move mole around the screen
function molePlacer1(){
    moleMove(1,200);
    clearTimeout(timer1);
    timer1 = setTimeout(molePlacer1, speed)
    console.log('movePlacer1');
    if (survival == true) {
        lives--;
        if (lives <= 0) {
            reset();
        }
        document.getElementById('lives').innerHTML = "Lives: " + lives;
    }
}

function molePlacer2(){
    moleMove(2,200);
    clearTimeout(timer2);
    timer2 = setTimeout(molePlacer2, speed)
    console.log('movePlacer2');
    lives--;
    if (survival == true) {
        lives--;
        if (lives <= 0) {
            reset();
        }
        document.getElementById('lives').innerHTML = "Lives: " + lives;
    }
}

function molePlacer3(){
    moleMove(3,240);
    clearTimeout(timer3);
    timer3 = setTimeout(molePlacer3, speed)
    lives--;
    if (survival == true) {
        lives--;
        if (lives <= 0) {
            reset();
        }
        document.getElementById('lives').innerHTML = "Lives: " + lives;
    }
}

function molePlacer4(){
    moleMove(4,120);
    clearTimeout(timer4);
    timer4 = setTimeout(molePlacer4, speed)
    lives--;
    if (survival == true) {
        lives--;
        if (lives <= 0) {
            reset();
        }
        document.getElementById('lives').innerHTML = "Lives: " + lives;
    }
}


// Timer Function
function countdown() {
    let elem = document.getElementById('timer');
    if (!(survival)) {
        if (time == 1) {
            reset();
            console.log('timer done');
            elem.innerHTML = 'Time: ' + time;
            
        } else {
            time--;
            elem.innerHTML = 'Time: ' + time;
        }
    } else {
        time++;
        elem.innerHTML = 'Time: ' + time;
        if (time % 10 == 0) {
            speed -= 200;
        }
    } 
    
    if(score == 5) {
        showMole(2);
        timer2 = setTimeout(molePlacer2, speed);
    }
    if(score == 10) {
        showMole(3);
        timer3 = setTimeout(molePlacer3, speed);
    }
    if(score == 20){
        showMole(4);
        timer4 = setTimeout(molePlacer4, speed);
    }
}

// Moves the mole
function moleMove(id,s){
    let w = letsRandomize(0, (window.innerWidth - s));
    let h = letsRandomize(0, (window.innerHeight - s));
    document.getElementById('mole' + id).style.top = h + 'px';
    document.getElementById('mole' + id).style.left = w + 'px';
    document.getElementById('boom' + id).style.top = h + 'px';
    document.getElementById('boom' + id).style.left = w + 'px';
}

// When mole is clicked Animation plays for half a second then moves Mole to somewhere on the screen
function moveClicked1(s){
    let w = letsRandomize(0, (window.innerWidth - s));
    let h = letsRandomize(0, (window.innerHeight - s));
    document.getElementById('boom1').style.display = "inline-block";
    console.log('MOLE1');
    clearTimeout(timeout1);
    timeout1 = setTimeout(showM1(h, w), 500);
    
}

function moveClicked2(s){
    let w = letsRandomize(0, (window.innerWidth - s));
    let h = letsRandomize(0, (window.innerHeight - s));
    document.getElementById('boom2').style.display = "inline-block";
    console.log('MOLE2');
    clearTimeout(timeout2);
    timeout2 = setTimeout(showM2(h, w), 500);
    
}

function moveClicked3(s){
    let w = letsRandomize(0, (window.innerWidth - s));
    let h = letsRandomize(0, (window.innerHeight - s));
    document.getElementById('boom3').style.display = "inline-block";
    console.log('MOLE3');
    clearTimeout(timeout3);
    timeout3 = setTimeout(showM3(h, w), 500);
    
}

function moveClicked4(s){
    let w = letsRandomize(0, (window.innerWidth - s));
    let h = letsRandomize(0, (window.innerHeight - s));
    document.getElementById('boom4').style.display = "inline-block";
    console.log('MOLE4');
    clearTimeout(timeout4);
    timeout4 = setTimeout(showM4(h, w), 500);
    
}


// Returns a showMole function, Used to display mole when event takes place
function showM1(h, w){
    return function(){
        document.getElementById('mole1').style.top = h + 'px';
        document.getElementById('mole1').style.left = w + 'px';
        document.getElementById('boom1').style.top = h + 'px';
        document.getElementById('boom1').style.left = w + 'px';
        document.getElementById('mole1').style.display = "inline-block";
        document.getElementById('boom1').style.display = "none";
        console.log('showM');
        timer1 = setTimeout(molePlacer1, speed);
    }
}

function showM2(h, w){
    return function(){
        document.getElementById('mole2').style.top = h + 'px';
        document.getElementById('mole2').style.left = w + 'px';
        document.getElementById('boom2').style.top = h + 'px';
        document.getElementById('boom2').style.left = w + 'px';
        document.getElementById('mole2').style.display = "inline-block";
        document.getElementById('boom2').style.display = "none";
        console.log('showM');
        timer2 = setTimeout(molePlacer2, speed);
    }
}

function showM3(h, w){
    return function(){
        document.getElementById('mole3').style.top = h + 'px';
        document.getElementById('mole3').style.left = w + 'px';
        document.getElementById('boom3').style.top = h + 'px';
        document.getElementById('boom3').style.left = w + 'px';
        document.getElementById('mole3').style.display = "inline-block";
        document.getElementById('boom3').style.display = "none";
        console.log('showM');
        timer3 = setTimeout(molePlacer3, speed);
    }
}

function showM4(h, w){
    return function(){
        document.getElementById('mole4').style.top = h + 'px';
        document.getElementById('mole4').style.left = w + 'px';
        document.getElementById('boom4').style.top = h + 'px';
        document.getElementById('boom4').style.left = w + 'px';
        document.getElementById('mole4').style.display = "inline-block";
        document.getElementById('boom4').style.display = "none";
        console.log('showM');
        timer4 = setTimeout(molePlacer4, speed);
    }
}

// displays mole
function showMole(id){
    document.getElementById('mole' + id).style.display = "inline-block";
    document.getElementById('boom' + id).style.display = "none";
}
        
function animate(id){
    document.getElementById('mole' + id).style.display = "none";
    document.getElementById('boom' + id).style.display = "inline-block";
}
        
function initialize(){
    let sw = window.innerWidth/2;
    let sh = window.innerHeight/2;
    count = 0;
    score = 0;
    lives = 10;
    time = 0;
    speed = 2000;
    moleMove(1,200);
    survival = false;
    document.getElementById('survival').style.backgroundColor = "#331a00";
    document.getElementById('survival').style.color = "white";
    document.getElementById('start').style.top = sh - 40 + 'px';
    document.getElementById('start').style.left = sw - 60 + 'px';
    document.getElementById('head').style.top = sh - 400 + 'px';
    document.getElementById('head').style.left = sw - 270 + 'px';
    document.getElementById('survival').style.top = sh + 20 + 'px';
    document.getElementById('survival').style.left = sw - 73 + 'px';
    document.getElementById('score').innerHTML = "Score: " + score;
    document.getElementById('hscore').innerHTML = "High Score: " + highscore;
    document.getElementById('timer').innerHTML = "Time: " + time;
    document.getElementById('head').innerHTML = "Whack-A-Mole";
    document.getElementById('start').style.display = "inline-block";
    document.getElementById('survival').style.display = "inline-block";
    document.getElementById('mole1').onclick = handler(1, 200);
    document.getElementById('mole2').onclick = handler(2, 200);
    document.getElementById('mole3').onclick = handler(3, 240);
    document.getElementById('mole4').onclick = handler(4, 120);
    document.getElementById('start').onclick = gameStart;
    document.getElementById('survival').onclick = survivalMode;
    document.getElementById('lives').style.display = "none";
    
    hideAll();
}
function reset(){
    initialize();
    stopTimer();
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
    clearInterval(gameTimer);
    bgStop();
}
        
function hideAll(){
    document.getElementById('mole1').style.display = "none";
    document.getElementById('mole2').style.display = "none";
    document.getElementById('mole3').style.display = "none";
    document.getElementById('mole4').style.display = "none";
    document.getElementById('boom1').style.display = "none";
    document.getElementById('boom2').style.display = "none";
    document.getElementById('boom3').style.display = "none";
    document.getElementById('boom4').style.display = "none";
}
        
function gameStart(){
    if (survival) {
        time = 0;
    } else {
        time = 30;
    }
    document.getElementById('survival').style.display = "none";
    document.getElementById('timer').innerHTML = "Time: " + time;
    document.getElementById('start').style.display = "none";
    document.getElementById('head').innerHTML = "";
    moleMove(1,200);
    startTimer();
    gameTimer = setInterval(countdown, 1000);
    showMole(1);
    bgPlay();
}

function survivalMode() {
    if (survival == false) {
        survival = true;
        console.log('on');
        document.getElementById('lives').style.display = "block";
        document.getElementById('survival').style.backgroundColor = "white";
        document.getElementById('survival').style.color = "black";
        document.getElementById('lives').innerHTML = "Lives: " + lives;
    } else {
        survival = false;
        console.log('off');
        document.getElementById('survival').style.backgroundColor = "#331a00";
        document.getElementById('survival').style.color = "white";
        document.getElementById('lives').style.display = "none";
    }
    
}

function startTimer(){
    timer1 = setTimeout(molePlacer1, speed);
}

function stopTimer(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    clearTimeout(timer4);
}

// Handles all changes when clicking a mole
function handler(id, s){
    return function (){
        document.getElementById('effect' + id).play();
        score += 1;
        animate(id);
        if (survival == false){
            if (score % 2 == 0) {
                time += 1;
            }
        }
        document.getElementById('timer').innerHTML = 'Time: ' + time;
        if (id == 1) {
            clearTimeout(timer1);
            moveClicked1(s);
        }
        if (id == 2) {
            clearTimeout(timer2);
            moveClicked2(s);
        }
        if (id == 3) {
            clearTimeout(timer3);
            moveClicked3(s);  
        }
        if (id == 4) {
            clearTimeout(timer4);
            moveClicked4(s);  
        }
        document.getElementById('score').innerHTML = "Score: " + score;
        if (score > highscore){
            highscore = score;
            document.getElementById('hscore').innerHTML = "NEW High Score: " + highscore;
        }
    }
}

document.body.onload = initialize;
