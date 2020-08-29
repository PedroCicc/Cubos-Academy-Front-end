let contagem = 0;

const button = document.querySelector("button");
const contador = document.querySelector(".contador");

button.addEventListener("click", () => {
    contagem++;
    // contador.innerText = contagem;
    if (contagem % 2 === 0) {
        contador.innerHTML = "<b>" + contagem + "</b>"
    } else {
        contador.innerText = contagem;
    }
});