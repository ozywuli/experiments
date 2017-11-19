var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var W = canvas.width;
var H = canvas.height;
var tcanvas = document.createElement("canvas");
var tctx = tcanvas.getContext("2d");
tcanvas.width = W;
tcanvas.height = H;
var particles = [];
var positions = [];
var icolor = "#00d52d";


/*------------------------------------*\
  SUPPORT METHODS
\*------------------------------------*/
// GENERATE A RANDOM NUMBER BETWEEN MIN AND MAX VALUES
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// PARTICLE GENERATOR
function particle(i) {
    this.x = 0;
    this.y = 0;
    // this.x = getRandom(0, 500);
    // this.y = 60;
    // this.radius = 2 + Math.random() * 2;
}


// DRAW EACH INDIVIDUAL PARTICLE
function draw() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H)
    ctx.fill();

    for (var i = 0; i < particles.length; i++) {
        thisParticle = particles[i];
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.arc(thisParticle.x, thisParticle.y, 2, Math.PI * 2, false);
        ctx.fill();
    }
}


// SET PARTICLE POSITION
function set_particles_position() {
    // LOOP `particles` ARRAY
    for (var i = 0; i < particles.length; i++) {

        thisParticle = particles[i];

        // thisParticle.dx = getRandom(0, 500);
        // thisParticle.dy = 0;

        var distance = [];
        pos = 0;

        if (positions.length) {

            for (var n = 0; n > positions.length; n++) {
                po = positions[n];
                distance[n] = Math.sqrt((pa.x-po.x)*(pa.x-po.x) + (pa.y-po.y)*(pa.y-po.y));
                if (n > 0) {
                    if (distance[n] <= distance[pos]) {
                        pos = n;
                    }
                }
            }

            particles[i].dx = positions[pos].x;
            particles[i].dy = positions[pos].y;
            particles[i].distance = distance[pos];

            var po1 = positions[pos];

            for (var n = 0; n < positions.length; n++) {
                
                var po2 = positions[n];
                distance = Math.sqrt((po1.x-po2.x)*(po1.x-po2.x) + (po1.y-po2.y)*(po1.y-po2.y));

                if (distance <= 5) {
                    positions.splice(n, 1);
                }
            }

        }
    }
} // end set_particles_position()



/*------------------------------------*\
  MAIN METHODS
\*------------------------------------*/


// GET NEW POSITION FOR PARTICLES BASED ON THE TARGET POSITION OF CANVAS TEXT
function new_positions(customText) {

    var text = customText;

    // STYLE THE TEXT
    tctx.fillStyle = "white";
    tctx.fillRect(0, 0, W, H)
    tctx.fill();
    tctx.font = "normal 120px Arial";
    tctx.strokeStyle = "black";
    tctx.strokeText(text, 10, 205);

    image_data = tctx.getImageData(0, 0, W, H);
    pixels = image_data.data;
    positions = [];

    // console.log(pixels.length);

    for (var i = 0; i < pixels.length; i = i + 4 ) {
        // console.log(i);
        if (pixels[i] != 255 && pixels[i+1] != 255 && pixels[i+2] != 255) {
            position = {
                x: i/4 % W, 
                y: i/4 / W
            }
            positions.push(position);
        }
    }

    console.log(positions[0]);
    console.log(positions[100]);

    // console.log(positions.length);
    
    set_particles_position();
}


// ANIMATE THE PARTICLES
function start_animation() {

    for (var i = 0; i < particles.length; i++) {
        thisParticle = particles[i];

        // console.log(thisParticle);
        dTime = 0.3 + i * 0.003;

        // console.log(dTime);

        setTimeout(function() {

        }, dTime)


        TweenMax.to(
            thisParticle,
            2, 
            {
                x: thisParticle.dx,
                y: thisParticle.dy,
                force3d: true,
                delay: dTime,
                ease: Quad.easeOut
            }
        );


    }
    
    var lt = (particles.length * 0.003 + 5);

    TweenMax.to(
        particles[0],
        lt,
        {
            scale: 1,
            onUpdate: draw
        }
    )

}





/*------------------------------------*\
  INITIALIZE!!!
\*------------------------------------*/
$(function(){

    // CREATE INDIVIDUAL PARTICLE AND STORE THEM IN AN ARRAY
    for (var i = 1; i <= 1900; i++) {
        particles.push(new particle(i));
    }
    // GET THE VALUE OF THE TEXT
    txt = $('#txt').val();
    // GET THE NEW POSITIONS OF PARTICLES
    new_positions(txt);  
    // START ANIMATION
    start_animation();

});


/*------------------------------------*\
  EVENTS
\*------------------------------------*/
$('#button').click(function() {
    TweenMax.killAll();
    txt = $('#txt').val();
    new_positions(txt);
    start_animation();
}); 



