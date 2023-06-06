// index.js - ajax
// Author: Bianca <burban@ucsc.edu>
// Date: June 5, 2023

function comic(){
    $.ajax({
        url: "https://xkcd.com/info.0.json",
        type: "GET",
        dataType: "json",
        success: function(data){
            var comicObj = data;
            // Process the data and add it to your webpage
            $("#output").append('<h1>' + comicObj.title + '</h1>');
            $("#output").append('<imp src = "' + comicObj.img + '"alt ="' + comicObj.alt + '"title ="' + comicObj.alt + '">');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", error);
        },
    });  
}

function main() {
    console.log("Main function started.");
    // the code that makes everything happen
    comic();
}

// let's get started now
main();