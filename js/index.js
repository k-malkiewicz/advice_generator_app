const adviceIdEl = document.querySelector('[data-advice-id]');
const quoteEl = document.querySelector('[data-quote]');
const generateBtn = document.querySelector('[data-btn]');

const freezeButton = () => {
    generateBtn.classList.add('frozen');
    generateBtn.setAttribute('disabled', 'true');

    setTimeout(() => {
        generateBtn.classList.remove('frozen');
        generateBtn.removeAttribute('disabled');
    }, 2000);
}

const generateRandomQuote = () => {
    const API_URL = "https://api.adviceslip.com/advice";

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            let [adviceId, quote] = [data.slip.id, data.slip.advice];
            adviceIdEl.textContent = adviceId;
            quoteEl.textContent = quote;
        });
}

generateBtn.addEventListener('click', () => {
    freezeButton();
    generateRandomQuote();
});