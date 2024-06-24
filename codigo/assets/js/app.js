function addToFavorites(id) {
    let objDados = leDados();
    let cerveja = objDados.cerveja.find(c => c.id === id);
    if (cerveja) {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        if (!favoritos.some(fav => fav.id === id)) {
            favoritos.push(cerveja);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            alert(`${cerveja.name} foi adicionada aos favoritos!`);
        } else {
            alert(`${cerveja.name} já está nos favoritos.`);
        }
    }
}

function leDados() {
    let strDados = localStorage.getItem('beers');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = { cerveja: [ {id:1,
            votos:0, 
            name: "guinness",
            description:"uma cerveja irlandesa, que popularizou o estilo stout no mundo, com adiçao de nitrogenio no lugar de CO2, deixa a cerveja cremosa e densa.",
                 nacionalidade: "irlanda", estilo: "stout", fermentacao:"ale", ibu: "15", abv:"4.1", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC9BYahoS1jJTO8h9IJsoI5qis_CdDHm-9g&s",estrelas:0}, 
            {id:2,
                votos:0, 
                name: "heineken", 
                description:"super popular no mundo, pela sua refrescancia e leveza, com um amargor equilibrado com sua cor clara, é a preferida de muitos em paises quentes e humidos",
                nacionalidade: "holanda",estilo: "american lager", fermentacao:"lager", ibu: "17", abv:"4.0", imagem:"../images/heineken.jpeg",estrelas:0}, 
            {id:3,
                votos:0,
                name: "duvel", 
                description:"uma cerveja belga, recebeu seu nome em flaminco que por sua alta carbonataçao e alto teor de alcool, as pessoas que bebiam diziam 'que diabo de ceerveja', dando o nome de duvel",
                nacionalidade: "belgica", estilo: "strong ale", fermentacao:"ale", ibu: "35", abv:"8.0", imagem:"https://taafrl.vtexassets.com/arquivos/ids/158764/duvel.jpg?v=637668040734300000", estrelas:0},
            {
                id: 4,
                name: "Kaiser",
                votos:0,
                description: "KaiserÂ traz uma combinaÃ§Ã£o Ãºnica de Ã¡gua cristalina, lÃºpulos importados e maltes especiais selecionados nas melhores maltarias do mundo.",
                nacionalidade: "alemanha", estilo: "american lager", fermentacao:"lager", ibu: "15", abv:"4.5", imagem: "../images/kaiser2.0.jpg",estrelas:0
            },
        
            {
                id: 5,
                votos:0,
                name: "Budweiser",
                description: "A cerveja Budweiser americanaÂ Ã© uma cerveja do estilo Standard American Lager de sabor leve, cor clara, aroma discreto, baixo amargor e 5% de teor alcoÃ³lico.",
                nacionalidade: "eua", estilo: "american premium lager", fermentacao:"lager", ibu: "12", abv:"5.0", imagem: "../images/budw.jpeg",estrelas:0
            },
        
            {
                id: 6,
                votos:0,
                name: "Stella Artois",
                description: "Cristalina, recebeu o nome deÂ Stella, estrela em Latim. Sua receita Ãºnica produz umaÂ cervejaÂ com aromas suaves e notas maltadas.",
                nacionalidade: "belgica", estilo: "american lager", fermentacao:"lager", ibu: "16", abv:"5.5", imagem: "../images/stella.jpeg",estrelas:0
            },
        
            {
                id: 7,
                votos:0,
                name: "Eisenbahn",
                description: "A EisenbahnÂ foi fundada por Juliano Mendes, que passou alguns anos explorando o universo cervejeiro pelo mundo e notou uma ausÃªncia de cervejas artesanais de qualidade no Brasil.",
                nacionalidade: "brasil", estilo: "pilsen", fermentacao:"lager", ibu: "11", abv:"4.8", imagem: "../images/eisenbahn.jpeg",estrelas:0
            },
        
            {
                id:8,
                name: "Petra",
                votos:0,                           
                 description: "Ã‰ umaÂ cervejaÂ de cor dourada, colarinho branco bem formado e persistente. No odor e paladar sua principal caracterÃ­stica Ã© o malte.",
                 nacionalidade: "noruega", estilo: "stout", fermentacao:"ale", ibu: "11", abv:"6.1", imagem: "../images/petra.jpeg",estrelas:0
            },
        
            {
                id: 9,
                name: "Original",
                votos:0,
                description: "A histÃ³ria daÂ cerveja OriginalÂ comeÃ§ou em 1906, quando um jovem recÃ©m-chegado da Alemanha, Henrique Thielen, fundou a Cervejaria AdriÃ¡tica, em Ponta Grossa.",
                nacionalidade: "alemanha", estilo: "pilsen", fermentacao:"lager", ibu: "12", abv:"4.", imagem: "../images/original.jpeg",estrelas:0
            },
        
            
            {
                id: 10,
                name: "Bohemia" ,
                votos:0,
                description: "A histÃ³ria se inicia em 1853, na cidade de PetrÃ³polis, quando a primeira cervejaria do Brasil foi criada.Â BohemiaÂ viu a cultura do paÃ­s em movimento, uma cultura de sabedoria popular, de saberes dos mais diversos.",
                nacionalidade: "brasil", estilo: "american lager", fermentacao:"lager", ibu: "27", abv:"5.3", imagem: "../images/bohemia2.0.jpg",estrelas:0
            },
        
            {
                id: 11,
                name: "Itaipava ",
                votos:0,
                description: "Produzida com ingredientes 100% selecionados, Ã¡gua 100% cristalina e respeitando o tempo certo, a ItaipavaÂ Ã© uma cerveja clara, leve, saborosa e refrescante.",
                nacionalidade: "brasil", estilo: "american lager", fermentacao:"lager", ibu: "11", abv:"4.0", imagem: "../images/itaipava.jpg",estrelas:0
            },
        
            {
                id: 12,
                name: "Devassa" ,
                votos:0,
                description: "DevassaÂ Ã© uma cerveja puro malte tropical, ou seja, feita apenas com Ã¡gua, malte, lÃºpulo e um toque tropical. Mas o que significa â€œtropicalâ€? Ã‰ o segredo para produzir um puro malte adaptado ao clima e paladar brasileiro.",
                nacionalidade: "brasil", estilo: "american lager", fermentacao:"lager", ibu: "10", abv:"3.9", imagem: "../images/devassa.jpeg",estrelas:0
            },
        
            {
                id: 13,
                name: "Skol",
                votos:0,                           
                description: "SkolÂ Ã© uma marca deÂ cervejaÂ de propriedade da empresa dinamarquesa Carlsberg, com licenÃ§a para ser fabricada no Brasil.",
                nacionalidade: "dinamarca", estilo: "lager", fermentacao:"lager", ibu: "11", abv:"4.0", imagem: "../images/skol.jpg",estrelas:0
            },
        
            {
                id: 14,
                name: "Crystal" ,
                votos:0,
                description: "CrystalÂ Ã© uma cerveja leve, cristalina, preparada com ingredientes cuidadosamente selecionados e matÃ©rias-primas especiais. AlÃ©m de todos esses atributos, ela tambÃ©m Ã© pioneira: foi a primeira cerveja do Brasil a receber o selo de proteÃ§Ã£o no bocal das suas latas.",
                nacionalidade: "irlanda", estilo: "stout", fermentacao:"ale", ibu: "15", abv:"4.1", imagem: "../images/crystal.jpg",estrelas:0
            },
        
            {
                id: 15,
                name: "Nova Schin",
                votos:0,
                description: "Considerada uma das marcas mais tradicionais e famosas do Brasil, a Schincariol faz parte de uma histÃ³ria nÃ£o apenas na vida dos Brasileiros, mas de um segmento que cresceu e se popularizou graÃ§as a marcas como a Schin.",
                nacionalidade: "irlanda", estilo: "stout", fermentacao:"ale", ibu: "15", abv:"4.1", imagem: "../images/nova schin.jpg",estrelas:0
            },
        
        
            {
                id: 16,
                name: "Bavaria" ,
                votos:0,
                description: "A Cerveja Pilsen BavariaÂ Ã© de origem da regiÃ£o da BavÃ¡ria, na Alemanha, feita com uma combinaÃ§Ã£o de maltes selecionados e 100% de lÃºpulos aromÃ¡ticos de Hallertau.",
                nacionalidade: "irlanda", estilo: "stout", fermentacao:"ale", ibu: "15", abv:"4.1", imagem: "../images/bavaria.jpg",estrelas:0
            },
        
        
            {
                id: 17,
                name: "ImpÃ©rio ",
                votos:0,
                description: "Com teor alcoÃ³lico de 4,8%, Ã© uma cerveja leve e refrescante, ideal para acompanhar momentos de descontraÃ§Ã£o e diversÃ£o. Apresentada em latas de 350ml, a Cerveja Puro Malte Pilsen ImpÃ©rio Ã© uma escolha perfeita para quem busca uma experiÃªncia Ãºnica de degustaÃ§Ã£o.",
                nacionalidade: "irlanda", estilo: "stout", fermentacao:"ale", ibu: "15", abv:"4.1", imagem: "../images/imperio.jpeg",estrelas:0
            },
        
        
            {
                id: 18,
                name: "Spaten",  
                votos:0,
                 description: "SPATEN: Autoridade em cerveja.Â Uma das primeiras puro malte do mundo e uma das cervejarias oficiais da Oktoberfest de Munique, na Alemanha. Feita com um rigoroso processo, seguindo a receita de Munique, onde foi criada em 1397. Uma cerveja puro malte com um sabor marcante e amargor presente. ",
                 nacionalidade: "alemanha", estilo: "pilsen", fermentacao:"lager", ibu: "16", abv:"5.2", imagem: "../images/spaten.jpeg",estrelas:0
            },
        
            {
                id: 19,
                name: "Corona", 
                votos:0,                           
                 description: "Esta cerveja do tipo Pilsen foi produzida pela primeira vez em 1925 pela CervecerÃ­a Modelo, localizada na Cidade do MÃ©xico.Â Possui sabor leve de baixa graduaÃ§Ã£o alcoÃ³lica.",
                 nacionalidade: "italia", estilo: "pilsen", fermentacao:"lager", ibu: "18", abv:"4.6", imagem: "../images/corona.png",estrelas:0
            }, ] };
    }

    return objDados;
}

function addToFavorites(id) {
    let objDados = leDados();
    let cerveja = objDados.cerveja.find(c => c.id === id);
    if (cerveja) {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        if (!favoritos.some(fav => fav.id === id)) {
            favoritos.push(cerveja);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));
            alert(`${cerveja.name} foi adicionada aos favoritos!`);
        } else {
            alert(`${cerveja.name} já está nos favoritos.`);
        }
    }
}

function salvaDados (dados) {
    localStorage.setItem ('beers', JSON.stringify (dados));
}

document.getElementById('txtBusca').addEventListener('input', function() {
    const query = document.getElementById('txtBusca').value.toLowerCase();
    const storedBeers = loadBeersFromLocalStorage();
    const filteredBeers = storedBeers.filter(b => b.name.toLowerCase().includes(query));
    displayBeers(filteredBeers);
});
