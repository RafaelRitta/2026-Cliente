// Controle de Acessibilidade (Fonte, Modo Escuro, Modo Daltônico)
let currentFontSize = 16;

function changeFontSize(delta) {
    currentFontSize = Math.min(Math.max(12, currentFontSize + delta), 22);
    document.documentElement.style.setProperty('--font-scale', `${currentFontSize}px`);
}

function toggleDarkMode() {
    document.body.classList.remove('daltonico-mode');
    document.body.classList.toggle('dark-mode');
}

function toggleDaltonicoMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.toggle('daltonico-mode');
}

// Favoritar veículo
function toggleFavorito(button) {
    button.classList.toggle('active');
    button.innerHTML = button.classList.contains('active') ? '&#9829;' : '&#9825;';
}

// Filtro de busca na listagem
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.vehicle-card');
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = title.includes(term) ? 'flex' : 'none';
            });
        });
    }
});