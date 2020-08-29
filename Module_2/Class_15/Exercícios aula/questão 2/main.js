const adultos = document.querySelector(".adultos");
const criancas = document.querySelector(".crianças");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let qtdAdultos = adultos.valueAsNumber, qtdCriancas = criancas.valueAsNumber;
    
    let carneAdultos = qtdAdultos * 300;
    let carneCriancas = qtdCriancas * 150;
    let coracaoAdultos = qtdAdultos * 100;
    let coracaoCriancas = qtdCriancas * 50;
    let refriAdultos = qtdAdultos;
    let refriCriancas = qtdCriancas * 0.5;
    let cerveja = qtdAdultos * 0.5;

    if (qtdAdultos >= 1 && qtdCriancas >= 1 || qtdAdultos >= 1 && qtdCriancas >= 0 || qtdAdultos >= 0 && qtdCriancas >= 1) {
        
        alert(`Você vai precisar:
        ${carneAdultos + carneCriancas} g de carne,
        ${coracaoAdultos + coracaoCriancas} g de coração,
        ${refriAdultos + refriCriancas} L de refrigerante,
        ${cerveja} L de cerveja`);
    
    } else if (qtdAdultos === 0 && qtdCriancas === 0) {

        alert("Insira a quantidade de assistentes para obter uma lista dos produtos à comprar.")

    };

});

// Por adulto:
// 300g de carne
// 100g de coração
// 0,5L de cerveja
// 1L de refrigerante

// Por criança:
// 150g de carne
// 50g de coracao
// 0,5L de refrigerante