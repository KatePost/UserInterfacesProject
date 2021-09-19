var comments =JSON.parse(localStorage.getItem('newComment')) || [];

let emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
let timestamp;
let nameInput;
let emailInput;
let commentInput;
let recipeId;
recipeId = document.getElementsByClassName("recipe")[0].id;

const addComment = (ev) => {
    ev.preventDefault();
    nameInput = document.getElementById("full_name").value;
    emailInput = document.getElementById("email").value;
    commentInput = document.getElementById("comment").value;
   

    // if (nameInput.trim().length === 0 || emailInput.trim().length === 0
    //     || commentInput.trim().length === 0) {
    //     alert("All fields require an input");
    // }
    // else if (commentInput.trim().length > 300) {
    //     alert("Cannot exceed more than 300 characters");

    // }
    // else if (!(emailInput.match(emailCorrectPattern))) {
    //     alert("Please correct email address");
    //     document.getElementById('email').value = '';
    // }

    let validate = validateCommentsForm();

    if(validate) {

        let id = Date.now();
    
        let thisDay = new Date();
        timestamp = thisDay.toString().split(' ');
        timestamp = timestamp.slice(1, 5).join(' ');

        const comment = new Comment(id, recipeId ,timestamp, nameInput, emailInput, commentInput);

        comments.push(comment);
        localStorage.setItem('newComment',JSON.stringify(comments));
        //const commentJSON = JSON.stringify(comment);
        //localStorage.setItem('commented',commentJSON);

        //comments.push(commentJSON);
        //console.log(comments);

        let template;

        template = '<tr><td>' + comment.userName + '</td>';
        template += '<td>' + comment.timestamp + '</td>';
        template += '<td>' + comment.userComment + '</td></tr>';

        document.querySelector('table').innerHTML += template;

        document.getElementById('full_name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    }
};


document.getElementById('submit-btn').addEventListener('click', addComment);


class Comment {
    constructor(id, recipeId ,timestamp, userName, userEmail, userComment) {
        this.id = id;
        this.timestamp = timestamp;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userComment = userComment;
        this.recipeId = recipeId;
    }
}



function validateCommentsForm() {
    if (nameInput.trim().length === 0 || emailInput.trim().length === 0
        || commentInput.trim().length === 0) {
        alert("All fields require an input");
        return false;
    }
    else if (commentInput.trim().length > 300) {
        alert("Cannot exceed more than 300 characters");
        return false;

    }
    else if (!(emailInput.match(emailCorrectPattern))) {
        alert("Please correct email address");
        document.getElementById('email').value = '';
        return false;
    }
    else {
        return true;
    }
}

function displayTable() {
    
    var tcomment = JSON.parse(localStorage.getItem('newComment'));
    
    for (let i=0; i<tcomment.length; i++){
        if (tcomment[i].recipeId == recipeId){
            //window.alert("tcomment: " + tcomment[i].recipeId + "This recipe: " + recipeId)
        let template;

        template = '<tr><td>' + tcomment[i].userName + '</td>';
        template += '<td>' + tcomment[i].timestamp + '</td>';
        template += '<td>' + tcomment[i].userComment + '</td></tr>';
        document.querySelector('table').innerHTML += template;
        }
    }
}
window.addEventListener('load', displayTable, false);


