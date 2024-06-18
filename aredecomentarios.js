const comments = []; 
if (localStorage.getItem('comments')) {
  comments.push(...JSON.parse(localStorage.getItem('comments')));
}


function addComment() {
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const newComment = { name, comment };
  comments.push(newComment);
  updateComments();
}


function updateComments() {
  const commentsContainer = document.getElementById('comments-container');
  commentsContainer.innerHTML = '';

  comments.forEach((comment, index) => {
    const commentItem = document.createElement('div');
    commentItem.innerHTML = `
      <p><strong>${comment.name}:</strong> ${comment.comment}</p>
      <button class="edit-button" data-index="${index}">Editar</button>
      <button class="delete-button" data-index="${index}">Excluir</button>
    `;
    commentsContainer.appendChild(commentItem);
  });

  
  const editButtons = document.querySelectorAll('.edit-button');
  editButtons.forEach(button => {
    button.addEventListener('click', editComment);
  });

  
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach(button => {
    button.addEventListener('click', deleteComment);
  });

  
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
