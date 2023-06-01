// index.js - ajax
// Author: Bianca <burban@ucsc.edu>
// Date: May 31, 2023

function getData(){
    console.log("Hit me!");
    $.ajax({
        url: "https://yesno.wtf//api",
        data: {},
        type: "GET", 
        answer: "yes",
        forced: "false",     
    })
    .done(function(data){
        //console.log(data)
        console.log(data);
        var answer = data.answer;
        var imgURL = data.image;
        $("output").html("<h>" + answer);
        $("output").append("<img src=" + imgURL + ">");
    })
}

$("button").click(getData);