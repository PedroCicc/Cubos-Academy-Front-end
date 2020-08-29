const adultos = document.querySelector(".adultos");
const criancas = document.querySelector(".crianças");
const button = document.querySelector("button");
const select = document.querySelector("select");

button.addEventListener("click", () => {
    let qtdAdultos = adultos.valueAsNumber, qtdCriancas = criancas.valueAsNumber;
    
    let carneAdultos = qtdAdultos * 300;
    let carneCriancas = qtdCriancas * 150;
    let coracaoAdultos = qtdAdultos * 100;
    let coracaoCriancas = qtdCriancas * 50;
    let refriAdultos = qtdAdultos;
    let refriCriancas = qtdCriancas * 0.5;

    let formatoDaCerveja, valorDaCerveja;

    if (select.value === "garrafa") {
        formatoDaCerveja = "garrafas";
        valorDaCerveja = 0.6;
    } else if (select.value === "latao") {
        formatoDaCerveja = "latões";
        valorDaCerveja = 0.475;
    } else if (select.value === "long-neck") {
        formatoDaCerveja = "long necks";
        valorDaCerveja = 0.33;
    } else if (select.value === "lata") {
        formatoDaCerveja = "latas";
        valorDaCerveja = 0.35;
    } else if (select.value === "latinha") {
        formatoDaCerveja = "latinhas";
        valorDaCerveja = 0.269;
    }

    let cerveja = Math.round((qtdAdultos * 0.5) / valorDaCerveja);

    if (qtdAdultos >= 1 && qtdCriancas >= 1 || qtdAdultos >= 1 && qtdCriancas >= 0 || qtdAdultos >= 0 && qtdCriancas >= 1) {
        
        alert(`Você vai precisar:
        ${carneAdultos + carneCriancas} g de carne,
        ${coracaoAdultos + coracaoCriancas} g de coração,
        ${refriAdultos + refriCriancas} L de refrigerante.
        ${cerveja} ${formatoDaCerveja} de cerveja.`);
    
    } else if (qtdAdultos === 0 && qtdCriancas === 0) {

        alert("Insira a quantidade de assistentes para obter uma lista dos produtos à comprar.")

    };

});

// Ex pra casa 2
// Garrafa de 600ml
// Latão 475ml
// Long neck 330ml
// Lata 350ml
// Latinha 269ml

// Por adulto:
// 300g de carne
// 100g de coração
// 0,5L de cerveja
// 1L de refrigerante

// Por criança:
// 150g de carne
// 50g de coracao
// 0,5L de refrigerante