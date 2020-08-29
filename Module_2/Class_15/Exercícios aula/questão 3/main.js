const select = document.querySelector("select");
const button = document.querySelector("button");
const opcao = document.querySelector(".opção");

button.addEventListener("click", () => {
    
    if (select.value === "E-mail") {
        opcao.innerText = "E-mail";
    } else {
        opcao.innerText = "Telefone";
    };

});