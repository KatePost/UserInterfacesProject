getQuote();


function getQuote(){

fetch('http://quotable.io/random').then(res => res.json()).then(data => {
    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = data.author;
})


}

// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);


