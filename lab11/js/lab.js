// index.js - using jQuery on the library
// Author: Bianca <burban@ucsc.edu>
// Date: May 17, 2023

// Constants

// Functions

$("button.goldenrod").click(function(){
    $("#Challenge").removeClass("plum");
    $("#Challenge").toggleClass("goldenrod");
});

$("button.plum").click(function(){
    $("#Challenge").removeClass("goldenrod");
    $("#Challenge").toggleClass("plum");
});

$("button.goldenrod1").click(function(){
    $("#Problems").removeClass("plum");
    $("#Problems").toggleClass("goldenrod");
});
$("button.plum1").click(function(){
    $("#Problems").removeClass("goldenrod");
    $("#Problems").toggleClass("plum");
});

$("button.goldenrod2").click(function(){
    $("#Reflection").removeClass("plum");
    $("#Reflection").toggleClass("goldenrod");
});

$("button.plum2").click(function(){
    $("#Reflection").removeClass("goldenrod");
    $("#Reflection").toggleClass("plum");
});
