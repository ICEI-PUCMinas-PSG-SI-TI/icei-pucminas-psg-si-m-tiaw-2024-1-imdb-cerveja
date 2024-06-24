document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const confirmacaoEmail = document.getElementById('confirmacaoEmail').value;
    const senha = document.getElementById('senha').value;
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;
    const telefone = document.getElementById('telefone').value;

    if (email !== confirmacaoEmail) {
        alert('Os emails não correspondem.');
        return;
    }

    if (senha !== confirmacaoSenha) {
        alert('As senhas não correspondem.');
        return;
    }

    if (!isValidAge(data)) {
        alert('Data de nascimento inválida');
        return;
    }

    const cadastro = {
        nome,
        data,
        cpf,
        email,
        senha,
        telefone
    };

    let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    cadastros.push(cadastro);
    localStorage.setItem('cadastros', JSON.stringify(cadastros));

    document.getElementById('cadastroForm').reset();

    alert('Cadastro feito com sucesso');
    window.location.href = 'login.html';
});

function isValidAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18;
}
