const elementoCidade = document.querySelector(".cidade");
const elementoUltimo = document.querySelector(".ultimo");
const elementoHistorico = document.querySelector(".historico");

const estadoSigla = {
    "Acre": "AC",
    "Alagoas": "AL",
    "Amapá": "AP",
    "Amazonas": "AM",
    "Bahia": "BA",
    "Ceará": "CE",
    "Distrito Federal": "DF",
    "Espírito Santo": "ES",
    "Goiás": "GO",
    "Maranhão": "MA",
    "Mato Grosso": "MT",
    "Mato Grosso do Sul": "MS",
    "Minas Gerais": "MG",
    "Pará": "PA",
    "Paraíba": "PB",
    "Paraná": "PR",
    "Pernambuco": "PE",
    "Piauí": "PI",
    "Rio de Janeiro": "RJ",
    "Rio Grande do Norte": "RN",
    "Rio Grande do Sul": "RS",
    "Rondônia": "RO",
    "Roraima": "RR",
    "Santa Catarina": "SC",
    "São Paulo": "SP",
    "Sergipe": "SE",
    "Tocantins": "TO"
};

function fetchJson(url) {
    return fetch(url).then(resposta => resposta.json())
};

fetchJson("https://extreme-ip-lookup.com/json/")
    .then(respostaJson => {
        const cidade = respostaJson.city;
        const estado = respostaJson.region;
    
    elementoCidade.innerText = `${cidade}, ${estado}`;

    const sigla = estadoSigla[estado];

    return fetchJson(`https://brasil.io/api/dataset/covid19/caso/data/?format=json&city=${cidade}&state=${sigla}`)
    })
    .then(respostaJson => {
        
        elementoUltimo.innerText = respostaJson.results[0].confirmed;

        for (const resultado of respostaJson.results) {
            const li = document.createElement("li");

            const data = resultado.date
                .split("-")
                .reverse()
                .join("/");

            const elementoData = document.createElement("div");
            elementoData.classList.add("data");
            elementoData.innerText = data;

            const elementoCasos = document.createElement("div");
            elementoCasos.classList.add("casos");
            elementoCasos.innerText = resultado.confirmed;

            li.append(elementoData);
            li.append(elementoCasos);

            elementoHistorico.append(li);
        };
    });