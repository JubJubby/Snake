let snake;
let scl = 20;

function setup() {
    createCanvas(600, 600);
    snake = new Snake();
    frameRate(15);
    pickLocation();
}

function pickLocation() {
    let columns = floor(width/scl);
    let rows = floor(height/scl);
    apple = createVector(floor(random(columns)), floor(random(rows)));
    apple.mult(scl);
}

function draw() {
    background(75);

    if (snake.eat(apple)) {
        pickLocation();
    }
    snake.death();
    snake.update();
    snake.show();

    fill(255, 0, 100);
    rect(apple.x, apple.y, scl, scl);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        snake.direction(0, -1);
    } else if(keyCode === DOWN_ARROW) {
        snake.direction(0, 1);
    } else if(keyCode === LEFT_ARROW) {
        snake.direction(-1, 0);
    } else if(keyCode === RIGHT_ARROW) {
        snake.direction(1, 0);
    }
}

