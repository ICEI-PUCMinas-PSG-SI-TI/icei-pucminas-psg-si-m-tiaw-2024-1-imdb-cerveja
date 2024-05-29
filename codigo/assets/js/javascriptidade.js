window.onload = function() {
    const modal = document.querySelector('.modal');
    const aviso = document.querySelector('.aviso');
    const btnPrincipal = document.getElementById('18anos-confirm');
  
    if (!localStorage.getItem("maioridade")) {
      modal.classList.remove('hide');
      aviso.classList.remove('normal');
    }
  
    const acceptIdade = () => {
      modal.classList.add('hide');
      aviso.classList.add('normal');
      localStorage.setItem("maioridade", "accept");
    };
  
    btnPrincipal.addEventListener('click', acceptIdade);
  };