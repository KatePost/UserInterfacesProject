
var categoryBox = document.getElementById("category");
var resetBtn = document.getElementById("reset");
var textBox = document.getElementById("description");
var regexEmail = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$');
var feedbackBool = false;

function validate() {
    var textBoxInputBool = textBoxInput();
    var recipeRadiosBool = recipeRadios();
    var filledEmailBool = filledEmail();
    if (feedbackBool && textBoxInputBool && recipeRadiosBool && filledEmailBool) {
        storeData();
        return true;
    }
    window.alert("Please fill all required fields. Fields marked with * are required.");
    return false;
}

function myreset(){
    //reset options
    $(".hide").css("display", "none");
    let radios = document.querySelectorAll("input[type='radio']");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radios[i].checked = false;
        }
    }
    document.getElementById("email").required = false;
    document.getElementById("email-label").innerHTML = "Your email address:"
    recipeRadiosHidden = true;
    emailRequired = false;
}

function feedback() {
    myreset();
    
    //recipe selected
    if (categoryBox.selectedIndex === 1) {
        $(".hide").css("display", "block");
        recipeRadiosHidden = false;
        feedbackBool = true;
    }

    else if(categoryBox.selectedIndex === 2){
        feedbackBool = true;
    }

    //site help selected
    else if (categoryBox.selectedIndex === 3 || categoryBox.selectedIndex === 4) {
        document.getElementById("email").required = true;
        document.getElementById("email-label").innerHTML = "Your email address:*";
        emailRequired = true;
        feedbackBool = true;
    } 
}

function textBoxInput() {
    if (document.getElementById("description").value.length != 0) {
        return true;
    }
    return false;
}

function recipeRadios() {
    var radioButtons = document.querySelectorAll("input[name='recipe-help']");
    if (!recipeRadiosHidden) {
        for (var i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return true;
            }
        }
    }
    else {
        return true;
    }

    return false;
}

function filledEmail() {
    if (emailRequired) {
        if (document.getElementById("email").value.length != 0) {
            return true;
        }
        return false;
    }
    return true;
}



categoryBox.addEventListener("change", feedback, false);
