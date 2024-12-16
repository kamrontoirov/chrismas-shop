const burgerBtn = document.querySelector(".burger-btn");
const headerNav = document.querySelector(".nav");
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    headerNav.classList.toggle("mobile__nav");
});
function timer() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".day").textContent = days;
    document.querySelector(".hour").textContent = hours;
    document.querySelector(".minute").textContent = minutes;
    document.querySelector(".second").textContent = seconds;
}

setInterval(timer, 1000);
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slider = document.querySelector(".slider");

let currentPosition = 0; // Initial position
const visibleAreaWidth = 400; // Width of one slide
const slides = document.querySelectorAll(".slides");
const totalSlides = slides.length; // Number of slides
const totalWidth = totalSlides * visibleAreaWidth; // Total width of all slides
const step = visibleAreaWidth; // Step (width of one slide)
const maxPosition = totalWidth - visibleAreaWidth; // Maximum position

function updateSliderPosition() {
    slider.style.transition = "transform 0.3s ease"; // Smooth transition
    slider.style.transform = `translateX(-${currentPosition}px)`; // Move the slider
}

leftBtn.addEventListener("click", () => {
    currentPosition = Math.max(currentPosition - step, 0); // Decrease position, but not below 0
    updateSliderPosition();
});

rightBtn.addEventListener("click", () => {
    currentPosition = Math.min(currentPosition + step, maxPosition); // Increase position, but not beyond max position
    updateSliderPosition();
});
