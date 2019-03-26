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
  boyObj[0].style.left += 77 + 'px';
}

function moveBoyLeft () {
  boyObj[0].style.left -= 77 + 'px';
}

function moveBoyDown () {
  boyObj[0].style.top += 77 + 'px';
}

function moveBoyUp () {
  boyObj[0].style.top -= 77 + 'px';
}
// *** Move Set For Girl Object **** //
function moveGirlRight () {
  girlObj[0].style.right -= 77 + 'px';
}

function moveGirlLeft () {
  girlObj[0].style.right += 77 + 'px';
}

function moveGirlDown () {
  girlObj[0].style.bottom -= 77 + 'px';
}

function moveGirlUp () {
  girlObj[0].style.bottom += 77 + 'px';
}
