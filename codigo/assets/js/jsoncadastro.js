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

    addCadastroToList(cadastro);

    document.getElementById('cadastroForm').reset();
});

function loadCadastros() {
    let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    cadastros.forEach(cadastro => addCadastroToList(cadastro));
}

function addCadastroToList(cadastro) {
    const li = document.createElement('li');
    li.style.color = "white"
    li.textContent = `${cadastro.nome} - ${cadastro.data} - ${cadastro.cpf} - ${cadastro.email} - ${cadastro.telefone}`;
    document.getElementById('cadastrosList').appendChild(li);
}

window.onload = loadCadastros;