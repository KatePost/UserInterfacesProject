function displayFeedback(){
    var feedback = JSON.parse(localStorage.getItem('responses'));
    var lastFeedback = feedback[feedback.length -1];
    console.log("Name: " + lastFeedback.respondantsName);

    if(!lastFeedback.respondantsName){
        lastFeedback.respondantsName = "empty";
    }
    if(!lastFeedback.email){
        lastFeedback.email = "empty";
        document.getElementById("thank-you").innerHTML = "We appreciate you taking the time to let us know how we're doing."
    }
    var string = "Name: " + lastFeedback.respondantsName + "<br />Email: " +  lastFeedback.email + "<br />Message: " + lastFeedback.content;
    document.getElementById("responses").innerHTML += string;
}


window.addEventListener('load', displayFeedback, false);