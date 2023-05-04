// index.js - creating anonymous functions
// Author: Bianca and Kira
// Date: May 4, 2023

// Constants

// Functions

var array = [3,6,8,41,9001]

function add(num) {
  return num - 1;
}

console.log(array.map(add));
console.log(array.map(function(num) {
  return num + 1;
}));