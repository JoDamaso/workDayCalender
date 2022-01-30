// Getting date and time via moment.js
var currentDate = moment().format('MMMM Do YYYY, h:mm a');
// Targetting with a 'p' element with id of #currentDay
$("#currentDay").html(currentDate);

const presentTime = parseInt(moment().hour());
console.log(presentTime);

$(document).ready(function() {
    // jQuery targetting that will listen for the click after user has saved their input on text area
    $(".btn").on("click", function() {
        var time = $(this).parent().attr("id");
        var textValue = $(this).siblings(".description").val();
        console.log(textValue)
    // Save text in local storage
        localStorage.setItem(time, textValue);
    });

    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    $("textarea").each(function() {
        var textInput = parseInt($(this));

        if (textInput < presentTime) {
            $(this).addClass("past");
        } 
        if (textInput === presentTime) {
            $(this).addClass("present");
        } 
        if (textInput > presentTime) {
            $(this).addClass("future");
        }
    })
});





// function time (hour) {
//     const block = hour < 8 ? "PM":"AM"

//     var saveButton = document.createElement("button");
//     var event = document.createElement("textarea");
//     var divEl1 = document.createElement("div");
//     var divEl2 = document.createElement("div");

//     $(divEl1).attr("id", `${hour}${block}`);

//     $(divEl1).addClass("row time-block");
//     $(event).addClass("col-md-10 descripton");
//     $(saveButton).addClass("col-md-1 saveBtn btn");
//     $(divEl2).addClass("col-md-1 hour");

//     $(divEl2).text(`${hour}:00${block}`);
    
//     $(divEl1).append(divEl2);
//     $(divEl1).append(event);
//     $(divEl1).append(saveButton);
//     return divEl1;
// };


// function generateTimeBlock () {
//     var dom = $("#time-container");

//     for (var i = 8; i !== 6; i++) {
//         if (i == 13) {
//             i = 1
//         }
//         $(dom).append(time(i));
//     }
    
// };

// generateTimeBlock();
// DONE
// 1. Display the current date at the top of the calendar
// 	-google: how to get the current date in javascript
// 		-how to use dates in javascript


// 2. Render time blocks
// 	-hard code in html using rows and cols
// 	-loop over and render the table rows and cols in javascript
// Set the first div under container to have class="row"
// Figure out which number of coloumns to use 

// 3. Color-code time blocks for past, present and future
// 	-javascript, css, jquery
// 	-if then statements that relate to the date and apply certain css properties
// 	(select html elements in javascript - and add css to it)
// if statements nested in an each() function - uses jQuery


// 4. Allow user to type in event in timeblocks - use textarea element
// 	-input fields, with text saved in local storage
// 	-attribute that indicates time-block on input fields
// 	-On SAVE: store the date/time as the key and the event as the value
// 		-create an event listener for the save button that puts this key, 	
// 		value pair into local storage

// 5. On refresh, grab the data from local storage and display it in the apppropriate time block.
