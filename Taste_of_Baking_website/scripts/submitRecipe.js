var category = document.getElementById("category");
var cName = document.getElementById("name");
var email = document.getElementById("email");
var title = document.getElementById("title");
var termsAgree = document.getElementById("terms-agree");
var authorAgree = document.getElementById("author-rights");
let emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
var file = document.getElementById("file");
var description= document.getElementById("description");


let id = Date.now();
//let comments =[];



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
            
            let formInput = [];
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
            
            const recipeFormJSON = JSON.stringify(recipeForm);
            localStorage.setItem(id,recipeFormJSON);
            formInput.push(recipeFormJSON);
            window.alert("find it");
            console.log(formInput);
            
            /* formInput= [categorys, cNames, emails, titles,files];
            const formJSON = JSON.stringify(formInput);
            localStorage.setItem(formInput,formJSON);
           
           
            window.alert("hi");
            //////------
           /* const formId = "comments-form"; // ID of the form
        const url = location.href; //  href for the page
        const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
        
        const submitButton = document.querySelector("#submit"); // select save button
        
        
        
        let form = document.querySelector(`#${formId}`); // select form
        let formElements = form.elements; // get the elements in the form
        
        const getFormData = () => {
        
            let data = { [formIdentifier]: {} }; 
            for (const element of formElements) {
                if (element.name.length > 0) {
                    data[formIdentifier][element.name] = element.value;
                }
            }
            return data;
        };
        
        
        
        submitButton.onclick = event => {
            event.preventDefault();
            data = getFormData();
            //populateForm();
            localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
            console.log()
        };
        
        
        
        
       const populateForm = () => {
            if (localStorage.key(formIdentifier)) {
                const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
                for (const element of formElements) {
                    if (element.name in savedData) {
                        element.value = savedData[element.name];
                    }
                }
            }
        };*/
//------------------------
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

