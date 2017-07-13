// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var random;
var message = '';
var finalQuotePrint;


//function for getting the random quotes

function getRandomQuote () {
  random = Math.floor(Math.random() * quotes.length); //generate a random quote object.
  return quotes[random]; //return my random quote object.
  }


//function to print the quotes

function printQuote() {
  finalQuotePrint = getRandomQuote();
  var message = '<p class="quote">' + finalQuotePrint.quote + '</p>';
  message += '<p class="source">' + finalQuotePrint.source + '</p>';
  message += '<span class="citation">' + finalQuotePrint.citation + '</span>';
  message += '<span.year>' + finalQuotePrint.source + '</p>';
  document.getElementById('quote-box').innerHTML = message;
}
