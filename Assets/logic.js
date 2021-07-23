var timeDisplayEl = $('#currentDay')
var today = moment().format('MMMM Do YYYY, h:mm:ss a')

//displays date and time realtime
function displayTime(){
    var today = moment().format('MMMM Do YYYY, [at] h:mm:ss a')
    timeDisplayEl.text(today)
}

//set current hour
var currentHour = moment().hour()
console.log(currentHour)
//determine block time and check block time against current time
$('.time-block').each(function(){
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);

    if (currentHour > blockHour){
        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future');
    }

    else if(currentHour < blockHour){
        $(this).removeClass('future')
        $(this).removeClass('past')
        $(this).addClass('present');
    }

    else if (currentHour === blockHour){
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }

})

setInterval(displayTime, 1000)