// index.js - creating a form to insert your name with javascript
// Author: Bianca <burban@ucsc.edu>
// Date: May 15, 2023

// Constants

// Functions

// sortUserName takes user input and rearranges the letters

var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");

buttonEl.addEventListener("click", function(){
    var userName = document.getElementById("user-name").value;
    // split string to array
    var nameArray = userName.split('');
    // array gets sorted
    var nameArraySort = nameArray.sort();
    // array gets joined back to the string
    var nameSorted = nameArraySort.join('');
    document.getElementById("output").innerHTML = nameSorted;
})
