var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasWidth = canvas.width = window.innerWidth;
var canvasHeight = canvas.height = window.innerHeight;


var circleProps = {
    xPos: 250,
    yPos: 250,
    radius: 150
}

var squareProps = {
    width: 10,
    height: 10,
    path: {
        speed: 1,
        radius: 150,
        angle: 360,
        xPos: 0,
        yPos: 0,
        xCenter: circleProps.xPos - (10 / 2),
        yCenter: circleProps.yPos - (10 / 2)
    }
}

function animate() {
    // CLEAR CANVAS
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);



    /*------------------------------------*\
      DRAW ANIMATED SQUARE
    \*------------------------------------*/
    var newX = squareProps.path.radius * Math.cos(squareProps.path.angle * (Math.PI/180));
    var newY = squareProps.path.radius * Math.sin(squareProps.path.angle * (Math.PI/180));

    squareProps.path.xPos = newX + squareProps.path.xCenter;
    squareProps.path.yPos = newY + squareProps.path.yCenter;

    squareProps.path.angle += squareProps.path.speed;

    ctx.fillRect(
        squareProps.path.xPos, 
        squareProps.path.yPos, 
        squareProps.width, 
        squareProps.height
    );




    var newX = (squareProps.path.radius - 100) * Math.cos(squareProps.path.angle * (Math.PI/180));
    var newY = (squareProps.path.radius - 100) * Math.sin(squareProps.path.angle * (Math.PI/180));

    squareProps.path.xPos = newX + squareProps.path.xCenter;
    squareProps.path.yPos = newY + squareProps.path.yCenter;

    squareProps.path.angle += squareProps.path.speed;

    ctx.fillRect(
        squareProps.path.xPos, 
        squareProps.path.yPos, 
        squareProps.width, 
        squareProps.height
    );





    /*------------------------------------*\
      DRAW CIRCLE
    \*------------------------------------*/
    ctx.beginPath();
    ctx.arc(
        circleProps.xPos, 
        circleProps.xPos, 
        circleProps.radius, 
        0, 
        Math.PI * 2, 
        false
    );
    ctx.stroke();




    // ANIMATE
    window.requestAnimationFrame(animate);


}

animate();



