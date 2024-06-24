document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    
    let usuarioValido = cadastros.find(cadastro => cadastro.email === email && cadastro.senha === senha);
    
    if (usuarioValido) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));
        window.location.href = 'profile.html';
    } else {
        alert('E-mail ou senha incorretos.');
    }
});
