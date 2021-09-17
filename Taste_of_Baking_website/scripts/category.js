$(document).ready(function() {

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
var items = $(".column");

items.attr('data-event-date', function(i, currVal) {
  const dParts = currVal.split('/');
  const date = new Date(dParts[2], dParts[1] - 1, dParts[0]);
  return date.getTime();
});

$('#sort_by').change(function() {
	if($(this).val() == 'date'){
       items.sort(function(b, a) {
		return $(a).data('event-date') - $(b).data('event-date');
		});
		container.html(items);
    }
    else if($(this).val() == 'difficulty'){
        
        items.sort(function(a,b){
            return $(a).data('rate') - $(b).data('rate');
        });
        container.html(items);
    }
});
})