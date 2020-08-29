const form = document.querySelector("form");
const input = form.querySelector("input");
const aFazer = document.querySelector(".a-fazer");
const feitas = document.querySelector(".feitas");

function deletarTarefa(event) {
    const botaoDeDeletar = event.target;
    const tarefa = botaoDeDeletar.closest("li");

    tarefa.remove();
};

function marcarComoFeita(event) {
    const checkbox = event.target;
    const tarefa = checkbox.closest("li");

    if (checkbox.checked) {
        feitas.append(tarefa);
    } else {
        aFazer.append(tarefa);
    }
};

form.addEventListener("submit", event => {
    event.preventDefault();

    const tarefa = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("input", marcarComoFeita);

    const texto = document.createElement("span");
    texto.innerText = input.value;

    const botaoDeDeletar = document.createElement("button");
    botaoDeDeletar.innerText = "Deletar";
    botaoDeDeletar.addEventListener("click", deletarTarefa);

    tarefa.append(checkbox);
    tarefa.append(texto);
    tarefa.append(botaoDeDeletar);

    aFazer.append(tarefa);

    input.value = "";
});