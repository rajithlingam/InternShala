let redEL = document.querySelector('.red');
let greenEL = document.querySelector('.green');
let blueEL = document.querySelector('.blue');
let bodyEL = document.querySelector('body');

redEL.onclick = function () {
  bodyEL.style.backgroundColor = "red";
};

greenEL.onclick = function () {
  bodyEL.style.backgroundColor = "green";
};

blueEL.onclick = function () {
  bodyEL.style.backgroundColor = "blue";
};
