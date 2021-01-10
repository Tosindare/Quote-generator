
//const quoteContainer = document.getElementById('quote-container');
//const quoteText = document.getElementById('quote');
//const authorText = document.getElementById('author');
//const twitterBtn = document.getElementById('twitter');
//const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote

function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}

// Get Quote From API
async function getQuote() {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // If Author is blank, add 'Unknown'
        // if (data.quoteAuthor === '') {
        //     authorText.innerText = 'Unknown';
        // } else {
        //     authorText.innerText = data.quoteAuthor;
        // }
        // Reduce font size for long quotes
        // if (data.quoteText.length > 120) {
        //     quoteText.classList.add('long-quote');
        // } else {
        //     quoteText.classList.remove('long-quote');
        // }        
        // quoteText.innerText = data.quoteText;
        newQuote();

    } catch (error) {
        //getQuote();
        
    }
}

// on Load

getQuote ()