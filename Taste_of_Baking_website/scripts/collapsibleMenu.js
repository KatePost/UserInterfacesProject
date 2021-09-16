var menuButton = document.getElementById("menu-toggle-btn");
var content = document.getElementById("mainNav");

menuButton.addEventListener("click", function() {

    if (menuButton.className === "fa fa-bars") {
        menuButton.className = "fa fa-times";
    } else{
        menuButton.className = "fa fa-bars"
    }
    content.classList.toggle("active");
});
