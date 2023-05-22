// index.js - conditionals
// Author: Bianca and Kira
// Date: May 22, 2023

function SortingHat(name){
  var student = name.split("");
  console.log(student); 
  var length = student.length;
  var mod = length % 4;
  var house = "Slytherin";
  if (mod == 0) {
    console.log(mod);
    var house = "Hufflepuff";
  }
  if (mod == 1) {
    console.log(mod);
    var house = "Griffindor";
  }
  if (mod == 2) {
    console.log(mod);
    var house = "Ravenclaw";
  }
  return house; 
}

$("#button").click(function(){
  var name = $("#input").val();
  var house = SortingHat(name); 
  $("#output").append("<p>Your house is " + house + "!</p>");
})