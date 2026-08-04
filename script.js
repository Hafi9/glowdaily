const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');
const noResult = document.getElementById('noResult');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let currentSearch = '';

function filterProducts() {
    let visibleCount = 0;

    productCards.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        const productCategory = card.getAttribute('data-category');
        
        const matchesCategory = (currentFilter === 'all' || productCategory === currentFilter);
        const matchesSearch = productName.includes(currentSearch);

        if (matchesCategory && matchesSearch) {
            card.style.display = "flex";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (visibleCount === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
}

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    filterProducts();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        filterProducts();
    });
});
