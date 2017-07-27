// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//variables for phase one global scope - meets expectations
var randomQuote = Math.floor(Math.random() * quotes.length);
var message = '';
var finalQuotePrint;
//variables for phase two global scope- exceeds expectations
var red;
var blue;
var green;
var randomBackgrounColor;
var intervalID = setInterval(printQuote, 30000); // change quote every 30 seconds
var usedQuote = [];//empty array to hold used quotes


//function for getting the random quote

//check to see if the quotes array is empty
function getRandomQuote() {
  if (quotes.length === 0) { //if the quotes array is empty, remove all quotes from usedQuote array to quotes array
      usedQuote = usedQuote.concat(quotes);
  } // if quotes isn't empty then put the randomQuote into the usedQuote array
  quotes.splice(randomQuote, 1);
  return quotes[randomQuote]; //return my random quote object
}

//------------------------------------------------------

//this is the "meet expectations" for getting a random quote that works, so I know something in the getRandomQuote function above is wonky

// function getRandomQuote() {
// randomQuote = Math.floor(Math.random() * quotes.length); //generate a random quote object.
// return quotes[randomQuote]; //return my random quote object
// }

//function to make a random hex color

function changeBackgroundColor() {
  randomBackgroundColor = Math.floor(Math.random() * 16777215).toString(16); //I researched and found this snippet because I thought I would need a hex number instead of applying the random rgb function that we learned. I did learn that either will work, but this is cleaner to me. See line 36.
  document.body.style.backgroundColor = '#' + randomBackgroundColor;
}


/* This is my other solution to the random background but I like the hex solution better.
function changeBackgroundColor() {

red = Math.floor(Math.random() * 255);
green = Math.floor(Math.random() * 255);
blue = Math.floor(Math.random() * 255);
return document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

*/

//function to print the quotes

function printQuote() {

    changeBackgroundColor();//This calls for the random background color
    finalQuotePrint = getRandomQuote(); //Calling the getRandomQuote function and storing it in a variable
//displaying the message in the proper HTML
    message = '<p class="quote">' + finalQuotePrint.quote + '</p>'; //using finalQuotePrint variable and adding the quote key to it with dot notation
    message += '<p class="source">' + finalQuotePrint.source;
    message += '<span class="citation">' + finalQuotePrint.citation + '</span>';
    message += '<span class="year">' + finalQuotePrint.year + '</span>';
    message += '<span class="tags">' + finalQuotePrint.tags + '</span></p>';
    document.getElementById('quote-box').innerHTML = message;
    console.log(finalQuotePrint.quote); //logging the used quote to the console
}
