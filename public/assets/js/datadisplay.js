console.log("run datadisplay.js");

//button events from the datadisplay page
$("#nounDisplay").on("click", function (event) {
    console.log("nounDisplay");
    $(".displayDiv").append("<p>The Noun database</p>");

});

$("#adjectiveDisplay").on("click", function (event) {
    console.log("adjectiveDisplay");
    $(".displayDiv").append("<p>The Adjective database</p>");

    // get the noun Object to the noun database
    //   $.ajax({
    //     method: "GET",
    //     url: "/noun/:id",
    //     data: ,
    //   }).then(function (response) {
    //     console.log(response)
    //   });
});

$("#adverbDisplay").on("click", function (event) {
    console.log("adverbDisplay");
    $(".displayDiv").append("<p>The Adverb database</p>");

});

$("#phraseDisplay").on("click", function (event) {
    console.log("phraseDisplay");
    $(".displayDiv").append("<p>The Phrase database</p>");

});

$("#prepositionDisplay").on("click", function (event) {
    console.log("prepositionDisplay");
    $(".displayDiv").append("<p>The Prepostion database</p>");

});

$("#regVerbDisplay").on("click", function (event) {
    console.log("regVerbDisplay");
    $(".displayDiv").append("<p>The Regular Verb database</p>");

});

$("#irregVerbDisplay").on("click", function (event) {
    console.log("irregVerbDisplay");
    $(".displayDiv").append("<p>The Irregular Verb database</p>");
});

$("#clearDisplay").on("click", function (event) {
    console.log("clearDisplay");
    $(".displayDiv").empty();
});