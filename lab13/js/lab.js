// index.js - creating loops
// Author: Bianca <burban@ucsc.edu>
// Date: May 24, 2023

var oneLongString = "";

function fizzbuzz (i){
    for (i=1; i<=200;i++) {
        if (i%105==0){
            oneLongString += i + " FizzBuzzBoom<br>";
            console.log("FizzBuzzBoom");
        } else if (i%35==0){
            oneLongString += i + " BuzzBoom<br>";
            console.log("BuzzBoom");
        } else if (i%15==0){
            oneLongString += i + " FizzBoom<br>";
            console.log("FizzBuzz");
        } else if (i%21==0){
            oneLongString += i + " FizzBoom<br>";
            console.log("FizzBoom")
        }  else if (i%3 == 0){
            oneLongString += i + " Fizz<br>";
            console.log("Fizz");
        } else if (i%5 == 0){
            oneLongString += i + " Buzz<br>";
            console.log("Buzz");
        } else if (i%7 ==0){
            oneLongString += i + " Boom<br>";
            console.log("Boom");
        } else {
            console.log(i);
        }   
    }   
    $("#output").html(oneLongString); 
}

fizzbuzz();