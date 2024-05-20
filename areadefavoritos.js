const searchInput = document.getElementById('pesquisa-input');
const favoritesList = document.querySelector('.lista-favoritos');

// Sample favorite item data (replace with your actual data)
const favoriteItems = [
    {
        id: 1,
        title: "Skol",
        image: "https://placehold.co/250x150",
        genre: "Alcoolico",
        year: 1964,
        rating: 7.5,
        description: "Skol é uma marca de cerveja de propriedade da empresa dinamarquesa Carlsberg, com licença para ser fabricada no Brasil. Seu nome vem da palavra sueca skål, que literalmente significa tigela ou copo, mas é utilizada para brindes nos idiomas nórdicos, similar à expressão saúde no português."
    },
    {
        id: 2,
        title: "Heineken",
        image: "https://placehold.co/250x150",
        genre: "Alcoolico",
        year: 1863,
        rating: 8.9,
        description: "Heineken Lager Beer, ou simplesmente Heineken, é uma cerveja Pale Lager com 5% de álcool por volume produzido pela empresa cervejeira holandesa Heineken International. Heineken é bem conhecida por sua característica garrafa verde e estrela vermelha."
    },
    {
        id: 3,
        title: "Black Princess",
        image: "https://placehold.co/250x150",
        genre: "Alcoolico",
        year: 1882,
        rating: 8.6,
        description: "Foi em 1882, no Rio de Janeiro, que nossa história começou. Em uma cervejaria de Teresópolis, na serra fluminense, da união da água pura das montanhas com o malte e o lúpulo surgiu uma cerveja especial, diferenciada e que chegou para fazer história. Assim nasceu a Cerveja Black Princess."
    }
];

// Function to create and display favorite item elements
function createFavoriteItem(item) {
    const favoriteItemElement = document.createElement('div');
    favoriteItemElement.classList.add('favorito-item');
    favoriteItemElement.setAttribute('data-id', item.id); // Add data-id attribute

    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    favoriteItemElement.appendChild(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = item.title;
    favoriteItemElement.appendChild(titleElement);

    const infoElement = document.createElement('div');
    infoElement.classList.add('info');

    const genreElement = document.createElement('span');
    genreElement.textContent = item.genre;
    infoElement.appendChild(genreElement);

    const yearElement = document.createElement('span');
    yearElement.textContent = `(${item.year})`;
    infoElement.appendChild(yearElement);

    favoriteItemElement.appendChild(infoElement);

    const ratingElement = document.createElement('p');
    ratingElement.textContent = `Avaliação: ${item.rating}`;
    favoriteItemElement.appendChild(ratingElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('descricao');
    descriptionElement.textContent = item.description;
    favoriteItemElement.appendChild(descriptionElement);

    favoritesList.appendChild(favoriteItemElement);
}

// Display all favorite items on page load
favoriteItems.forEach(item => createFavoriteItem(item));

// Filter favorite items based on search input
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    favoritesList.innerHTML = ''; // Clear existing favorites

    favoriteItems.filter(item => {
        return item.title.toLowerCase().includes(searchTerm) ||
               item.genre.toLowerCase().includes(searchTerm) ||
               item.description.toLowerCase().includes(searchTerm);
    }).forEach(item => createFavoriteItem(item));
});

// Add event listener to favorite item elements for details
favoritesList.addEventListener('click', (event) => {
    const clickedElement = event.target.closest('.favorito-item');
    if (!clickedElement) return;

    const itemId = clickedElement.getAttribute('data-id');
    const selectedItem = favoriteItems.find(item => item.id === parseInt(itemId));

    if (selectedItem) {
        // Show a modal or panel with the selected item's details
        alert(`Detalhes do item ${selectedItem.title}:\n\n` +
              `Descrição: ${selectedItem.description}\n` +
              `Gênero: ${selectedItem.genre}\n` +
              `Ano: ${selectedItem.year}\n` +
              `Avaliação: ${selectedItem.rating}`);
    }
});
