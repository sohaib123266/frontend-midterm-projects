const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });

  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");

  dots[index].classList.add("active");

  currentIndex = index;
}
// next bic
function nextSlide() {
  currentIndex++;
// around
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
// show new
  showSlide(currentIndex);
}

dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    const index = Number(this.dataset.index);

    showSlide(index);
  });
});

setInterval(nextSlide, 4000);
