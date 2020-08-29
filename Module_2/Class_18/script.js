const fs = require("fs");

fs.readFile("cartas.txt", (err, data) => {
    if (err) {
        return console.log(err);
    }
    return console.log(data.toString());
});

const data = "cartas.txt";

const separadorDeMensagens = (data) => {
    return data.split("---");
};

console.log(separadorDeMensagens(data));