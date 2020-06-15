$(document).ready(function(){
    
    console.log("Inside jquery function");

    //Variables
    // var column3 = $("<button>")
    //     .addClass("col-sm-1 saveBtn")
    //     .html("<i class='fas fa-save'></i>");
    // var time = {
    //     txtHours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]
    // }
    // timeIndex = 0;



    //Set content
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    // var colTime = $("<div>");
    // colHour.addClass(".hour");
     
    console.log('THis moment .hours!!', moment().format('h'), moment().hours());   // 7:21 PM


    //timeblocks 
    for (var i = 9; i < 18; i++){
        var currentHour = 13
        var hour = i
        var timeCode = 'AM'
        var scheduleColorClass = ''

        
        if (i > 12) { 
            hour = i - 12
            timeCode = 'PM'
        }

        if (i === currentHour) { 
            scheduleColorClass = 'present'

        } else if (i < currentHour) {
            scheduleColorClass = 'past'
        } else if (i > currentHour) { 
            scheduleColorClass = 'future'
        }


        $(".container").append($(`<div class='row time-block ${scheduleColorClass}'>` + hour + timeCode + "<div class='col-8 alert' >" + `<textarea id=${'input-' + hour}></textarea>` + `<button id=${hour} class='btn saveBtn' style='float: right'>` + 'sve img' + "</button></div>"));
    }
     

    $(".saveBtn").on("click", function () {
        console.log("click", $(this).attr("id"))
        console.log('what we typed!!', $('#input-' + $(this).attr("id")).val())
        var storeActivities = $(this).attr("id");
        localStorage.setItem(storeActivities, $('#input-' + $(this).attr("id")).val())    

    })


    
    // way to organize thing sin the localstorage use this structure!!
    //[{ 9: 'hello' }, { 10: 'yess' }, {11: 'lunch'}]
    //[{9: 'yesss'}]
    //JSON.stringify()
    //JSON.parse()




    
    // <div class="row">
    //     <div class="col">
    //         <div id="timeblock" class="alert alert-warning" role="text">
    //             <strong>Holy guacamole!</strong> You should check in on some of those fields
    //                 below.
    //                 <button class="btn btn-primary" style="float: right" >save pic</button>

    //         </div>
    //     </div>
    // </div>

    // for (var i = 0; i < 18; i++) {
    //     $(".container").append($("<div class='row'>" + i + 'AM' + "<div class='col-8 alert alert-warning' >" + 'activities goes in here' + "<button class='btn bsaveBtn' style='float: right'>" + 'sve img' + "</button></div>"));
    // }

  

  

















});