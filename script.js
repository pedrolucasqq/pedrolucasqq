/* ========================================
   EFEITO 3D + FOCO NOS CARDS
   ======================================== */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        // Diminui os outros cards
        projectCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.classList.add("card-out");
            }
        });

        card.classList.add("card-focus");
    });


    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        card.style.transform = `
            perspective(1000px)
            translateZ(30px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.04)
        `;
    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

        card.classList.remove("card-focus");

        projectCards.forEach((otherCard) => {
            otherCard.classList.remove("card-out");
        });
    });

});

