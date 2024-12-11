const burgerBtn = document.querySelector(".burger-btn");
const headerNav = document.querySelector(".nav");
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("active");
    headerNav.classList.toggle("mobile__nav");
});
