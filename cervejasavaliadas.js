
function inicializarVotos() {
    for (let i = 1; i <= 8; i++) {
        let contagemLikes = localStorage.getItem(`contagem-like-${i}`) || 0;
        let contagemDeslikes = localStorage.getItem(`contagem-deslike-${i}`) || 0;

        document.getElementById(`like-count-${i}`).textContent = contagemLikes;
        document.getElementById(`deslike-count-${i}`).textContent = contagemDeslikes;
    }
    if (algumCartaoCurtido()) {
        desativarBotoesLike();
    }
    if (algumCartaoDescurtido()) {
        desativarBotoesDeslike();
    }
    reordenarCartoes();
}


function algumCartaoCurtido() {
    let cartoesCurtidos = JSON.parse(localStorage.getItem('cartoes-curtidos')) || [];
    return cartoesCurtidos.length > 0;
}


function algumCartaoDescurtido() {
    let cartoesDescurtidos = JSON.parse(localStorage.getItem('cartoes-descurtidos')) || [];
    return cartoesDescurtidos.length > 0;
}


function lidarComLike(evento) {
    if (algumCartaoCurtido()) {
        alert("Você já curtiu um cartão.");
        desativarBotoesLike();
        return;
    }

    let botao = evento.currentTarget;
    let numeroCartao = botao.getAttribute('data-number');
    let contagemLikes = parseInt(localStorage.getItem(`contagem-like-${numeroCartao}`)) || 0;
    contagemLikes++;

    localStorage.setItem(`contagem-like-${numeroCartao}`, contagemLikes);
    document.getElementById(`like-count-${numeroCartao}`).textContent = contagemLikes;

    let cartoesCurtidos = JSON.parse(localStorage.getItem('cartoes-curtidos')) || [];
    cartoesCurtidos.push(numeroCartao);
    localStorage.setItem('cartoes-curtidos', JSON.stringify(cartoesCurtidos));

    desativarBotoesLike();
    reordenarCartoes();
}


function lidarComDeslike(evento) {
    if (algumCartaoDescurtido()) {
        alert("Você já descurtiu um cartão.");
        desativarBotoesDeslike();
        return;
    }

    let botao = evento.currentTarget;
    let numeroCartao = botao.getAttribute('data-number');
    let contagemDeslikes = parseInt(localStorage.getItem(`contagem-deslike-${numeroCartao}`)) || 0;
    contagemDeslikes++;

    localStorage.setItem(`contagem-deslike-${numeroCartao}`, contagemDeslikes);
    document.getElementById(`deslike-count-${numeroCartao}`).textContent = contagemDeslikes;

    let cartoesDescurtidos = JSON.parse(localStorage.getItem('cartoes-descurtidos')) || [];
    cartoesDescurtidos.push(numeroCartao);
    localStorage.setItem('cartoes-descurtidos', JSON.stringify(cartoesDescurtidos));

    desativarBotoesDeslike();
    reordenarCartoes();
}


function desativarBotoesLike() {
    document.querySelectorAll('.like').forEach(botao => {
        botao.disabled = true;
    });
}


function desativarBotoesDeslike() {
    document.querySelectorAll('.deslike').forEach(botao => {
        botao.disabled = true;
    });
}


function reordenarCartoes() {
    let container = document.querySelector('.cartoes-container');
    let cartoes = Array.from(container.querySelectorAll('.card-wrapper'));


    cartoes.sort((a, b) => {
        let likesA = parseInt(a.querySelector('.like-count').textContent) || 0;
        let deslikesA = parseInt(a.querySelector('.deslike-count').textContent) || 0;
        let likesB = parseInt(b.querySelector('.like-count').textContent) || 0;
        let deslikesB = parseInt(b.querySelector('.deslike-count').textContent) || 0;

        if (likesA !== likesB) {
            return likesB - likesA;
        } else {
            return deslikesA - deslikesB;
        }
    });


    cartoes.forEach((cartao, index) => {
        let newNumber = index + 1;
        cartao.setAttribute('data-number', newNumber);
        cartao.querySelector('.like').setAttribute('data-number', newNumber);
        cartao.querySelector('.deslike').setAttribute('data-number', newNumber);
        cartao.querySelector('.like-count').id = `like-count-${newNumber}`;
        cartao.querySelector('.deslike-count').id = `deslike-count-${newNumber}`;
        cartao.querySelector('.card').setAttribute('data-number', newNumber);
    });


    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let fragment = document.createDocumentFragment();
    cartoes.forEach(cartao => {
        fragment.appendChild(cartao);
    });


    container.appendChild(fragment);
}




document.querySelectorAll('.like').forEach(botao => {
    botao.addEventListener('click', lidarComLike);
});

document.querySelectorAll('.deslike').forEach(botao => {
    botao.addEventListener('click', lidarComDeslike);
});


document.addEventListener('DOMContentLoaded', inicializarVotos);
