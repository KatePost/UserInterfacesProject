var container = document.getElementsByClassName("containers")[0];
var page = document.title.split(" ")[0].toLowerCase();
var ourRequest = new XMLHttpRequest();
var cards; 

ourRequest.open('GET', 'cards.json'); //OR POST
ourRequest.onload = function(){
    cards = JSON.parse(ourRequest.responseText);

    let filter = cards.filter(card => {return card.category.includes(page)});
    filter.length > 0 ? cards = filter : cards; // filter cards by category

    renderHTML(cards);
};
ourRequest.send();

function renderHTML(data){
    var htmlString = "";
    for(let set of data) {
        htmlString += "<div class='column " + set.groups + "' data-eventdate='" + set.date + "' data-rate='" + set.difficulty + "'><a href='" + set.href + "'><img src='../images/" + set.image + "' alt='" + set.name + "'/></a>"+
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
        
    }container.innerHTML = htmlString;
}



$(function(){

    var gluten_free = $('.gluten_free');
    var vegan = $('.vegan');
    var low_sugar = $('.low_sugar');
    var low_calorie = $('.low_calorie');
    
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
    
    console.log(items)
   
    /*for(let item of items){
        var value = item.getAttribute('data-eventdate').split('/');
        item.setAttribute('data-eventdate', 'literally anything');
    }*/
    console.log(items)
    /*items.attr('data-eventdate', function(currVal) {
      var dParts = currVal.split('/');
      var dateValue = new Date(dParts[2], dParts[1] - 1, dParts[0]);
      return dateValue.getTime;
    });*/

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