# Crypto Price Tracker

> Developed a responsive cryptocurrency tracking web application using HTML, CSS, and JavaScript that fetches and displays real-time market data from the CoinGecko API. Implemented dynamic search filtering, dark/light theme toggling, and glassmorphism-based UI design for an interactive user experience across devices.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CoinGecko]

---

## Overview

**Crypto Price Tracker** is a front-end web application that displays live cryptocurrency market data in a clean, card-based layout. Built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies. The app connects to the free CoinGecko API to retrieve up-to-date prices, market caps, and 24-hour changes, then renders them dynamically into glassmorphism-styled cards.

---

## Features

- **Real-time data** — Fetches live market data from the CoinGecko API on page load
- **Live search** — Filter cryptocurrencies instantly as you type
- **Dark / Light mode** — Toggle themes with persistent visual feedback
- **Glassmorphism UI** — Frosted-glass card design with layered transparency
- **Responsive layout** — Adapts cleanly across desktop, tablet, and mobile
- **Interactive hover effects** — Subtle animations on card interaction
- **Error handling** — Displays a user-friendly message if the API call fails
- **Dynamic rendering** — All cards are generated via JavaScript DOM manipulation

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Glassmorphism styling, animations, theme switching |
| JavaScript (Vanilla) | API calls, DOM rendering, search and toggle logic |
| CoinGecko API | Live cryptocurrency market data |

---

## Project Structure

```
crypto-price-tracker/
├── index.html      # Application structure
├── style.css       # Styling, themes, and animations
└── script.js       # API integration and interactivity
```

---

## Getting Started

No installation or build step required.

**1. Clone the repository**
```bash
git clone https://github.com/JayanthikaKrishnamoorthy/crypto-price-tracker.git
cd crypto-price-tracker
```

**2. Open the app**

- Double-click `index.html` to open directly in your browser, **or**
- Use the VS Code **Live Server** extension for auto-reload during development

---

## Usage

1. Open the app — cryptocurrency cards load automatically on launch
2. Use the **search bar** to filter coins by name in real time
3. Click the **theme toggle** to switch between dark and light mode
4. If the API fails, an error message is shown without breaking the layout

---

## API Reference

This project uses the [CoinGecko Public API](https://docs.coingecko.com/reference/introduction) — free to use, no API key required.

**Endpoint:**
```
GET https://api.coingecko.com/api/v3/coins/markets
    ?vs_currency=usd
    &order=market_cap_desc
    &per_page=50
    &page=1
```

**Data returned per coin:** name, symbol, current price, market cap, 24h price change, total volume, rank.

> The free tier has a rate limit. If data does not load, wait a moment and refresh.

---

## Screenshots

> *Add your own screenshots here once the project is running.*

```
Steps to add screenshots:
1. Take a screenshot of your running application
2. Upload it to your repo (e.g. inside an /assets folder)
3. Replace this section with: ![App Screenshot](assets/screenshot.png)
```

---
## Future Improvements

- [ ] Price history charts using Chart.js
- [ ] Favourites / watchlist saved to `localStorage`
- [ ] Currency switcher (USD, EUR, INR)
- [ ] Sort by price, rank, or 24h change
- [ ] Portfolio tracker with custom holdings input

---

## Learning Outcomes

- Consuming a public REST API using the Fetch API and handling asynchronous JavaScript
- Dynamically generating and updating HTML elements through DOM manipulation
- Implementing CSS glassmorphism with `backdrop-filter` and `rgba` layering
- Building a theme-switching system using CSS custom properties (variables)
- Writing responsive layouts with CSS Grid and media queries
- Handling real-world API errors gracefully without crashing the UI

---

## Author

**Jayanthika**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/JayanthikaKrishnamoorthy)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/jayanthika-k)

---

*Built with vanilla JavaScript — no frameworks, just fundamentals.*
