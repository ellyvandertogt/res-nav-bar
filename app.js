
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
//toglle Nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}

// animation links
navLinks.forEach((link, index) => {
    console.log(index);
});

    navSlide();


//https://stackoverflow.com/questions/60330641/js-navslide-function-not-working-on-click
//https://www.youtube.com/watch?v=gXkqy0b4M5g&t=1049s

