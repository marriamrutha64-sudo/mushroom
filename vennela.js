/* =========================================
   AMRUTHA MUSHROOM WORLD
   VENNELA.JS - 3D IMAGE ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const objects = document.querySelectorAll(".floating-mushroom");

    objects.forEach((object, index) => {

        // Different starting positions
        const startX = Math.random() * 70 - 35;
        const startRotate = Math.random() * 30 - 15;

        object.style.setProperty("--start-x", `${startX}px`);
        object.style.setProperty("--start-rotate", `${startRotate}deg`);

        // Add different animation delays
        object.style.animationDelay = `${index * 0.5}s`;

    });


    /* =========================================
       MOUSE 3D MOVEMENT
    ========================================= */

    document.addEventListener("mousemove", (event) => {

        const mouseX = (event.clientX / window.innerWidth) - 0.5;
        const mouseY = (event.clientY / window.innerHeight) - 0.5;

        objects.forEach((object, index) => {

            const speed = 20 + (index * 5);

            const rotateX = mouseY * -speed;
            const rotateY = mouseX * speed;

            object.style.transform =
                `translate3d(${mouseX * 20}px, ${mouseY * 20}px, 0)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

    });


    /* =========================================
       CLICK BOUNCE
    ========================================= */

    objects.forEach(object => {

        object.addEventListener("click", () => {

            object.classList.remove("clicked");

            // Restart animation
            void object.offsetWidth;

            object.classList.add("clicked");

        });

    });


});