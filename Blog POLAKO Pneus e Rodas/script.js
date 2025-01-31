let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(index) {
    items.forEach(item => item.classList.remove('active')); // Remove a classe active de todos os itens
    if (index >= items.length) {
        currentIndex = 0; // Se for o último, vai para o primeiro
    } else if (index < 0) {
        currentIndex = items.length - 1; // Se for o primeiro, vai para o último
    } else {
        currentIndex = index; // Atualiza o índice
    }
    items[currentIndex].classList.add('active'); // Adiciona a classe active no item atual
}

function moveCarousel(direction) {
    showItem(currentIndex + direction); // Muda o item atual
}

// Inicializa o carrossel
showItem(currentIndex);

