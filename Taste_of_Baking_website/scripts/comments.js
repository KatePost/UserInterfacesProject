
// let comments = [];

const addComment = (ev) => {
    ev.preventDefault();

    // validateCommentsForm();

    let thisDay= new Date();

    timestamp = thisDay.toString().split(' ');
    timestamp = timestamp.slice(1, 5).join(' ');


    const comment = {
        id: Date.now(),
        date: timestamp,
        userName: document.getElementById('full_name').value,
        userEmail: document.getElementById('email').value,
        userComment: document.getElementById('comment').value
    }

    let template;
    
    template = '<tr><td>' + comment.userName + '</td>';
    template += '<td>' + comment.date + '</td>';
    template += '<td>' + comment.userComment + '</td></tr>';
    
    document.querySelector('table').innerHTML += template;

    document.getElementById('full_name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comment').value = '';
}

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('submit-btn').addEventListener('click', addComment);
// });

document.getElementById('submit-btn').addEventListener('click', addComment);


function validateCommentsForm() {
    let nameInput = document.getElementById("full_name");
    let emailInput = document.getElementById("email");
    let commentInput = document.getElementById("comment")

    if (nameInput.value.length === 0) {
        alert("Please enter your name");
        nameInput.focus();
        return false;
    }

    if (emailInput.value.length === 0) {
        alert("Please enter your email address");
        emailInput.focus();
        return false;
    } 

    if (commentInput.value.length === 0) {
        alert("Please enter a comment");
        commentInput.focus();
        return false;
    } 

    // var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    // if (!(emailInput.match(emailCorrectPattern))) {
    //     // debugger;
    //     alert("Please correct email address");
    //     email.value = '';

    //     emailInput.focus();

    //     // changes its background color to yellow
    //     emailInput.style.backgroundColor = 'yellow';
    //     return false;
    // }
    // emailInput.style.background = "white";
}





// function Comment (id, userName, userEmail, userComment) {
//     this.id = id;
//     this.userName = userName;
//     this.userEmail = userEmail;
//     this.userComment = userComment;
// }
