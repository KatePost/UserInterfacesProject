var container = document.getElementsByClassName("containers")[0]; //element to place cards in
if(document.body.contains(container)){

var page = document.title.split(" ")[0].toLowerCase(); //find the category using the fist word of the page title
var ourRequest = new XMLHttpRequest(); //request to get the cards
var cards;
var searchQuery;

ourRequest.open('GET', 'json/cards.json'); // get cards
ourRequest.onload = function(){ //process cards on load
    cards = JSON.parse(ourRequest.responseText); //get the json format out of the cards file
    console.log(cards)
    
    if (page == 'search'){ //if on search page, perform a search 
        searchQuery = sessionStorage.getItem('q').split(' '); //retrive search query from session storage
        cards = cards.filter(card => {return ( //filter cards array
            searchQuery.some(word => //check each word in the search query against the name, href, image url, group names, and category
            card.name.toLowerCase().includes(word) || 
            card.href.includes(word) ||
            card.image.includes(word) ||
            card.groups.includes(word) ||
            card.category.includes(word)
            ))});

    } else {let filter = cards.filter(card => {return card.category.includes(page)});
    filter.length > 0 ? cards = filter : cards; }// if not on search page, filter cards by category, or if not a category, show all cards

    renderHTML(cards); //process the cards array into html
    sessionStorage.removeItem('q');
};
ourRequest.send(); //send the request

function renderHTML(data){ //cards processing function
    var htmlString = "";
    for(let set of data) {
        htmlString += "<div class='column " + set.groups + "' data-eventdate='" + set.date + "' data-rate='" + set.difficulty + "'><a href='" + set.href + "'><img src='images/" + set.image + "' alt='" + set.name + "'/></a>"+
            "<a href='" + set.href + "'><h4>" + set.name + "</h4></a>" +
            "<small>Difficulty: <br/>";
        for (let i = 0; i < 5; i++){
            htmlString += "<span class = 'fa fa-star";
            if(i < set.difficulty){
                htmlString += " checked";
            }
            htmlString += "'></span>";
        }
        htmlString += "</small></div>";
        
    }
    if(htmlString == "") {htmlString = '<p>Sorry, nothing found.</p>'}
    container.innerHTML = htmlString;
}
}
/* on click, search bar takes you to a search page where it shows you your search results.
thing is then done there */

const logSearch = (ev) => { // function to get the search query into session storage, then transfer to the search page
    ev.preventDefault(); 
    q = $('#searchBar').val().toLowerCase(); //searchbar value, case insensitive
    sessionStorage.setItem('q', q); //store the search query under the key 'q' - will be overwritten for each search
    document.location = 'searchResults.html'; //go to the search page
}

$('#searchForm').submit(logSearch); //event listener for search submit button

/* category function by Bahar */

$(function(){

    $('#diet').change( function() {
        if($(this).val() == 'low_sugar'){
           $('.low_sugar').show();
           $('.gluten_free').hide();
           $('.vegan').hide();
           $('.low_calorie').hide();
        }
        else if($(this).val() == 'gluten_free'){
           $('.low_sugar').hide();
           $('.gluten_free').show();
           $('.vegan').hide();
           $('.low_calorie').hide();
        }
        else if($(this).val() == 'vegan'){
           $('.low_sugar').hide();
           $('.gluten_free').hide();
           $('.vegan').show();
           $('.low_calorie').hide();
        }
        else if($(this).val() == 'low_calorie'){
           $('.low_sugar').hide();
           $('.gluten_free').hide();
           $('.vegan').hide();
           $('.low_calorie').show();
        }
        else if($(this).val() == 'all'){
            $('.low_sugar').show();
            $('.gluten_free').show();
            $('.vegan').show();
            $('.low_calorie').show();
         }
        else
        {
            $('.low_sugar').hide();
            $('.gluten_free').hide();
            $('.vegan').hide();
            $('.low_calorie').hide();
        }
    });
    
    var container = $(".containers");
    var items = document.getElementsByClassName('column');
    
    $('select#sort_by').change(function() {
        let selection = $("select#sort_by option:selected");
        for(let item of items){
            var value = item.getAttribute('data-eventdate').split('/');
            item.setAttribute('data-eventdate', new Date(value[2], value[1] - 1, value[0]).getTime());
        }
        
        if(selection.val() == 'date'){

            container.find('.column').sort(function(a, b) {
                return +$(b).data('eventdate') - +$(a).data('eventdate');
            }).appendTo(container);
        }
        else if(selection.val() == 'difficulty'){
            container.find('.column').sort(function(a, b){
                return +$(a).data('rate') - +$(b).data('rate');
            }).appendTo(container);
    }
    }

    );
    });