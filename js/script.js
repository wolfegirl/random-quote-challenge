// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message = '';
var finalQuotePrint;
var red;
var blue;
var green;
var randomBackgrounColor;
var intervalID = setInterval(printQuote, 30000); // Change quote every 30 seconds.
var usedQuote = []; //Empty array to hold used quotes.

//Function for getting the random quote.

function getRandomQuote() {
//Check to see if the quotes array is empty.
  if (quotes.length === 0) {
    //If the quotes array is empty, remove all quotes from usedQuote array to quotes array. (begin, end)
    quotes = usedQuote.splice(0, usedQuote.length);
  }
  // Exit the conditional.
  // If quotes isn't empty - generate a random quote, assign it to randomQuote, we only want one quote.
  // We want the quote from the [0] zero index of the array (splice will return an array).
  var randomQuote = quotes.splice((Math.floor(Math.random() * quotes.length)), 1)[0];
  // Put the randomQuote into the usedQuote array.
  usedQuote.push(randomQuote);
  //return my random quote object
  return randomQuote;
}

//------------------------------------------------------

//this is the "meet expectations" for getting a random quote
// function getRandomQuote() {
// randomQuote = Math.floor(Math.random() * quotes.length); //generate a random quote object.
// return quotes[randomQuote]; //return my random quote object
// }

//function to make a random hex color

function changeBackgroundColor() {
  randomBackgroundColor = Math.floor(Math.random() * 16777215).toString(16); //I researched and found this snippet because I thought I would need a hex number instead of applying the random rgb function that we learned. I did learn that either will work, but this is cleaner to me.
  document.body.style.backgroundColor = '#' + randomBackgroundColor;
}


// This is my other solution to the random background but I like the hex solution better.
// function changeBackgroundColor() {
//
// red = Math.floor(Math.random() * 255);
// green = Math.floor(Math.random() * 255);
// blue = Math.floor(Math.random() * 255);
// return document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
// }

//function to print the quotes

function printQuote() {
  // This calls the random background color.
  changeBackgroundColor();
  // Calling the getRandomQuote function and storing it in a variable.
  finalQuotePrint = getRandomQuote();
  //displaying the message in the HTML template.
  message = '<p class="quote">' + finalQuotePrint.quote + '</p>'; // Using finalQuotePrint variable and adding the quote key to it with dot notation.
  message += '<p class="source">' + finalQuotePrint.source;
  message += '<span class="citation">' + finalQuotePrint.citation + '</span>';
  message += '<span class="year">' + finalQuotePrint.year + '</span>';
  message += '<span class="tags">' + finalQuotePrint.tags + '</span></p>';
  // Selecting the quot-box and assigning it to message variable.
  document.getElementById('quote-box').innerHTML = message;
  // Logging the used quote to the console.
  console.log(finalQuotePrint.quote);
}
