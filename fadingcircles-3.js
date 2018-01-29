
background(255);
noStroke();

while(true) {
  var H = random(210,270);
	var S = random(20,75);
	var B = random (20,90);
  colorMode(H,S,B);
  background(0, 0, 255, 0.1);
  fill(random(360), 255, 255);
  ellipse(random(width), random(height), random(20, 40));
 
}
