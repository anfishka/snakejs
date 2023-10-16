const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/donut.png";

let box = 64;

let score = 0;

let food1 = 
{
    x: Math.floor((Math.random() * 8)) * box,
    y: Math.floor((Math.random() * 8))* box,
};

let food2 = 
{
    x: Math.floor(Math.random() * 8)*box,
    y: Math.floor(Math.random() * 8) *box
};

let food3 = 
{
    x: Math.floor(Math.random() * 8)*box,
    y: Math.floor(Math.random() * 8) *box
};

let food4 = 
{
    x: Math.floor(Math.random() * 8)*box,
    y: Math.floor(Math.random() * 8) *box
};

let food5 = 
{
    x: Math.floor(Math.random() * 8)*box,
    y: Math.floor(Math.random() * 8) *box
};

let snake = [];

snake[0] = 
{
    x: 3 * box,
    y: 3 * box

};

document.addEventListener("keydown", direction);

let dir;

function direction(event)
{
    if(event.keyCode == 65 && dir != "right")
        dir = "left";
    else if(event.keyCode == 87 && dir != "down")
        dir = "up";
    else if(event.keyCode == 68 && dir != "left")
        dir = "right";
    else if(event.keyCode == 83 && dir != "up")
        dir = "down";

}

let txt = document.getElementById("txt");

function drawGame()
{
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food1.x, food1.y);
    ctx.drawImage(foodImg, food2.x, food2.y);
    ctx.drawImage(foodImg, food3.x, food3.y);
    ctx.drawImage(foodImg, food4.x, food4.y);
    ctx.drawImage(foodImg, food5.x, food5.y);

    for(let i = 0; i < snake.length; i++)
    {
        ctx.fillStyle = i == 0 ? "pink" : "purple";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == food1.x && snakeY == food1.y || snakeX == food2.x && snakeY == food2.y || snakeX == food3.x && snakeY == food3.y || snakeX == food4.x && snakeY == food4.y || snakeX == food5.x && snakeY == food5.y)
    {
        score++;
       food1 =
       {
        x:Math.floor(Math.random() * 8) * box,
        y: Math.floor(Math.random() * 8) * box
    };
    food2 =
       {
        x:Math.floor(Math.random() * 8) * box,
        y: Math.floor(Math.random() * 8) * box
    };
    food3 =
    {
     x:Math.floor(Math.random() * 8) * box,
     y: Math.floor(Math.random() * 8) * box
    };
    food4 =
    {
    x:Math.floor(Math.random() * 8) * box,
    y: Math.floor(Math.random() * 8) * box
    };
    food5 =
    {
    x:Math.floor(Math.random() * 8) * box,
    y: Math.floor(Math.random() * 8) * box
    };
    }else{
        snake.pop();
    }

    if(snakeX < box|| snakeX > box * 10 || snakeY < box|| snakeY > box * 10)
    clearInterval(game);

    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;

    let newHead = {
        x:snakeX,
        y:snakeY
    };
    snake.unshift(newHead);

    txt.innerHTML = score;
}

let game = setInterval(drawGame, 500);











