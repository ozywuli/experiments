var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasWidth = canvas.width = window.innerWidth;
var canvasHeight = canvas.height = window.innerHeight;


var squareProps = {
    width: 10,
    height: 10,
    path: {
        speed: 1,
        radius: 150,
        angle: 360,
        xPos: 0,
        yPos: 0,
        xCenter: 245,
        yCenter: 245
    }
}

function animate() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    var newX = squareProps.path.radius * Math.cos(squareProps.path.angle * (Math.PI/180));
    var newY = squareProps.path.radius * Math.sin(squareProps.path.angle * (Math.PI/180));

    squareProps.path.xPos = newX + squareProps.path.xCenter;
    squareProps.path.yPos = newY + squareProps.path.yCenter;

    ctx.fillRect(
        squareProps.path.xPos, 
        squareProps.path.yPos, 
        squareProps.width, 
        squareProps.height
    );

    squareProps.path.angle += squareProps.path.speed;
    window.requestAnimationFrame(animate);

    ctx.beginPath();
    ctx.arc(250, 250, 150, 0, Math.PI * 2, false);
    ctx.stroke();


}

animate();



