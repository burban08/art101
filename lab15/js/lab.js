// index.js - ajax
// Author: Bianca <burban@ucsc.edu>
// Date: May 31, 2023

function getData(){
    console.log("clicked");
    // Using the core $.ajax() method
    $.ajax({
            url: "https://yesno.wtf/api",
            type: "GET",
            data: {},
            //dataType: "json",
    })
    .done(function(data) {
        //var out = $("#output");
        console.log(data.answer);
        console.log(data.image);
        $("#output").append('<img id="theImg" src= ' + data.image + '>');
        //out.html(data.answer);
        // do stuff
    })
}

$("button").click(getData);