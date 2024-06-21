document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const simBtn = document.getElementById('simBtn');
    const naoBtn = document.getElementById('naoBtn');

    if (localStorage.getItem('acima18') !== 'true') {
        overlay.style.display = 'flex';
    } else {
        overlay.style.display = 'none';
    }

    simBtn.addEventListener('click', function() {
        localStorage.setItem('acima18', 'true');
        overlay.style.display = 'none';
    });

    naoBtn.addEventListener('click', function() {
        window.location.href = 'https://www.google.com.br/?hl=pt-BR';
    });
});
