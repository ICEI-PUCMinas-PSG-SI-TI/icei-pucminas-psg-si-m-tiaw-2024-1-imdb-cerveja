async function getexternalimage(){
    await fetch(getElementById('campoimg'))
    document.querySelecto
}
function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ 
                        {nome: "guinness", nacionalidade: "irlanda", estilo: "stout", fermentacao:"ale", ibu: "15", abv:"4.1", imagem: "img/guinnes.jpeg"}, 
                        {nome: "heineken", nacionalidade: "holanda",estilo: "american lager", fermentacao:"lager", ibu: "17", abv:"4.0", imagem:"img/heineken.jpeg"}, 
                        {nome: "duvel", nacionalidade: "belgica", estilo: "strong ale", fermentacao:"ale", ibu: "35", abv:"8.0", imagem:"img/duvel.jpeg"} 
                    ]}
    }

    return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById ('campoNome').value;
    let strnacionalidade = document.getElementById ('camponacionalidade').value;
    let strestilo = document.getElementById('campoestilo').value;
    let strfermentacao = document.getElementById('campofermentacao').value;
    let stribu = document.getElementById('campoibu').value;
    let strabv = document.getElementById('campoabv').value;
    let strimg = document.getElementById('campoimg').value;
    let novoContato = {
        nome: strNome,
        nacionalidade: strnacionalidade,
        estilo: strestilo,
        fermentacao: strfermentacao,
        ibu: stribu,
        abv: strabv,
        imagem: strimg
    };
    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].nacionalidade} - ${objDados.contatos[i].estilo } -${objDados.contatos[i].fermentacao} -${objDados.contatos[i].ibu} - ${objDados.contatos[i].abv}-<img src="${objDados.contatos[i].imagem}"> </p>`
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);

