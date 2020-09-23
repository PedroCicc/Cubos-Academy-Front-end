const elementosDia = document.querySelectorAll("li");
const elementoCidade = document.querySelector(".cidade");

fetch("https://extreme-ip-lookup.com/json/")
    .then(resposta => resposta.json())
    .then(respostaJson => {
        const cidade = respostaJson.city;
        const estado = respostaJson.region;

        elementoCidade.innerText = `${cidade}, ${estado}`;
    
        return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=${respostaJson.lat}&lon=${respostaJson.lon}&units=metric&lang=pt_BR&appid=47b16d41765388e1d2e251b373b570c0");
    
    
    })
    .then(resposta => resposta.Json())
    .then(respostaJson => {
        for (let i = 0; i < elementosDia.length; i++) {
            const elementoDia = elementosDia[i];
            const previsaoDoDia = respostaJson.daily[i];

            elementoDia.querySelector(".descricao").innerText = previsaoDoDia.weather[0].description;
            elementoDia.querySelector(".minimo").innerText = previsaoDoDia.weather.temp.min;
            elementoDia.querySelector(".maximo").innerText = previsaoDoDia.weather.temp.max;
            
            let data;
            if (i === 0) {
                data = "Hoje";
            } else if (i === 1) {
                data = "Amanhã";
            } else {
                data = `Daqui a ${x} dias`;
            }
            elementoDia.querySelector("h2").innerText = data;

            elementoDia.querySelector("img").setAttribute("src", "http://openweathermap.org/img/wn/____@2x.png");
            
        }
    });
