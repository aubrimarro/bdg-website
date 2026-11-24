const menuButton =
    document.getElementById("menuButton");
const primaryNav = 
    document.getElementById("primaryNav");

    menuButton.addEventListener("click", function () {
    primaryNav.classList.toggle("open");
    });

// Carousel images //
const carouselImage =
  document.getElementById("carouselImage");

const previousButton =
  document.getElementById("previousButton");

const nextButton =
  document.getElementById("nextButton");

const images = [
  "images/index-resized/embroidery-resize.png", "images/index-resized/mindy-press-resize.png","images/index-resized/bobcat-cheer-resize.png"
];

let currentImage = 0;

nextButton.addEventListener("click", function () {
  currentImage = currentImage + 1;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  carouselImage.src = images[currentImage];
});

previousButton.addEventListener("click", function () {
  currentImage = currentImage - 1;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  carouselImage.src = images[currentImage];
});