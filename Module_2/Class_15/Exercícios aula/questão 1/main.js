const peso = document.querySelector(".peso");
const altura = document.querySelector(".altura");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let calculo = peso.valueAsNumber / (altura.valueAsNumber * altura.valueAsNumber), faixa;
    
    if (calculo < 18.5) {
        faixa = "Abaixo do peso";
    } else if (calculo >= 18.5 && calculo <= 24.9) {
        faixa = "Peso normal";
    } else if (calculo >= 25 && calculo <= 29.9) {
        faixa = "Sobrepeso";
    } else if (calculo >= 30 && calculo <= 34.9) {
        faixa = "Obesidade grau 1";
    } else if (calculo >= 35 && calculo <= 39.9) {
        faixa = "Obesidade grau 2";
    } else {
        faixa = "Obesidade grau 3";
    }

    alert(`IMC: ${calculo} Resultado: ${faixa}`);
});