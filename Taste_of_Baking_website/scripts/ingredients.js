
var recipeQuantities = [];

var myList = document.querySelectorAll("#ingredients ul li");

var servings = document.getElementById('servings').innerHTML;

for (let i = 0; i < myList.length; i++) {
    let mySplit = myList[i].innerHTML.split(" ");
    recipeQuantities[i] = parseFloat(mySplit[0]);
}

function updateRecipe() {
    let newQuantities = [];
    let newServings;
    var amount = proportion.options[proportion.selectedIndex].value;


    if (amount == '2') {
        newQuantities = recipeQuantities.map(x => x * 2);
        newServings = servings * 2;
        
        

    }
    else if (amount == '0.5') {
        newQuantities = recipeQuantities.map(x => x * 0.5);
        newServings = servings * 0.5;

    }
    else {
        newQuantities = recipeQuantities;
        newServings = servings;
    }

    console.log(recipeQuantities);


    for (let i = 0; i < myList.length; i++) {
        let mySplit = myList[i].innerHTML.split(" ");
        let number = newQuantities[i]
        if (number.toString().length > 3) {
            number = number.toFixed(2);
        }
        mySplit[0] = number;
        let ingredient = mySplit.join(" ");
        myList[i].innerHTML = ingredient;
    }

    document.getElementById('servings').innerHTML = newServings
};





