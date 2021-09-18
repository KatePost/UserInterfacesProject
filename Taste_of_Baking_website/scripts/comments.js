let comments = [];

let emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

let nameInput;
let emailInput;
let commentInput;


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

        const comment = new Comment(id, timestamp, nameInput, emailInput, commentInput);

        const commentJSON = JSON.stringify(comment);
        localStorage.setItem(id,commentJSON);

        comments.push(commentJSON);
        console.log(comments);

        let template;

        template = '<tr><td>' + comment.userName + '</td>';
        template += '<td>' + comment.timestamp + '</td>';
        template += '<td>' + comment.userComment + '</td></tr>';

        document.querySelector('table').innerHTML += template;

        document.getElementById('full_name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    }
}


document.getElementById('submit-btn').addEventListener('click', addComment);


class Comment {
    constructor(id, timestamp, userName, userEmail, userComment) {
        this.id = id;
        this.timestamp = timestamp;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userComment = userComment;
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


