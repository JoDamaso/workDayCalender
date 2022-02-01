// Getting date and time via moment.js
var currentDate = moment().format('MMMM Do YYYY, h:mm a');
// Targetting with a 'p' element with id of #currentDay
$("#currentDay").html(currentDate);
// var a = moment()a.hour

const presentTime = moment();
console.log(presentTime);
// .ready will begin whenever the page is fully loaded then you may mess with the page
$(document).ready(function() {
    // jQuery targetting that will listen for the click after user has saved their input on text area
    $(".btn").on("click", function() {
        var time = $(this).parent().attr("id");
        var textValue = $(this).siblings(".description").val();
        console.log(textValue)
    // Save text in local storage
        localStorage.setItem(time, textValue);
    });
    // gets localStorage for each ID time slot and spits out the value that was saved to it from the button
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

    // targets the textarea to set the highlighting on time sensitive events on your day. 
    $("textarea").each(function() {
        var timeToCheck = parseInt($(this).attr("id"));
        
        if (timeToCheck < presentTime.hour()) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } 
        if (timeToCheck === presentTime.hour()) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        } 
        if (timeToCheck > presentTime.hour()) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
});

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
