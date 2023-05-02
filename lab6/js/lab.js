// index.js - makind a list of all transportational rides we've gone on
// Author: Bianca Urban <burban@ucsc.edu>
// Date: May 1, 2023

// Define Variables
myTransport = ["bus", "car"];

// create an object for my main ride
 var myMainRide = {
    make: "spaceship",
    model: "Sputnik",
    color: "white",
    year: 1957,
    age: function(){
      return 2023 - this.year;
  }
}
// output  myTransport
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
//output myMainRide
document.writeln("My main ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t', "<pre>"));