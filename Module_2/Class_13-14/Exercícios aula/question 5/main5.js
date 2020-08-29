const button = document.querySelector("button");
const compras = document.querySelector(".compras");

button.addEventListener("click", () => {
    if (compras.classList.contains("riscado")) {
        compras.classList.remove("riscado");
    } else {
        compras.classList.add("riscado");
    }
})