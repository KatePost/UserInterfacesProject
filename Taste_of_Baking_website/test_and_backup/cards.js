var container = document.getElementsByClassName("containers")[0];
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'cards.json'); //OR POST
ourRequest.onload = function(){
    var cards = JSON.parse(ourRequest.responseText);
    renderHTML(cards);
    console.log(cards);
};
ourRequest.send();

function renderHTML(data){
    var htmlString = "";
    
    for(let set of data) {
        htmlString += "<div class='column'><a href='" + set.href + "'><img src='../images/" + set.image + "' alt='" + set.name + "'/></a>"+
            "<a href='" + set.href + "'><h4>" + set.name + "</h4></a>" +
            "<small> Difficulty: <br/>";
        for (let i = 0; i < 5; i++){
            htmlString += "<span class = 'fa fa-star";
            if(i < set.difficulty){
                htmlString += " checked";
            }
            htmlString += "'></span>";
        }
        htmlString += "</small></div>";
    }
    container.innerHTML += htmlString;
}

/*function writeCards(cardCount, className, data) {
    var htmlString = "";
    
    for(let set = 0; set < cardCount && set < data.length; set++) {
        htmlString += "<div class='"+ className + "'><a href='" + data[set].href + "'><img src='../images/" + data[set].image + "' alt='" + data[set].name + "'/></a>"+
            "<a href='" + data[set].href + "'><h4>" + data[set].name + "</h4></a>" +
            "<small> Difficulty: <br/>";
        for (let i = 0; i < 5; i++){
            htmlString += "<span class = 'fa fa-star";
            if(i < data[set].difficulty){
                htmlString += " checked";
            }
            htmlString += "'></span>";
        }
        htmlString += "</small></div>";
    }
    document.write(htmlString);
}*/