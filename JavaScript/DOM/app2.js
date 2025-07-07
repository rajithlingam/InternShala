
let ul = document.querySelector('#ref');
console.log("ul:", ul);
console.log("ul.parentElement:", ul.parentElement);
console.log("ul.parentElement.parentElement:", ul.parentElement.parentElement);
console.log("ul.parentElement.parentElement.previousElementSibling:", ul.parentElement.parentElement.previousElementSibling);
console.log("First li inside ul:", ul.children[0]);

ul.parentElement.parentElement.previousElementSibling.style.color = "crimson";

ul.children[0].style.backgroundColor = "lightgreen";

ul.children[0].nextElementSibling.style.backgroundColor = "lightblue";

ul.children[0].nextElementSibling.nextElementSibling.style.backgroundColor = "orange";
