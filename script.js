const container = document.getElementById("cryptoContainer");
const themeToggle = document.getElementById("themeToggle");
const searchInput = document.getElementById("searchInput");

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme'); 
});


searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(value) ? 'block' : 'none';
    });
});

async function fetchData() {
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
        const data = await res.json();
        displayData(data);
    } catch (err) {
        container.innerHTML = '<p>Error loading data</p>';
    }
    function displayData(coins) {
    container.innerHTML = '';
    coins.forEach(coin => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${coin.name} (${coin.symbol.toUpperCase()})</h3>
            <p><b>Price: $ </b>${coin.current_price}</p>
            <p><b>Change: </b>${coin.price_change_percentage_24h.toFixed(2)}%</p>
            <img src="${coin.image}" alt="${coin.name}" width="40"/>
        `;
        container.appendChild(card);
    });
}


}

fetchData();
