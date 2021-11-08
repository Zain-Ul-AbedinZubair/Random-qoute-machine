//By Clicking on button it will generate new quotes inside class container
let container = document.getElementsByClassName("container");
let p = document.querySelector(".p");
let author = document.querySelector(".author");
let rem;

function NextQuote (){

rem = Math.floor(Math.random()*100);
 fetch('https://api.quotable.io/random')
 .then(response => response.json())
  .then(quotes => {
    // p.innerHtml = '"${quotes.content}"';
    p.innerHTML = quotes.content;
    author.innerHTML = quotes.author;
    // author.innerHtml = quotes.author;
  }  // console.log(quotes.content)
    );
}