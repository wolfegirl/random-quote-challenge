// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var random;
var message = '';
var randomQuotePrint;


//function for getting the random quotes

function getRandomQuote (quotes) {
  for (var i = 0; i < quotes.length; i += 1) {
  random = quotes[Math.floor(Math.random() * quotes[i].length)];
  return random;
  }
}
  console.log(getRandomQuote());
  //


//function to print the quotes

function printQuote(message) {
  finalQuotePrint = getRandomQuote();
  var div = document.getElementById('quote-box').innerHTML;
  div.innerHTML = message;
  message += '<p.quote>' + finalQuotePrint.quote + '</p>';
  message += '<p.source>' + finalQuotePrint.source + '</p>';
  message += '<span.citation>' + finalQuotePrint.citation + '</p>';
  message += '<span.year>' + finalQuotePrint.source + '</p>';
}
