const colors = document.querySelectorAll(".color");
const generateButton = document.querySelector("#generate");

function generateColor() {
    const characters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }

    return color;
}


function generatePalette() {

    colors.forEach(color => {

        const newColor = generateColor();

        color.style.backgroundColor = newColor;

        color.querySelector(".hex").textContent = newColor;

    });

}


colors.forEach(color => {

    color.addEventListener("click", async () => {

        const hex = color.querySelector(".hex").textContent;

        await navigator.clipboard.writeText(hex);

        const copyText = color.querySelector(".copy");

        copyText.textContent = "COPIADO!";

        setTimeout(() => {
            copyText.textContent = "COPIAR";
        }, 1000);

    });

});


generateButton.addEventListener("click", generatePalette);

generatePalette();