function esperar(milissegundos) {
    const promessa = new Promise((resolver) => {
        setTimeout(() => {
            resolver();
        }, milissegundos);
    });
}

const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    esperar(1000).then(() => alert("Promessa resolvida"));
});