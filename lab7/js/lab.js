// index.js - creating a function of our own 
// Author: Bianca Urban <burban@ucsc.edu>
// Date: May 3, 2023

// Constants

// Functions

// sortUserName - a function that takes user input and sorts the letters
// of their name

function sortUserName(userName) {
  var userName = window.prompt("Hello there! Please enter your name here!");
  var nameArray = userName.split('');
  var nameArraySort = nameArray.sort().reverse;
  var nameSorted = nameArraySort.join('');
  return nameSorted;
}

function main() {
  document.writteln("This is what I came up with using your name! Here it is: ",
    JSON.stringify(sortUserName(), "</br>"));
}

main();
 

