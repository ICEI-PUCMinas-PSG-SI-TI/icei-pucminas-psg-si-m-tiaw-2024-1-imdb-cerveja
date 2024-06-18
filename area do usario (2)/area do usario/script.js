document.addEventListener('DOMContentLoaded', function () {
    // Carrega os dados do perfil ao iniciar a página
    imprimeDados();

    document.getElementById('Personalizar').addEventListener('click', function (event) {
        event.preventDefault();

        var fileInput = document.getElementById('fotoPerfil');
        var foto = fileInput.files[0];

        var nome = document.getElementById('nome').value;
        var descricao = document.getElementById('descricao').value;

        if (nome && descricao) {
            var perfilAtual = JSON.parse(localStorage.getItem('perfilAtual'));

            if (perfilAtual) {
                if (foto) {
                    // Se uma nova foto foi selecionada, leia o URL da foto como um Data URL
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        perfilAtual.foto = e.target.result;
                        localStorage.setItem('perfilAtual', JSON.stringify(perfilAtual));
                        imprimeDados();
                    };
                    reader.readAsDataURL(foto);
                } else {
                    // Se nenhuma nova foto foi selecionada, mantenha a foto atual
                    localStorage.setItem('perfilAtual', JSON.stringify(perfilAtual));
                    imprimeDados();
                }
                
                perfilAtual.nome = nome;
                perfilAtual.descricao = descricao;
            } else {
                perfilAtual = {
                    foto: '',
                    nome: nome,
                    descricao: descricao
                };

                if (foto) {
                    // Se uma foto foi selecionada, leia o URL da foto como um Data URL
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        perfilAtual.foto = e.target.result;
                        localStorage.setItem('perfilAtual', JSON.stringify(perfilAtual));
                        imprimeDados();
                    };
                    reader.readAsDataURL(foto);
                } else {
                    // Se nenhuma foto foi selecionada, mantenha a foto vazia
                    localStorage.setItem('perfilAtual', JSON.stringify(perfilAtual));
                    imprimeDados();
                }
            }

            fileInput.value = '';
            document.getElementById('nome').value = '';
            document.getElementById('descricao').value = '';

            alert('Perfil alterado e salvo com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});

function imprimeDados() {
    const fotoI = document.getElementById('fotoI');
    const nomeInput = document.getElementById('nome');
    const descricaoInput = document.getElementById('descricao');
    const fotoPreview = document.getElementById('fotoPreview');

    // Obtém o perfil atualmente selecionado para edição
    var perfilAtual = JSON.parse(localStorage.getItem('perfilAtual'));

    // Se houver um perfil atual, exibe suas informações nos campos de entrada
    if (perfilAtual) {
        fotoPreview.src = perfilAtual.foto || 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp';
        nomeInput.value = perfilAtual.nome || '';
        descricaoInput.value = perfilAtual.descricao || '';
    }
}

function previewFoto() {
    var fotoInput = document.getElementById('fotoPerfil');
    var fotoPreview = document.getElementById('fotoPreview');
    var file = fotoInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        fotoPreview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        fotoPreview.src = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp"; // Defina uma imagem padrão caso nenhum arquivo seja selecionado
    }
}