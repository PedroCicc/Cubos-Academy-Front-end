const button = document.querySelector("button");
const compras = document.querySelector(".compras");

button.addEventListener("click", () => {
    if(compras.style["text-decoration"] === "line-through") {
        compras.style["text-decoration"] = "";
    } else {
        compras.style["text-decoration"] = "line-through";
    };
});