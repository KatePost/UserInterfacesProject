var category = document.getElementById("category");
var cName = document.getElementById("name");
var email = document.getElementById("email");
var title = document.getElementById("title");
var termsAgree = document.getElementById("terms-agree");
var authorAgree = document.getElementById("author-rights");
let emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

function myreset() {
    category.value = "";
    cName.value = "";
    email.value = "";
    title.value = "";
    termsAgree.checked = false;
    authorAgree.checked = false;
}

function validate() {
    let emailMatch = email.value.match(emailCorrectPattern);
    if (category.value != "" && cName.value != "" && email.value != "" && title.value != "" && termsAgree.checked && authorAgree.checked) {
        if (emailMatch) {
            return true;
        }
        else {
            window.alert("Please correct the email address entered.");
            return false;
        }
    }
    else {
        window.alert("Please fill in all required fields. Fields marked * are required.")
        return false;
    }
}