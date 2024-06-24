const comments = []; 
if (localStorage.getItem('comments')) {
  comments.push(...JSON.parse(localStorage.getItem('comments')));
}


function addComment() {
  let params = new URLSearchParams(location.search);
  let valorid = params.get('id');
  const id = valorid;
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const newComment = { id, name, comment };
  
  comments.push(newComment);
  
  updateComments();
  
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
}


function updateComments() {
  let params = new URLSearchParams(location.search);
  let valorid = params.get('id');
  
  const commentsContainer = document.getElementById('comments-container');
  commentsContainer.innerHTML = '';
  
  comments.forEach(comment => {
      if (valorid == comment.id) {
          const commentItem = document.createElement('div');
          commentItem.classList.add('comentariodiv');
          commentItem.innerHTML = `
              <p><strong>${comment.name}:</strong> ${comment.comment}</p>
              <button class="edit-button" data-index="${comments.indexOf(comment)}">Editar</button>
              <button class="delete-button" data-index="${comments.indexOf(comment)}">Excluir</button>
          `;
          commentsContainer.appendChild(commentItem);
      }
  });

  // Atualiza localStorage
  localStorage.setItem('comments', JSON.stringify(comments));
}



function editComment(event) {
  const index = parseInt(event.target.dataset.index);
  const comment = comments[index];
  const name = prompt('Nome:', comment.name);
  const newComment = prompt('Comentário:', comment.comment);
  if (name !== null && newComment !== null) {
    comments[index] = { name, comment: newComment };
    updateComments();
  }
}


function deleteComment(event) {
  const index = parseInt(event.target.dataset.index);
  comments.splice(index, 1);
  updateComments();
}


updateComments();

 