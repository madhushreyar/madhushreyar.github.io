// Typewriter Effect
const texts = ["Web Developer", "UI/UX Designer", "Freelancer", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typed-text").textContent = letter;
    if (letter.length === currentText.length) {
        setTimeout(() => {
            setTimeout(erase, 1000);
        }, 100);
    } else {
        setTimeout(type, 150);
    }
}

function erase() {
    if (index > 0) {
        index--;
        letter = currentText.slice(0, index);
        document.getElementById("typed-text").textContent = letter;
        setTimeout(erase, 100);
    } else {
        count++;
        type();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
