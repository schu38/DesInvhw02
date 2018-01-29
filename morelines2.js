// code for a.

function setup() {
  createCanvas(340, 340);
}

function midDraw() {
  line(170, 170, random(width), random(height));
}
// code for b.

function trDraw() {
  line (340, 0, random(width), random(height));
}

// unfinished code for c.
function fancyDraw() {
  var rise = random(100,250);
  var run =  rise / 2;
  var danke = 0;
  while (danke < 10) {
  	line (run, rise, rise, run);
  danke = danke + 1;
  }
}
fancyDraw();


  
