
// Responsive clock field

var loading = function() {
	
    var viewport_width = window.innerWidth;
    var viewport_height = window.innerHeight;
    var game_width = document.querySelector('.clock-table');
    
    if(viewport_height > viewport_width){
        if(viewport_width<600){
            game_width.style.width = viewport_width - 20 +"px";
            game_width.style.height = viewport_width - 20 +"px";
        }
    }else if(viewport_height < viewport_width){
        if(viewport_height<550){
            game_width.style.width = viewport_height - 20 +"px";
            game_width.style.height = viewport_height - 20 +"px";
        }
    }
}
window.addEventListener('resize', loading) 
window.onload = loading();

/////////////////////////////////////////////////////////////////////////////

// wordClock

function timeStatus(){

    var currentTime = new Date();
    var hours = currentTime.getHours();
    if(hours > 12) 
    { hours = hours - 12;}
    if (hours === 0) 
    { hours = 12;}
    var timeMinutes = currentTime.getMinutes();

    // remove all active fields

    let rowElement = document.querySelectorAll('.row-element');
    let itIsId = document.querySelector('#it-is-id');

    for (let i = 0; i < rowElement.length; i++) {
        rowElement[i].classList.remove("active");
    }
    itIsId.classList.add("active");

    // hours trigger //

    let hoursSel = document.querySelectorAll('.hours-sel');
    let timeHours = hoursSel[hours-1];

    if(timeMinutes >= 35) {
        timeHours = hoursSel[hours];
    }
    for (let i = 0; i < hoursSel.length; i++) {
        hoursSel[i].classList.remove("active");
    }
    timeHours.classList.add("active");


    // minutes trigger //

    let halfId = document.querySelector('#half-id');
    let tenId = document.querySelector('#ten-id');
    let quarterId = document.querySelector('#quarter-id');
    let twentyId = document.querySelector('#twenty-id');
    let fiveId = document.querySelector('#five-id');
    let minutesId = document.querySelector('#minutes-id');
    let toId = document.querySelector('#to-id');
    let pastId = document.querySelector('#past-id');
    let clockId = document.querySelector('#clock-id');

    // hour : 00
    if(timeMinutes >= 0 && timeMinutes <= 4) {
        clockId.classList.add("active");
    }

    // hour : 05
    if(timeMinutes >= 5 && timeMinutes <= 9) {
        fiveId.classList.add("active");
        minutesId.classList.add("active");
        pastId.classList.add("active");
    }

    // hour : 10
    if(timeMinutes >= 10 && timeMinutes <= 14) {
        tenId.classList.add("active");
        minutesId.classList.add("active");
        pastId.classList.add("active");
    }

    // hour : 15
    if(timeMinutes >= 15 && timeMinutes <= 19) {
        quarterId.classList.add("active");
        pastId.classList.add("active");
    }

    // hour : 20
    if(timeMinutes >= 20 && timeMinutes <= 24) {
        twentyId.classList.add("active");
        minutesId.classList.add("active");
        pastId.classList.add("active");
    }

    // hour : 25
    if(timeMinutes >= 25 && timeMinutes <= 29) {
        twentyId.classList.add("active");
        fiveId.classList.add("active");
        minutesId.classList.add("active");
        pastId.classList.add("active");
    }

    // hour : 30
    if(timeMinutes >= 30 && timeMinutes <= 34) {
        halfId.classList.add("active");
        pastId.classList.add("active");
    }

    // hour : 35
    if(timeMinutes >= 35 && timeMinutes <= 39) {
        twentyId.classList.add("active");
        fiveId.classList.add("active");
        minutesId.classList.add("active");
        toId.classList.add("active");
    }

    // hour : 40
    if(timeMinutes >= 40 && timeMinutes <= 44) {
        twentyId.classList.add("active");
        minutesId.classList.add("active");
        toId.classList.add("active");
    }

    // hour : 45
    if(timeMinutes >= 45 && timeMinutes <= 49) {
        quarterId.classList.add("active");
        toId.classList.add("active");
    }

    // hour : 50
    if(timeMinutes >= 50 && timeMinutes <= 54) {
        tenId.classList.add("active");
        minutesId.classList.add("active");
        toId.classList.add("active");
    }

    // hour : 55
    if(timeMinutes >= 55 && timeMinutes <= 59) {
        fiveId.classList.add("active");
        minutesId.classList.add("active");
        toId.classList.add("active");
    }
}
setInterval(timeStatus, 1000); 

