/**
 * The MIT License
 * Copyright (c) 2018 Ryan Friesen
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
 
 // Author: Ryan Friesen

var backgroundColor = [
  "linear-gradient(#C6680E, #A85301, #C6680E)",
  "linear-gradient(#A85301, #C6680E, #A85301)",
  "linear-gradient(#A85301, #C6680E)",
  "linear-gradient(#C6130E, #A80501, #C6130E)",
  "linear-gradient(#A80501, #C6130E, #A80501)",
  "linear-gradient(#A80501, #C6130E)",
  "linear-gradient(#153A84, #20499B, #153A84)",
  "linear-gradient(#20499B, #153A84, #20499B)",
  "linear-gradient(#20499B, #153A84)",
  "linear-gradient(#238F01, #1E7B00, #238F01)",
  "linear-gradient(#1E7B00, #238F01, #1E7B00)",
  "linear-gradient(#1E7B00, #238F01)",
  "#fff",
  "linear-gradient(#000, #222, #000)"
];

var backgroundColor2 = [
  "#A85301",
  "#C6680E",
  "#C6130E",
  "#20499B",
  "#153A84",
  "#1E7B00",
  "#238F01",
  "#000"
];

var leftRight = ["left", "right"];

var topBottom = ["top", "bottom"];

function backgroundFill() {
  var a = 1;
  var b = 100;
  var c = 1;
  while (a <= b) {
    document.getElementById("main-container").innerHTML +=
      "<div class=\"stained-glass\" id=\"glass_" + c + "\"></div>";
    a++;
    c++;
  }
}

function lineDrawer() {
  document.getElementById("main-container").innerHTML = "";

    var horizontalPosition = [(Math.floor(Math.random() * 14) * 5) + 5];
    document.getElementById("main-container").innerHTML +=
      "<div id=\"line_1\" class=\"line\" style=\"left: " +
      horizontalPosition +
      "%; width: 10%;\"></div>";
  var a = 1;
  var b = [Math.floor(Math.random() * 3) + 1];
  while (a < b) {
    var topPosition = [(Math.floor(Math.random() * 17) * 5) + 5];
  document.getElementById("main-container").innerHTML += "<div class=\"horizontal-line\" style=\"top: " + topPosition + "%; width: " + horizontalPosition + "%;\"></div>";
    a++;
  }
  }

function intersectingLine() {
  var a = 1;
  var b = [Math.floor(Math.random() * 4) + 1];

  while (a <= b) {
    var verticalPosition = [Math.floor(Math.random() * 19) * 5 + 5];
    document.getElementById("main-container").innerHTML +=
      '<div class="horizontal-line" style="top: ' +
      verticalPosition +
      '%;"></div>';
    a++;
  }
  
}

function backgroundFillWithSquare() {
  
  var a = 1;
  var b = 100;
  var c = 1;
  while (a <= b) {
    document.getElementById("main-container").innerHTML +=
      "<div class=\"stained-glass\" id=\"glass_" + c + "\"></div>";
    a++;
    c++;
    
  }
  var d = 1;
  var e = [Math.floor(Math.random() * 6) + 1];
  while (d <= e ) {
  var f = [Math.floor(Math.random() * 100) + 1];
    var background = backgroundColor2[Math.floor(Math.random() * backgroundColor2.length)];
  document.getElementById("glass_" + f).style = "background: #222; opacity: 1;";
    document.getElementById("glass_" + f).innerHTML += "<div class=\"inner-background-square\" style=\"background: " + background + ";\"></div>"; 
    d++;
  
  }
    
}

function balloonTime() {
  var a = 1;
  var b = [Math.floor(Math.random() * 10) + 2];

  while (a <= b) {
    var orient = [Math.floor(Math.random() * 4) * 90];
    var percentageDimensions = Math.random() * 2;
    var circleMargin = [Math.floor(Math.random() * 9) * 10 + 1];
    var circleMargin2 = [Math.floor(Math.random() * 9) * 10 + 1];
    var width = [Math.floor(Math.random() * 9) * 2 + 2];
    document.getElementById("main-container").innerHTML +=
      '<div class="circle" style=" background: ' +
      backgroundColor[Math.floor(Math.random() * backgroundColor.length)] +
      "; width: " +
      width +
      "%; height: " +
      width +
      "%; " +
      leftRight[Math.floor(Math.random() * 2)] +
      ": " +
      circleMargin +
      "%; " +
      topBottom[Math.floor(Math.random() * 2)] +
      ": " +
      circleMargin2 +
      "%; transform: rotate(" +
      orient +
      'deg);"></div>';
    a++;
  }
}

function squareInserter() {
  
  var a = 1;
  var b = 10;
  var background = backgroundColor2[Math.floor(Math.random() * backgroundColor2.length)];

  while (a <= b ) {
    document.getElementById("line_1").innerHTML += "<div class=\"square\"><div class=\"inner-square\" style=\"background: " + background + ";\"></div></div>";
  document.getElementById("line_1").innerHTML += "<div class=\"square\" style=\"background: transparent;\"><div class=\"inner-transparent-square-right\"></div></div>";
    document.getElementById("line_1").innerHTML += "<div class=\"square\" style=\"background: transparent;\"><div class=\"inner-transparent-square\"></div></div>";
    document.getElementById("line_1").innerHTML += "<div class=\"square\" ><div class=\"inner-square-right\" style=\"background: " + background + ";\"></div></div>";
  a++;
  }
  
}

function mainContainerRotate() {
  
  var a = Math.floor(Math.random()*4) * 90;
  document.getElementById("rotator").style = "transform: rotate(" + a + "deg);\"";
  
}