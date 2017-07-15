// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//variables for phase one global scope - meets expectations
var random;
var message = '';
var finalQuotePrint;
//variables for phase two global scope- exceeds expectations - change background color with every new quote
var red;
var blue;
var green;
var rgbColor;
var randomBackgrounColor;
var intervalID = setInterval(printQuote, 30000); // change quote every 30 seconds

//function for getting the random quotes

function getRandomQuote() {
  random = Math.floor(Math.random() * quotes.length); //generate a random quote object.
  return quotes[random]; //return my random quote object
  }

//function to make a random hex color

function changeBackgroundColor() {
  randomBackgroundColor = Math.floor(Math.random() * 16777215).toString(16); //I researched and found this snippet because I thought I would need a hex number instead of applying the random rgb function that we learned.
  document.body.style.backgroundColor = '#' + randomBackgroundColor;

}

/* I can't get this method to work so I found the hex solution
function changeBackgroundColor() {

red = Math.floor(Math.random() * 255);
green = Math.floor(Math.random() * 255);
blue = Math.floor(Mathrandom() * 255);
document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

*/

//function to print the quotes

function printQuote() {
  changeBackgroundColor();//This calls the random background color
  finalQuotePrint = getRandomQuote(); //Calling the getRandomQuote function and storing it in a variable
//displaying the message in the proper HTML  - this is behaving wonky. the source wraps to another line. Can't figure out why.
  message = '<p class="quote">' + finalQuotePrint.quote + '</p>'; //using finalQuotePrint variable and adding the quote key to it with dot notation
  message += '<p class="source">' + finalQuotePrint.source + '</p>';
  message += '<span class="citation">' + finalQuotePrint.citation + '</span>';
  message += '<span class="year">' + finalQuotePrint.year + '</span>';
  message += '<span class="year">' + finalQuotePrint.tags + '</span>';
  document.getElementById('quote-box').innerHTML = message;
}
