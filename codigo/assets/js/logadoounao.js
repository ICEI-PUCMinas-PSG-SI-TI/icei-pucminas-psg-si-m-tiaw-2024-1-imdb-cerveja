const minhaConta = document.querySelector('.conta');
if (minhaConta) {
    minhaConta.addEventListener('click', function (event) {
        event.preventDefault();
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            window.location.href = '../../pages/profile.html';
        } else {
            window.location.href = '../../pages/login.html';
        }
    });
};

const meusFavoritos = document.querySelector('.favorito');
if (meusFavoritos) {
    meusFavoritos.addEventListener('click', function (event) {
        event.preventDefault();
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            window.location.href = '../../pages/areadefavoritos.html';
        } else {
            window.location.href = '../../pages/login.html';
        }
    });
};

const top8Cervejas = document.querySelector('.top8c');
if (top8Cervejas) {
    top8Cervejas.addEventListener('click', function (event) {
        event.preventDefault();
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            window.location.href = '../../pages/cervejasavaliadas.html';
        } else {
            window.location.href = '../../pages/login.html';
        }
    });
};
