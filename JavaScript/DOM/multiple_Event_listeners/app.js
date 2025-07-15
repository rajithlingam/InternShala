let h1 = document.querySelector('h1');

function icecream() {
  console.log("icecream");
}

function momos() {
  console.log("momos");
}

// Adding multiple event listeners to the same element
h1.addEventListener('click', icecream);
h1.addEventListener('click', momos);
