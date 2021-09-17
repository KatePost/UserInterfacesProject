var category = document.getElementById("category");
var cName = document.getElementById("name");
var email = document.getElementById("email");
var title = document.getElementById("title");
var termsAgree = document.getElementById("terms-agree");
var authorAgree = document.getElementById("author-rights");

function myreset(){
    category.value = "";
    cName.value = "";
    email.value = "";
    title.value = "";
    termsAgree.checked = false;
    authorAgree.checked = false;
}

function validate(){
    if(category.value != "" && cName.value != "" && email.value != "" && title.value != "" && termsAgree.checked && authorAgree.checked){
        return true;
    }
    else{
        window.alert("Please fill in all required fields. Fields marked * are required.")
        return false;
    }
}