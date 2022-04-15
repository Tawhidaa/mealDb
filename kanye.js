const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuote(data));
}
const displayQuote = (data) => {
    const anotherQuote = document.getElementById('quote');

    anotherQuote.innerHTML = `<h2> ${data.quote} </h2>`;
    console.log(data.quote);
}