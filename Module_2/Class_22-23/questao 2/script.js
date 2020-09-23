const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    const promessa = new Promise((resolver) => {
        setTimeout(() => {
            resolver();
        }, 1000);
    });
    
    promessa.then(() => alert("Promessa resolvida"));
});