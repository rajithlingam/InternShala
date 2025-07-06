const img = document.getElementById('slider-img');
const images = [
  "./assets/img-1.jpg",
  "./assets/img-2.jpg",
  "./assets/img-3.jpg",
  "./assets/img-4.jpg",
  "./assets/img-5.jpg"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length; 
  img.style.opacity = 0; 
  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1;
  }, 300); 
}, 2000);
