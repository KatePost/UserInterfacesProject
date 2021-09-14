
function getCalendar() {
    document.write("<div class='grid-container'>");
    let todayDate;
    todayDate = new Date();
    title(todayDate);
    dayNames();
    dates(todayDate);
    document.write("</div>")

    let day = todayDate.getDate();
    return day;
}

function title(todayDate) {
    let monthsOfYear = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    let currentMonth = todayDate.getMonth();
    let currentYear = todayDate.getFullYear();
    currentMonth = monthsOfYear[currentMonth]
    document.write("<div class='title'><h1>" + currentMonth + " " + currentYear + "</h1></div>");
}

function dayNames() {
    let daysOfWeek = [
        "Sun", "Mon", "Tue",
        "Wed", "Thu", "Fri",
        "Sat"
    ];

    for (const values of daysOfWeek) {
        document.write("<div>" + values + "</div>");
    }
}

function daysInMonth(todayDate) {
    let currentMonth = todayDate.getMonth();

    let numberDays = [
        31, 28, 31,
        30, 31, 30,
        31, 31, 30,
        31, 30, 31
    ];
    return numberDays[currentMonth];
}

function dates(todayDate) {
    currentDate = todayDate.getDate();
    days = daysInMonth(todayDate);
    let weekDay = new Date(todayDate);
    weekDay.setDate(1);
    weekDay = weekDay.getDay();
    for (let i = 0; i < weekDay; i++) {
        document.write("<div>&nbsp;</div>");
    }
    let dayCounter = 1
    while (dayCounter <= days) {
        if (dayCounter == currentDate) {
            document.write("<div id='date" + dayCounter + "' class='calendar_date green'>" + dayCounter + "</div>");
        }
        else {
            document.write("<div class='calendar_date' id='date" + dayCounter + "'>" + dayCounter + "</div>");
        }
        dayCounter++;

    }
}
function linkDate(day) {
    document.getElementById("date" + day).innerHTML = "<a href='alternative-about-us.html'>" + day + "</a>";
}

function makeEvent(day, link, thisClass){
    let date = new Date(day);
    let today = new Date();
    if(date.getMonth() === today.getMonth()){
        eventDate = date.getDate();
        document.getElementById("date" + eventDate).classList.add(thisClass);
        document.getElementById("date" + eventDate).innerHTML = "<a" + link + " >" + date.getDate() + "</a>";
    }
}