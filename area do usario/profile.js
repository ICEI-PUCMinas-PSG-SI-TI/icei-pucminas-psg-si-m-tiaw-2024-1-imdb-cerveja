document.addEventListener('DOMContentLoaded', function () {
    
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
                
                perfilAtual.nome = nome;
                perfilAtual.descricao = descricao;

                if (foto) {
                   
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        perfilAtual.foto = e.target.result;
                        localStorage.setItem('perfilAtual', JSON.stringify(perfilAtual));
                        imprimeDados();
                    };
                    reader.readAsDataURL(foto);
                } else {
                    
                    localStorage.setItem('perfilAtual', JSON.stringify(perfilAtual));
                    imprimeDados();
                }
            } else {
                perfilAtual = {
                    foto: '',
                    nome: nome,
                    descricao: descricao
                };

                if (foto) {
                   
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        perfilAtual.foto = e.target.result;
                        localStorage.setItem('perfilAtual', JSON.stringify(perfilAtual));
                        imprimeDados();
                    };
                    reader.readAsDataURL(foto);
                } else {
                   
                    localStorage.setItem('perfilAtual', JSON.stringify(perfilAtual));
                    imprimeDados();
                }
            }


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

    
    var perfilAtual = JSON.parse(localStorage.getItem('perfilAtual'));

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
        fotoPreview.src = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp"; 
    }
}