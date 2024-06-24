/*const beers = [
    {
        id: "1",
        name: "Heineken",
        description: "É uma cerveja Pale Lager com 5% de álcool por volume produzido pela empresa cervejeira holandesa Heineken International.",
        img: "img/heineken.jpeg"
    },

    {
        id: "2",
        name: "Kaiser",
        description: "Kaiser traz uma combinação única de água cristalina, lúpulos importados e maltes especiais selecionados nas melhores maltarias do mundo.",
        img: "img/kaiser2.0.jpg"
    },

    {
        id: "3",
        name: "Budweiser",
        description: "A cerveja Budweiser americana é uma cerveja do estilo Standard American Lager de sabor leve, cor clara, aroma discreto, baixo amargor e 5% de teor alcoólico.",
        img: "img/budw.jpeg"
    },

    {
        id: "4",
        name: "Stella Artois",
        description: "Cristalina, recebeu o nome de Stella, estrela em Latim. Sua receita única produz uma cerveja com aromas suaves e notas maltadas.",
        img: "img/stella.jpeg"
    },

    {
        id: "5",
        name: "Eisenbahn",
        description: "A Eisenbahn foi fundada por Juliano Mendes, que passou alguns anos explorando o universo cervejeiro pelo mundo e notou uma ausência de cervejas artesanais de qualidade no Brasil.",
        img: "img/eisenbahn.jpeg"
    },

    {
        id: "6",
        name: "Petra",
        description: "É uma cerveja de cor dourada, colarinho branco bem formado e persistente. No odor e paladar sua principal característica é o malte.",
        img: "img/petra.jpeg"
    },

    {
        id: "7",
        name: "Original",
        description: "A história da cerveja Original começou em 1906, quando um jovem recém-chegado da Alemanha, Henrique Thielen, fundou a Cervejaria Adriática, em Ponta Grossa.",
        img: "img/original.jpeg"
    },

    
    {
        id: "8",
        name: "Bohemia",
        description: "A história se inicia em 1853, na cidade de Petrópolis, quando a primeira cervejaria do Brasil foi criada. Bohemia viu a cultura do país em movimento, uma cultura de sabedoria popular, de saberes dos mais diversos.",
        img: "img/bohemia2.0.jpg"
    },

    {
        id: "9",
        name: "Itaipava",
        description: "Produzida com ingredientes 100% selecionados, água 100% cristalina e respeitando o tempo certo, a Itaipava é uma cerveja clara, leve, saborosa e refrescante.",
        img: "img/itaipava.jpg"
    },

    {
        id: "10",
        name: "Devassa",
        description: "Devassa é uma cerveja puro malte tropical, ou seja, feita apenas com água, malte, lúpulo e um toque tropical. Mas o que significa “tropical”? É o segredo para produzir um puro malte adaptado ao clima e paladar brasileiro.",
        img: "img/devassa.jpeg"
    },

    {
        id: "11",
        name: "Skol",
        description: "Skol é uma marca de cerveja de propriedade da empresa dinamarquesa Carlsberg, com licença para ser fabricada no Brasil.",
        img: "img/skol.jpg"
    },

    {
        id: "12",
        name: "Crystal",
        description: "Crystal é uma cerveja leve, cristalina, preparada com ingredientes cuidadosamente selecionados e matérias-primas especiais. Além de todos esses atributos, ela também é pioneira: foi a primeira cerveja do Brasil a receber o selo de proteção no bocal das suas latas.",
        img: "img/crystal.jpg"
    },

    {
        id: "13",
        name: "Nova Schin",
        description: "Considerada uma das marcas mais tradicionais e famosas do Brasil, a Schincariol faz parte de uma história não apenas na vida dos Brasileiros, mas de um segmento que cresceu e se popularizou graças a marcas como a Schin.",
        img: "img/nova schin.jpg"
    },

    {
        id: "14",
        name: "Brahma",
        description: "A cerveja Brama é a segunda marca de cerveja mais consumida no Brasil, e a nona cerveja mais consumida em todo o mundo. No Brasil, é considerada a 3ª marca mais valiosa do país, avaliada em 4,3 bilhões de dólares estadunidenses.",
        img: "img/brahma.jpeg"
    },

    {
        id: "15",
        name: "Bavaria",
        description: "A Cerveja Pilsen Bavaria é de origem da região da Bavária, na Alemanha, feita com uma combinação de maltes selecionados e 100% de lúpulos aromáticos de Hallertau.",
        img: "img/bavaria.jpg"
    },

    {
        id: "16",
        name: "Bud Light",
        description: "Tudo começou no início dos anos de 1980 quando a tradicional cervejaria Anheuser-Busch, fundada em 1860, estudava aumentar a linha de produtos da marca Budweiser. Nesta época um segmento despontava como uma boa aposta: cervejas light, mais fracas e com menos calorias. ",
        img: "img/budlight.jpg"
    },

    {
        id: "17",
        name: "Império",
        description: "Com teor alcoólico de 4,8%, é uma cerveja leve e refrescante, ideal para acompanhar momentos de descontração e diversão. Apresentada em latas de 350ml, a Cerveja Puro Malte Pilsen Império é uma escolha perfeita para quem busca uma experiência única de degustação.",
        img: "img/imperio.jpeg"
    },

    {
        id: "18",
        name: "Tsingtão",
        description: "A Tsingtao é a maior cervejaria da China, com exportações para todos os continentes. Além disso, os antigos prédios nos quais viviam e trabalhavam os funcionários coloniais alemães também se tornaram muito apreciados, e são imitados com a construção de casas em estilo alemão.  ",
        img: "img/tsingtao.jpeg"
    },

    {
        id: "19",
        name: "Spaten",
        description: "SPATEN: Autoridade em cerveja. Uma das primeiras puro malte do mundo e uma das cervejarias oficiais da Oktoberfest de Munique, na Alemanha. Feita com um rigoroso processo, seguindo a receita de Munique, onde foi criada em 1397. Uma cerveja puro malte com um sabor marcante e amargor presente. ",
        img: "img/spaten.jpeg"
    },

    {
        id: "20",
        name: "Corona",
        description: "Esta cerveja do tipo Pilsen foi produzida pela primeira vez em 1925 pela Cervecería Modelo, localizada na Cidade do México. Possui sabor leve de baixa graduação alcoólica.",
        img: "img/corona.png"
    },


];


function displayBeers(cerveja) {
    const container = document.getElementById('beerCardContainer');
    container.innerHTML = '';

    if (cerveja.length > 0) {
        cerveja.forEach(cerveja => {
            const card = ` <div id="cardcor" class="card " style="width: 18rem;">
               
                    <img src="${cerveja.img}" class="card-img-top" alt="${cerveja.name}">
                    <div class="card-body">
                        <h5 class="card-title">${cerveja.name}</h5>
                        <p class="card-text">${cerveja.description}</p>
                         
                    </div>
                </div>
              
            `;
            container.innerHTML += card;
        });
    } else {
        container.innerHTML = '<p id="naotem">Nenhuma cerveja encontrada.</p>';
    }
}*/


function saveBeersToLocalStorage(beers) {
    localStorage.setItem('beers', JSON.stringify(beers));
}


function loadBeersFromLocalStorage() {
    const beersFromStorage = localStorage.getItem('beers');
    return beersFromStorage ? JSON.parse(beersFromStorage) : beers;
}


document.addEventListener('DOMContentLoaded', () => {
    const storedBeers = loadBeersFromLocalStorage();
    displayBeers(storedBeers);
});


document.getElementById('txtBusca').addEventListener('input', function() {
    const query = document.getElementById('txtBusca').value.toLowerCase();
    const storedBeers = loadBeersFromLocalStorage();
    const filteredBeers = storedBeers.filter(b => b.name.toLowerCase().includes(query));
    displayBeers(filteredBeers);
});


saveBeersToLocalStorage(beers);