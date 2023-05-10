// index.js - creating javascript in the web
// Author: Bianca and Kira
// Date: May 10, 2023

// Constants

// Functions

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");

var new2El = document.createElement("p");

new2El.innerHTML = "lol lmao"

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

otherEl = document.getElementsByClassName("minor-section");

otherEl[0].style.color = 'white'
otherEl[0].style.border = 'solid 10px red'