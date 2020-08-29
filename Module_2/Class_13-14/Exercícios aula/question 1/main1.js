const jaVisitou = confirm("Vocé já visitou esse site antes?")

if (!jaVisitou) {
    const nome = prompt("Qual é o seu nome?");

    alert("Olá, " + nome + "!");
};