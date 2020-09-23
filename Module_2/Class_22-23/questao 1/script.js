const elementoCitacao = document.querySelector(".citacao");
const elementoAutor = document.querySelector(".autor");
const botao = document.querySelector("button");

function gerarCitacao() {
    fetch ("https://programming-quotes-api.herokuapp.com/quotes/random/lang/en")
    .then(resposta => {
        return resposta.json();
    }).then(respostaJson => {
        console.log(respostaJson);

        elementoAutor.innerText = respostaJson.author;
        elementoCitacao.innerText = respostaJson.en;
    });
};

gerarCitacao();

botao.addEventlistener("click", () => {
    gerarCitacao();
});