// slider
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
    if (i >= images.length) index = 0;
    if (i < 0) index = images.length - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

next.addEventListener("click", () => {
    index++;
    showSlide(index);
});

prev.addEventListener("click", () => {
    index--;
    showSlide(index);
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
    });
});


setInterval(() => {
    index++;
    showSlide(index);
}, 4000);

showSlide(index);


// hero_section
const hero = document.querySelector(".hero_imges");
const image = document.querySelectorAll(".hero_imges img");
let index1 = 0;

function showimg(i) {
    if (i >= image.length) index1 = 0;
    if (i < 0) index1 = image.length - 1;
    hero.style.transform = `translateX(${-index1 * 200}%)`;
}

setInterval(() => {
    index1++;
    showimg(index1);
}, 3000);

showimg(index1);
