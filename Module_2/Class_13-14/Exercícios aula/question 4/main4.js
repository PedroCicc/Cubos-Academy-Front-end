const button = document.querySelector("button");
const spoiler = document.querySelector(".spoiler");

button.addEventListener("click", () => {
    const estaOculto = spoiler.hasAttribute("hidden")

    if (estaOculto) {
        spoiler.removeAttribute("hidden");
    } else {
        spoiler.setAttribute("hidden", "");
    };
});