const observer = new IntersectionObserver((entries) => {
    entries. forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

                    
                        // Pick favorite personal quotes to reflect a more personalized page below//

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "— Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "— Theodore Roosevelt"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "— Thomas Edison"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "— Confucius"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "— Winston Churchill"
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "— Socrates"
  }
]


button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      //   0.0-0.9  * 6    0-6    quotes[0-5]
  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});

// added code//

const quoteoutput = document.getElementById("quote-output")
const output = document.getElementById("output")


quoteoutput.addEventListener("animationend", function (event) {
  output.textContent = "The animation has ended!"
})

// the js for the about me page below//

