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
