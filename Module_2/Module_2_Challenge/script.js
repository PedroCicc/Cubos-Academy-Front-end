/* Pegando os elementos */

const bannerDesconto = document.querySelector(".banner-desconto");
const contagem = document.querySelector(".contagem");
const inserirCupom = document.querySelector(".inserir-cupom-rectangulo");
const cards = document.querySelector(".cards");
const generos = document.querySelector(".generos");
const listaFilmes = document.querySelector(".lista-filmes");
const sacolaConteudo = document.querySelector(".sacola-conteudo");
const sacolaLista = document.querySelector(".sacola-lista");
const sacolaH3 = document.querySelector(".sacola-h3");
const sacolaP = document.querySelector(".sacola-p");
const sacolaImg = document.querySelector(".sacola-img");

/* Funcionalidade do banner desconto */

let segundos = 300;

setTimeout(() => {
    bannerDesconto.remove();
}, segundos * 1000);

setInterval(() => {
    segundos--;
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    contagem.innerText = `00:${minutos.toString().padStart(2, "0")}:${segundosRestantes.toString().padStart(2, "0")}`;
}, 1000);

bannerDesconto.addEventListener("click", () => {
    bannerDesconto.remove();
    inserirCupom.value = "HTMLNAOELINGUAGEM";
});

/* Pegando o API dos Top Filmes */

function fetchJson(url) {
    return fetch(url).then(resposta => resposta.json());
};

function criarCard(filme) {
    const filmePoster = filme.poster_path;
    const filmeTitulo = filme.title;
    const filmePontuacao = filme.vote_average;
    const filmePreco = filme.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

    const li = document.createElement("li");
    li.classList.add("filme");
    const img = document.createElement("img");
    img.classList.add("filme-poster");
    const sombra = document.createElement("div");
    sombra.classList.add("sombra");
    const filmeEstrela = document.createElement("img");
    filmeEstrela.classList.add("filme-estrela");
    filmeEstrela.setAttribute("src", "https://i.imgur.com/KaXgOsx.png");
    const filmeRodape = document.createElement("div");
    filmeRodape.classList.add("filme-rodape");
    const filmeInfo = document.createElement("div");
    filmeInfo.classList.add("filme-info");
    const filmeNomeSpan = document.createElement("span");
    filmeNomeSpan.classList.add("filme-nome");
    const filmeClassificacao = document.createElement("span");
    filmeClassificacao.classList.add("filme-classificacao");
    const filmeEstrelaPontuacao = document.createElement("img");
    filmeEstrelaPontuacao.classList.add("filme-estrela-pontuacao");
    filmeEstrelaPontuacao.setAttribute("src", "https://i.imgur.com/Vz5OoeR.png");
    const filmePontuacaoSpan = document.createElement("span");
    filmePontuacaoSpan.classList.add("filme-pontuacao");
    const filmeBotao = document.createElement("button");
    filmeBotao.classList.add("filme-botao");
    const filmeBotaoTexto = document.createElement("span");
    filmeBotaoTexto.classList.add("filme-botao-texto");
    const filmePrecoSpan = document.createElement("span");
    filmePrecoSpan.classList.add("filme-preco");

    filmeRodape.append(filmeInfo, filmeBotao);
    filmeInfo.append(filmeNomeSpan, filmeClassificacao);
    filmeClassificacao.append(filmeEstrelaPontuacao, filmePontuacaoSpan);
    filmeBotao.append(filmeBotaoTexto, filmePrecoSpan);
    li.append(img, sombra, filmeEstrela, filmeRodape);

    img.setAttribute("src", filmePoster);
    if (filmeTitulo.length >= 15) {
        filmeNomeSpan.innerText = filmeTitulo.slice(0, 12) + '...';
    } else {
        filmeNomeSpan.innerText = filmeTitulo;
    };
    filmePontuacaoSpan.innerText = filmePontuacao;
    filmePrecoSpan.innerText = filmePreco;
    filmeBotaoTexto.innerText = "Sacola";

    filmeBotao.addEventListener("click", (event) => {
        const liFilme = event.target.closest("li");
        console.log(event.target.closest("li"));
        const filmeMiniaturaCapa = liFilme.querySelector("img").src;
        const filmeMiniaturaNome = liFilme.querySelector(".filme-nome");
        const filmeMiniaturaPreco = liFilme.querySelector(".filme-preco");
        const listaDeFilmes = document.querySelectorAll(".item-sacola-nome");
        console.log(listaDeFilmes);

        sacolaH3.remove();
        sacolaP.remove();
        sacolaImg.remove();

        let filmeId = -1;
        const spanQtdFilme = document.querySelectorAll(".item-qtd-numero");
        listaDeFilmes.forEach((filme, i) => {
                
            if (filmeMiniaturaNome.innerText === filme.innerText) {
                filmeId = i;
            };

        });

        if (filmeId !== -1) {
                
            spanQtdFilme[filmeId].innerText = parseInt(spanQtdFilme[filmeId].innerText) + 1;
            const sacolaMenos = document.createElement("img");
            sacolaMenos.classList.add("sacola-menos");
            sacolaMenos.setAttribute("src", "https://i.imgur.com/0aKFd6z.png");

        } else {

            const itemSacola = document.createElement("div");
            itemSacola.classList.add("item-sacola");
            const itemSacolaPoster = document.createElement("img");
            itemSacolaPoster.classList.add("item-sacola-poster");
            const itemSacolaInfo = document.createElement("span");
            itemSacolaInfo.classList.add("item-sacola-info");
            const itemSacolaNome = document.createElement("span");
            itemSacolaNome.classList.add("item-sacola-nome");
            const itemSacolaPreco = document.createElement("span");
            itemSacolaPreco.classList.add("item-sacola-preco");
            const itemQtd = document.createElement("span");
            itemQtd.classList.add("item-qtd");
            const sacolaMais = document.createElement("img");
            sacolaMais.classList.add("sacola-mais");
            sacolaMais.setAttribute("src", "https://i.imgur.com/GDgRGzh.png");
            const itemQtdNumero = document.createElement("span");
            itemQtdNumero.classList.add("item-qtd-numero");
            const sacolaApagar = document.createElement("img");
            sacolaApagar.classList.add("sacola-apagar");
            sacolaApagar.setAttribute("src", "https://i.imgur.com/jVWHkq2.png");
    
            sacolaLista.append(itemSacola);
            itemSacola.append(itemSacolaPoster, itemSacolaInfo, itemQtd);
            itemSacolaInfo.append(itemSacolaNome, itemSacolaPreco);
            itemQtd.append(sacolaMais, itemQtdNumero, sacolaApagar);
    
            itemSacolaPoster.setAttribute("src", filmeMiniaturaCapa);
            itemSacolaNome.innerText = filmeMiniaturaNome.innerText;
            itemSacolaPreco.innerText = filmeMiniaturaPreco.innerText;
            itemQtdNumero.innerText = "1";
        }
        
    })

    return li;
}

fetchJson("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR")
    .then(respostaJson => {
        console.log(respostaJson);
        const filmes = respostaJson.results;
        for (let i = 0; i < 5; i++) {
            const card = criarCard(filmes[i]);
            cards.append(card);
        }
    })

/* Pegando o API dos Filmes */

let generoAtual = "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR";

fetchJson(generoAtual)
    .then(respostaJson => {
        console.log(respostaJson);
        const filmes = respostaJson.results;
        for (let i = 0; i < 20; i++) {
            const card = criarCard(filmes[i]);
            listaFilmes.append(card);
        }
    })

/* Pegando o API dos Gêneros */

fetchJson("https://tmdb-proxy-workers.vhfmag.workers.dev/3/genre/movie/list?language=pt-BR")
    .then(respostaJson => {
        const generosLista = respostaJson.genres;
        for (let i = 0; i < 4; i++) {
            const generoId = generosLista[i].id;
            const generoNome = generosLista[i].name;

            const li = document.createElement("li");
            li.classList.add("generos-elemento");

            generos.append(li);

            li.innerText = generoNome;
        }
    })

/* Adicionando filmes na sacola */

