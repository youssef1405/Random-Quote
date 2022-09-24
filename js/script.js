/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    citation: '',
    year: '',
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: 'Albert Einstein',
    citation: '',
    year: '1905',
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source: 'Dr. Seuss',
    citation: '',
    year: '1950',
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: 'Mark Twain',
    citation: '',
    year: '1870',
  },
  {
    quote:
      'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    source: 'Mahatma Gandhi',
    citation: '',
    year: '1930',
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    source: 'Robert Frost',
    citation: '',
    year: '1936',
  },
  {
    quote: 'A friend is someone who knows all about you and still loves you.',
    source: 'Elbert Hubbard',
    citation: '',
    year: '1900',
  },
];

/***
 * `getRandomQuote` function
 ***/

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

// document
//   .getElementById('load-quote')
//   .addEventListener('click', printQuote, false);
