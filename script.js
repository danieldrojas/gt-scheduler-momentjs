$(document).ready(function(){
    
    console.log("Inside jquery function");

    //Variables



    //Set content
    $("#currentDay").text(moment().format('MMMM Do YYYY'));
 console.log()

    //
     

    //timeblocks 
    for (var i = 9; i < 18; i++){
        var timeblockEl = $("<div class='row'>" + i + 'am'  + "<div class='col alert alert-warning' >" + 'activities goes in here' + "<button class='btn btn-primary' style='float: right'>" + 'sve img' + "</button></div>");
        $(".container").append(timeblockEl);


    }
    // <div class="row">
    //     <div class="col">
    //         <div id="timeblock" class="alert alert-warning" role="text">
    //             <strong>Holy guacamole!</strong> You should check in on some of those fields
    //                 below.
    //                 <button class="btn btn-primary" style="float: right" >save pic</button>

    //         </div>
    //     </div>
    // </div>


















});