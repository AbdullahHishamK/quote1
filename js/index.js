var aryQuotes = [
  {
    'quote': '"be yourself,everyone else is taken."',
    'author': '"-oscar wilde"',
  },
  {
    'quote': "“So many books, so little time.”",
    'author': '"― Frank Zappa"',
  },
  {
    'quote': "“A room without books is like a body without a soul.”",
    'author': '"― Marcus Tullius Cicero"',
  },
  {
    'quote': "“You only live once, but if you do it right, once is enough.”",
    'author': '"― Mae West"',
  },
  {
    'quote': "“Be the change that you wish to see in the world.”",
    'author': '"― Mahatma Gandhi"',
  },
  {
    'quote': "“We accept the love we think we deserve.”",
    'author': '"― Stephen Chbosky"',
  },
  {
    'quote': "“Without music, life would be a mistake.”",
    'author': '"― Friedrich Nietzsche"',
  },
  {
    'quote': "“Always forgive your enemies; nothing annoys them so much.”",
    'auhtor': '"― Oscar Wilde"',
  },
  {
    'quote': "“A friend is someone who knows all about you and still loves you.”",
    'author': '"― Elbert Hubbard"',
  },
];

function aplyQuotes() {
  var random = Number.parseInt(Math.random() * aryQuotes.length + 1);
  document.getElementById("quoteOutput").textContent = `${aryQuotes[random].quote}`;
  document.getElementById("autherOutput").textContent = `${aryQuotes[random].author}`;
}
