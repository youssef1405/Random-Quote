/***
 * `quotes` array
 ***/

/***
 * `getRandomQuote` function
 ***/

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

/***
 * `printQuote` function
 ***/
const printQuote = () => {
  const quoteBox = document.querySelector('#quote-box');
  const randomQuote = getRandomQuote();
  let quoteHTML = `
    <p class='quote'>${randomQuote.quote}</p>
    <p class='source'>${randomQuote.source}
  `;
  if (randomQuote.citation) {
    quoteHTML += `<span class='citation'>${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    quoteHTML += `<span class='year'>${randomQuote.year}</span>`;
  }
  quoteHTML += '</p>';
  quoteBox.innerHTML = quoteHTML;
};

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

// document
//   .getElementById('load-quote')
//   .addEventListener('click', printQuote, false);
