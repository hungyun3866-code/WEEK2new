function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  // 定義顏色
  let lightYellow = '#FFFDE0'; // 淺黃色臉部
  let blackColor = '#000000';  // 黑色五官與框線

  background(220);

  // 1. 畫臉部圓形
  fill(lightYellow);
  stroke(blackColor);
  strokeWeight(8);
  // 圓心在 (windowWidth/2, windowHeight/2)
  ellipse(windowWidth / 2, windowHeight / 2, 200, 200);

  // 2. 畫眼睛 (將 Y 座標從 -50 改為 -20，讓它更接近中線)
  fill(blackColor);
  noStroke();
  rectMode(CENTER);
  
  // 左眼：水平往左 50，垂直往上僅 20
  rect(windowWidth / 2 - 50, windowHeight / 2 - 20, 20, 20);
  // 右眼：水平往右 50，垂直往上僅 20
  rect(windowWidth / 2 + 50, windowHeight / 2 - 20, 20, 20);

  // 3. 畫嘴巴 (微調位置與弧度)
  noFill();
  stroke(blackColor);
  strokeWeight(8);
  
  // 嘴巴位置調整到中心下方 30 像素處，寬度稍微縮小讓比例更好看
  // arc(x, y, w, h, start, stop)
  arc(windowWidth / 2, windowHeight / 2 + 30, 80, 40, 0, PI);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}