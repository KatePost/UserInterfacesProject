
getQuote();


function getQuote() {

    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }


    xhr.open('GET', 'http://quotable.io/random/');

    xhr.responseType = 'json';

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = data.author;
        }

    }

    xhr.send();

};

    // xhr.onload = () => {
    //     const data = xhr.response;
    //     console.log(data);
    //     quote.innerHTML = `"${data.content}"`;
    //     author.innerHTML = data.author;
    // };



    // fetch('http://quotable.io/random').then(res => 
    // res.json()).then(data => {
    //     quote.innerHTML = `"${data.content}"`;
    //     author.innerHTML = data.author;

    // })

// fetch('http://quotable.io/random').then(res => console.log(res))


// }

// function get_quote_of_the_day() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
// 	 if (this.readyState == 4 && this.status == 200) {
// 	     // Access the result here
// 	     alert(this.responseText);
// 	 }
//     };
//     xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
//     xhttp.send();
// }

// get_quote_of_the_day()

// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);


