
const strawberryCake = [2.5, 2, 0.5, 1, 0.75, 1.75, 5, 0.33, 2, 0.5, 0.5, 2];
var proportion = document.getElementById("proportion");
var newQuantities = [];
var ingredients = document.querySelectorAll("#ingredients ul li span");
var myList = document.querySelectorAll("#ingredients ul li");
const originalRecipe = [];
var servings = document.querySelector('ul li #servings');
const originalServings = servings.innerHTML;

for (let i = 0; i < myList.length; i++) {
    originalRecipe[i] = myList[i].innerHTML;
}


function updateRecipe (array) {
    var amount = proportion.options[proportion.selectedIndex].value;
    
    if (amount == '2') {
        newQuantities = array.map(x => x * 2);
        updateQuantities();
    }
    else if (amount == '0.5') {
        newQuantities = array.map(x => x * 0.5);
        updateQuantities();
    }
    else {
        for (let i = 0; i < myList.length; i++) {
            myList[i].innerHTML = originalRecipe[i];
        }
    }
}

function updateQuantities() {
    for (let i = 0; i < ingredients.length; i++) {
        let mySplit = ingredients[i].innerHTML.split(" ");
        let number = newQuantities[i];
        if (number.toString().length > 3) {
            number = number.toFixed(2);
        }
        let quantity = [number];
        let newIngredient = quantity.concat(mySplit).join(" ");
        myList[i].innerHTML = newIngredient;   
    }
}

function updateServings() {
    var amount = proportion.options[proportion.selectedIndex].value;
    

    if (amount == '2') {
        servings.innerHTML = originalServings * 2;

    }
    else if (amount == '0.5') {
        servings.innerHTML = originalServings * 0.5;

    }
    else {
        servings.innerHTML = originalServings;

    }
}