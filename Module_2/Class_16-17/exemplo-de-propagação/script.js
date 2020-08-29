const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener("click", () => {
    alert("div clicada");
});

button.addEventListener("click", (e) => {
    alert("button clicado");
    e.stopPropagation();
});