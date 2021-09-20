var category = document.getElementById("category");
var cName = document.getElementById("name");
var email = document.getElementById("email");
var title = document.getElementById("title");
var termsAgree = document.getElementById("terms-agree");
var authorAgree = document.getElementById("author-rights");
let emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
var file = document.getElementById("file");
var description= document.getElementById("description");
var formInput =JSON.parse(localStorage.getItem('submitRecipe')) || [];
let id = Date.now();

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
            
            id = Date.now();
            
            class RecipeForm {
                constructor(id, category,cName,email,title,file, description,termsAgree,authorAgree){
                    this.id = id;
                    this.category= category.value;
                    this.cName = cName.value;
                    this.email = email.value;
                    this.title =title.value;
                    this.file = file.value;
                    this.description = description.value;
                    this.termsAgree = termsAgree.value;
                    this.authorAgree = authorAgree.value;
                }
            }
            
            const recipeForm = new RecipeForm(id, category, cName, email, title,file,description,termsAgree,authorAgree);
            formInput.push(recipeForm);
            localStorage.setItem('submitRecipe',JSON.stringify(formInput));

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

