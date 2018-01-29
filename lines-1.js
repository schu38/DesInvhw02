function drawful() {
  var art = 0
  while (art < 10) {
    line (random(width), random (height), random (width), random (height));
    art = art + 1;
  }
}
  
drawful();
