
var categoryBox = document.getElementById("category");
var resetBtn = document.getElementById("reset");
var textBox = document.getElementById("description");
let emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
var categoryBool = false;

function validate() {
    var textBoxInputBool = textBoxInput();
    var recipeRadiosBool = recipeRadios();
    var filledEmailBool = filledEmail();
    if (categoryBool && textBoxInputBool && recipeRadiosBool && filledEmailBool) {
        storeData();
        return true;
    }
    window.alert("Please fill all required fields. Fields marked with * are required.");
    return false;
}

function myreset() {
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
    categoryBool = false;
}

function category() {
    myreset();

    //recipe selected
    if (categoryBox.selectedIndex === 1) {
        $(".hide").css("display", "block");
        recipeRadiosHidden = false;
        categoryBool = true;
    }

    else if (categoryBox.selectedIndex === 2) {
        categoryBool = true;
    }

    //site help selected
    else if (categoryBox.selectedIndex === 3 || categoryBox.selectedIndex === 4) {
        document.getElementById("email").required = true;
        document.getElementById("email-label").innerHTML = "Your email address:*";
        emailRequired = true;
        categoryBool = true;
    }

    else {
        categoryBool = false;
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
    var email = document.getElementById("email").value;
    if (email.length != 0) {
        return email.match(emailCorrectPattern);
    }
    else if (emailRequired) {
        return false;
    }
    return true;
}

categoryBox.addEventListener("change", category, false);
