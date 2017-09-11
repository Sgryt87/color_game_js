var rgb = document.getElementById('rgb'); // span RGB
var newColors = document.getElementById('new'); // color generator on click
var box0 = document.getElementById('box0');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
var boxes = document.getElementsByClassName('box');
var boxesOptional = document.getElementsByClassName('optional'); // hard-easy


function helperGenerator(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rgbGenerator() {
  var randomColors = [
    [helperGenerator(0, 255), helperGenerator(0, 255), helperGenerator(0, 255)],
    [helperGenerator(0, 255), helperGenerator(0, 255), helperGenerator(0, 255)],
    [helperGenerator(0, 255), helperGenerator(0, 255), helperGenerator(0, 255)],
    [helperGenerator(0, 255), helperGenerator(0, 255), helperGenerator(0, 255)],
    [helperGenerator(0, 255), helperGenerator(0, 255), helperGenerator(0, 255)],
    [helperGenerator(0, 255), helperGenerator(0, 255), helperGenerator(0, 255)]
  ];
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = 'rgb(' + randomColors[i] + ')';
    boxes[i].classList.remove('hidden');
  }
  rgb.innerHTML = boxes[helperGenerator(0, 5)].style.backgroundColor;
}


function boxesClick(el) {
  var textAlert = document.getElementById('textAlert');
  var clickedBox = el.style.backgroundColor;
  for (var i = 0; i < boxes.length; i++) {
    if (clickedBox == rgb.innerHTML) {
      boxes[i].style.backgroundColor = rgb.innerHTML;
      textAlert.innerHTML = 'You got it!';
      console.log('yes'); // make all boxes tge same collor and disl=play WIN
    } else {
      el.classList.add('hidden');
      textAlert.innerHTML = 'You missed.';
    }
  }
}


function easyFun() {
  for (var i = 0; i < boxesOptional.length; i++) {
    boxesOptional[i].classList.add('hidden');
  }
}

function hardFun() {
  for (var i = 0; i < boxesOptional.length; i++) {
    boxesOptional[i].classList.remove('hidden');
  }
}
