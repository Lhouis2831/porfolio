const words = [
    "Student",
    "Web Developer",
    "Gamer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    if (!typing) {
        return;
    }

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {
        typing.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();

// Mobile Navigation
function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("show");
}

// Close menu after clicking a link
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks")
            .classList.remove("show");
    });
});



