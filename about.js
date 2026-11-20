// Scroll Animation

const elements = document.querySelectorAll(".card, .stat, .features div, .about-content, .about-image");

elements.forEach((el) => {
    el.classList.add("fade");
});

function reveal() {

    elements.forEach((el) => {

        const windowHeight = window.innerHeight;
        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            el.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// Highlight current navigation link

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});