var boyObj = document.getElementsByClassName('boy');
var girlObj = document.getElementsByClassName('girl');

document.addEventListener('keyup', checkEvent);

function checkEvent (e) {
  console.log(e.which);
  switch (e.which) {
    case 68:
      moveBoyRight();
      break;
    case 76:
      moveGirlRight();
      break;
    case 65:
      moveBoyLeft();
      break;
    case 74:
      moveGirlLeft();
      break;
    case 83:
      moveBoyDown();
      break;
    case 75:
      moveGirlDown();
      break;
    case 87:
      moveBoyUp();
      break;
    case 73:
      moveGirlUp();
      break;
  }
}
// *** Move Set For Boy Object *** //
function moveBoyRight () {
  var pos = boyObj[0].offsetLeft;
  if (pos === 559) {
    return;
  }
  pos += 77;
  boyObj[0].style.left = pos + 'px';
}

function moveBoyLeft () {
  var pos = boyObj[0].offsetLeft;
  if (pos === 20) {
    return;
  }
  pos -= 77;
  boyObj[0].style.left = pos + 'px';
}

function moveBoyDown () {
  var pos = boyObj[0].offsetTop;
  if (pos === 539) {
    return;
  }
  pos += 77;
  boyObj[0].style.top = pos + 'px';
}

function moveBoyUp () {
  var pos = boyObj[0].offsetTop;
  if (pos === 0) {
    return;
  }
  pos -= 77;
  boyObj[0].style.top = pos + 'px';
}
// *** Move Set For Girl Object **** //
function moveGirlRight () {
  var pos = girlObj[0].offsetLeft;
  if (pos === 550) {
    return;
  }
  pos += 77;
  girlObj[0].style.left = pos + 'px';
}

function moveGirlLeft () {
  var pos = girlObj[0].offsetLeft;
  if (pos === 11) {
    return;
  }
  pos -= 77;
  girlObj[0].style.left = pos + 'px';
}

function moveGirlDown () {
  var pos = girlObj[0].offsetTop;
  if (pos === 540) {
    return;
  }
  pos += 77;
  girlObj[0].style.top = pos + 'px';
}

function moveGirlUp () {
  var pos = girlObj[0].offsetTop;
  if (pos === 1) {
    return;
  }
  pos -= 77;
  girlObj[0].style.top = pos + 'px';
}
