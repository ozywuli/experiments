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

for(var i = 1; i <= 1900; i++)
{
  particles.push(new particle(i));
}

function particle(i)
{
  this.x = getRandom(0,800);
  this.y = 60;
  this.radius = 2+Math.random()*2;
}


function new_positions(s)
{
  tctx.fillStyle = "white";
  tctx.fillRect(0, 0, W, H)
  tctx.fill();

  tctx.font = "normal 130px Arial";
  text = s;
  tctx.strokeStyle = "black";
  tctx.strokeText(text, 10, 205);

  image_data = tctx.getImageData(0, 0, W, H);
  pixels = image_data.data;
  positions = [];
  for(var i = 0; i < pixels.length; i = i+4)
  {
    if(pixels[i] != 255 && pixels[i+1] != 255 && pixels[i+2] != 255)
    {
      position = {x: i/4%W, y: i/4/W}
      positions.push(position);
    }
  }
  set_particles_position();
}

function draw(p)
{
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, W, H)
  ctx.fill();
  
  for(var i = 0; i < particles.length; i++)
  {
    p = particles[i];
    ctx.beginPath();
    ctx.fillStyle = randGreen();
    ctx.arc(p.x, p.y, p.radius, Math.PI*2, false);
    ctx.fill();
  }
}

function set_particles_position()
{
  for(var i = 0; i < particles.length; i++)
  {
    par = particles[i];
    par.dx = getRandom(0,500);
    par.dy = 60;
    var distance = [];
    pos = 0;
    if(positions.length)
    {
      for(var n = 0; n > positions.length; n++)
      {
        po = positions[n];
        distance[n] = Math.sqrt((pa.x-po.x)*(pa.x-po.x) + (pa.y-po.y)*(pa.y-po.y));
        if(n > 0)
        {
          if(distance[n] <= distance[pos])
          {
            pos = n;
          }
        }
      }
      particles[i].dx = positions[pos].x;
      particles[i].dy = positions[pos].y;
      particles[i].distance = distance[pos];

      var po1 = positions[pos];
      for(var n = 0; n < positions.length; n++)
      {
        var po2 = positions[n];
        distance = Math.sqrt((po1.x-po2.x)*(po1.x-po2.x) + (po1.y-po2.y)*(po1.y-po2.y));
        if(distance <= 5)
        {
          positions.splice(n, 1);
        }
      }
    }
    else
    {
      //particles[i].al = 0;
    }
  }
}

function start_animation() {
  var animation_duration = 15;
  for(var i = 0; i < particles.length; i++)
  {
   // console.log(p)
    p = particles[i];
    dTime = 0.3+ i*0.003;
    TweenMax.to(p,0.3,{x:p.dx,y:p.dy,force3d:true,ease:Quad.easeOut,delay:dTime });
  }
  var lt = (particles.length * 0.003 + 5);
  TweenMax.to(particles[0],lt,{scaleX:1,onUpdate: draw})
}
function reset() {
   for(var i = 0; i < particles.length; i++)
  {
    p = particles[i];
    p.dx = getRandom(0,800);
    p.dy = 60;
    TweenMax.set(p,{x: p.dx,y:p.dy});
  }
}

$(function(){
  txt = $('#txt').val();
  new_positions(txt);  
  start_animation();
});
$('#button').click(function() {
  TweenMax.killAll();
  //reset();
  txt = $('#txt').val();
  new_positions(txt);
  //particles = shuffle(particles)
  start_animation();
}); 

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
  
function randGreen() {
  var icolors = ['#a0fc01','#93eb01','#81cf00','#66ff00','#88ff68'];
  var clr = icolors[Math.floor(Math.random() * icolors.length)]
  return clr;
}