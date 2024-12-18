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
function updateSliderPosition() {
    const offset = -currentIndex * 100;
    sliderRow.style.transform = `translateX(${offset}%)`;
}

const slayderQator = document.querySelector(".slider__row");
const slayderKartalar = document.querySelectorAll(".slider-card");
const chapTugma = document.querySelector(".slider-btns .right");
const ongTugma = document.querySelector(".slider-btns .left");

let holat = 0;

function slayderniYurgizish(tomon) {
    const korinadiganJoy = slayderQator.clientWidth;
    const umumiyKenglik = Array.from(slayderKartalar).reduce(
        (sum, karta) => sum + karta.clientWidth,
        0
    );
    const qadam = korinadiganJoy / (window.innerWidth >= 100 ? 7 : 10);

    holat = Math.min(
        Math.max(holat + tomon * qadam, 0),
        umumiyKenglik - korinadiganJoy
    );
    slayderQator.style.transform = `translateX(-${holat}px)`;

    chapTugma.disabled = holat <= 0;
    ongTugma.disabled = holat >= umumiyKenglik - korinadiganJoy;
}

chapTugma.addEventListener("click", () => slayderniYurgizish(-1));
ongTugma.addEventListener("click", () => slayderniYurgizish(1));

window.addEventListener("resize", () => slayderniYurgizish(0));
