$(document).ready(function(){  
    


//Add the time in /MM/DD/YYYY format
    $("#currentDay").text(moment().format('MMMM Do YYYY'));


    //LocalStorage Function
    function fillInTextArea() { 
        for (var i = 9; i < 18; i++){
       var hour = i
            if (i > 12) {  
                hour = i - 12 //subtract 12 to have 12 hours format 
                
            }
            var text = localStorage.getItem(hour);
            $("#input-" + hour).val(text)
        }
    }


    //Dynamically generate rows for timeblocks
    for (var i = 9; i < 18; i++){
        var currentHour = moment().hours();
        var hour = i
        var timeMeridiem = 'AM'
        var scheduleColorClass = ''

        
        if (i > 12) { 
            hour = i - 12
            timeMeridiem = 'PM'
        }

        if (i === currentHour) { 
            scheduleColorClass = 'present'
        } else if (i < currentHour) {
            scheduleColorClass = 'past'
        } else if (i > currentHour) { 
            scheduleColorClass = 'future'
        }


        $(".container").append($(`<div class='row time-block'>` + `<span class='hour col-1'>` + hour + timeMeridiem + `</span >` + `<textarea class="col-10 ${scheduleColorClass}"  id=${'input-' + hour}></textarea>` + `<button id=${hour} class='btn fa fa-save col-1 saveBtn'>` + `</button>`));
    }


    fillInTextArea()
     
//Event Listener 
    $(".saveBtn").on("click", function () {
        console.log("click", $(this).attr("id"))
        console.log('what we typed!!', $('#input-' + $(this).attr("id")).val())
        var storeActivities = $(this).attr("id");
        localStorage.setItem(storeActivities, $('#input-' + $(this).attr("id")).val())
        arrayActivities.push($('#input-' + $(this).attr("id")).val());

    });


});