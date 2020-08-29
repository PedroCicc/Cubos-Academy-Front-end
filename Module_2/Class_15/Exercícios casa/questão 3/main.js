const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const seletor = document.querySelector(input.value);
    seletor.classList.toggle("ativo");
});