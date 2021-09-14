function writeHeader(){

let socials, categories, navs;

/* French */
if(document.documentElement.lang == "fr"){
    socials = [
        ["https://www.twitch.tv/fr", "fa fa-twitch"],
        ["https://www.youtube.com/?hl=FR", "fa fa-youtube-play"],
        ["https://www.instagram.fr", "fa fa-instagram"],
        ["https://www.facebook.fr", "fa fa-facebook-square"], 
        ["https://www.twitter.fr", "fa fa-twitter-square"],
        ["#top", "fa fa-search"],
        ["index.html", "lang en"]
    ]
    
    categories = [
        ["cake-category.html", "G&acirc;teaux"],
        ["cookies-category.html", "Biscuits"],
        ["bread-category.html", "Pains"],
        ["pie-category.html", "Tartes"]
    ]
    
    navs = [
        ["about-us-fr.html", "À Propos de Nous"],
        ["contact.html", "Contactez Nous"],
        ["submit-recipe.html", "Soumettre des Recettes"],
        ["calendar.html", "Calendrier"]
    ]
}
/* English - DEFAULT */
else {
socials = [
        ["https://www.twitch.tv", "fa fa-twitch"],
        ["https://youtube.com", "fa fa-youtube-play"],
        ["https://www.instagram.com", "fa fa-instagram"],
        ["https://www.facebook.com", "fa fa-facebook-square"], 
        ["https://www.twitter.com", "fa fa-twitter-square"],
        ["#top", "fa fa-search"],
        ["about-us-fr.html", "lang fr"]
    ]

    categories = [
        ["cake-category.html", "Cakes"],
        ["cookies-category.html", "Cookies"],
        ["bread-category.html", "Bread"],
        ["pie-category.html", "Pie"]
    ]

    navs = [
        ["alternative-about-us.html", "About"],
        ["contact.html", "Contact"],
        ["submit-recipe.html", "Submit Recipes"],
        ["calendar.html", "Calendar of Events"]
    ]
}

document.writeln('<div class="container">');
document.writeln('<header class="major">');
document.writeln('<a href="index.html">');
document.writeln('<figure id="logo">');
document.writeln('<img src="images/minimal-logo-color-change.png" alt="Home | Taste of Baking Logo" />');
document.writeln('<figcaption>Taste of Baking</figcaption>');
document.writeln('</figure>');
document.writeln('</a>');
document.writeln('<nav class="navbar">');
document.writeln('<ul>');
for(let nav of navs){
    document.writeln('<li><a href="' + nav[0] + '">' + nav[1] + "</a></li>");
}
document.writeln('</ul>');
document.writeln('</nav>');
document.writeln('<nav id="socialsNav">');
document.writeln('<ul>');
for(let social of socials) {
    document.writeln('<li><a href="' + social[0] + '"><span class="' + social[1] + '"></span></a></li>');
}
document.writeln('</ul>');
document.writeln('</nav>');
document.writeln('</header>');
document.writeln('<header class="minor">');
document.writeln('<nav class="navbar">');
document.writeln('<ul>');
for (let category of categories) {
    document.writeln('<li><a href="' + category[0] + '">' + category[1] + '</a></li>');
}
document.writeln('</ul>');
document.writeln('</nav>');
document.writeln('<form class="textBar" id="searchForm">');
document.writeln('<input type="search" name="searchBar" id="searchBar" size="50" autofocus />');
document.writeln('<button type="submit" form="searchForm">Search</button>');
document.writeln('</form>');
document.writeln('</header>');
}

function writeFooter(){
let links;

if(document.documentElement.lang == "fr") {
    links = [
        ["index.html", "Accueil"],
        ["about-us-fr.html", "À Propos de Nous"],
        ["contact.html", "Contactez Nous"],
        ["submit-recipe.html", "Soumettre des Recettes"]
    ];
}
else {
    links = [
        ["index.html", "Home"],
        ["alternative-about-us.html", "About Us"],
        ["contact.html", "Contact Us"],
        ["submit-recipe.html", "Submit a Recipe to be Featured"]
];
}

document.writeln('<footer class="minor">');
if(document.documentElement.lang == "fr") { //Subscribe bar - French
    document.writeln('<span id="message">Restez en contact...</span>'); 
    document.writeln('<form class="textBar" id="subscribeForm" action="subscribe-completed.html">');
    document.writeln('<input type="email" name="subscribe" id="subscribe" size="50" placeholder="adresse@exemple.com" required/>');
    document.writeln('<button type="submit" form="subscribeForm">Inscrivez-vous</button>');
} else { //Subscribe bar - English (default)
    document.writeln('<span id="message">Stay in touch...</span>');
    document.writeln('<form class="textBar" id="subscribeForm" action="subscribe-completed.html">');
    document.writeln('<input type="email" name="subscribe" id="subscribe" size="50" placeholder="address@example.com" required/>');
    document.writeln('<button type="submit" form="subscribeForm">Sign up</button>');
}
document.writeln('</form>');
document.writeln('</footer>');
document.writeln('<footer class="major">');
document.writeln('<ul>');
for (let link of links) {
    document.writeln('<li><a href="' + link[0] + '">' + link[1] + '</a></li>');
}
document.writeln('</ul>');
document.writeln('<div id="copyright"><span>copyright &copy; 2021</span></div>');
document.writeln('</footer>');
}
