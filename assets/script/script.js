// Getting date and time via moment.js
var currentDate = moment().format('MMMM Do YYYY, h:mm a');
// Targetting with a 'p' element with id of #currentDay
$("#currentDay").html(currentDate);

// jQuery targetting that will listen for the click after user has saved their input on text area

function time (hour) {
    const block = hour < 8 ? "PM":"AM"
    
    var saveButton = document.createElement("button");
    var textArea = document.createElement("textarea");
    var divEl1 = document.createElement("div");
    var divEl2 = document.createElement("div")
    $(divEl1).attr("id", `${hour}${block}`);
    
    $(divEl1).addClass("row time-block");
    $(textArea).addClass("col-md-10");
    $(saveButton).addClass("col-md-1 saveBtn");
    $(divEl2).addClass("col-md-1 hour");
    
    $(divEl2).text(`${hour}:00${block}`);
    
    $(divEl1).append(divEl2);
    $(divEl1).append(textArea);
    $(divEl1).append(saveButton);
    
    
    $(saveButton).on("click", function() {
        
    
        localStorage.setItem();
    });

    return divEl1;
}

function generateTimeBlock () {
    var dom = $("#time-container");
    

    for (var i = 8; i !== 6; i++) {
        if (i == 13) {
            i = 1
        }
        $(dom).append(time(i));
    }
    
}

generateTimeBlock();

// <div id="8am" class="row time-block">
// <div class="col-md-1 hour">8:00 AM</div>
// <textarea class="col-md-10"></textarea>
// <button class="col-md-1 saveBtn"></button>
// </div>







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