var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasWidth = canvas.width = window.innerWidth;
var canvasHeight = canvas.height = window.innerHeight;

var x = 0;
var y = 0;

var speed = 1;

var squareWidth = 10;
var squareHeight = 10;

var circleCenterX = 245;
var circleCenterY = 245;

var radius = 150;
var angle = 360;

function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    var newX = radius * Math.cos(angle * (Math.PI/180));
    var newY = radius * Math.sin(angle * (Math.PI/180));

    x = newX + circleCenterX;
    y = newY + circleCenterY;

    ctx.fillRect(x, y, squareWidth, squareHeight);

    angle += speed;
    window.requestAnimationFrame(animate);

    ctx.beginPath();
    ctx.arc(250, 250, 150, 0, Math.PI * 2, false);
    ctx.stroke();


    // ctx.clearPath();

    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.fill();

}

animate();



