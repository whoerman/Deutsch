console.log("run datadisplay.js");

//button events from the datadisplay page
$("#nounDisplay").on("click", function (event) {
  $.ajax({
    method: "GET",
    url: "/api/noun",
  }).then(function (response) {
    $(".displayDiv").empty();
    console.log(response);
    let nounDisplay = $.parseHTML(response);
    $(".displayDiv").append(nounDisplay)
  });

});

$("#adjectiveDisplay").on("click", function (event) {
  $.ajax({
    method: "GET",
    url: "/api/adjective",
  }).then(function (response) {
    $(".displayDiv").empty();
    console.log(response);
    let adjectiveDisplay = $.parseHTML(response);
    $(".displayDiv").append(adjectiveDisplay)
  });
});

$("#adverbDisplay").on("click", function (event) {
  console.log("Adjective List");
  $.ajax({
    method: "GET",
    url: "/api/adverb",
  }).then(function (response) {
    $(".displayDiv").empty();
    console.log(response);
    let adverbDisplay = $.parseHTML(response);
    $(".displayDiv").append(adverbDisplay)
  });
});

$("#phraseDisplay").on("click", function (event) {
  console.log("phraseDisplay");
  $(".displayDiv").append("<p>The Phrase database</p>");

});

$("#prepositionDisplay").on("click", function (event) {
  $.ajax({
    method: "GET",
    url: "/api/preposition",
  }).then(function (response) {
    $(".displayDiv").empty()
    console.log(response);
    let prepositionDisplay = $.parseHTML(response);
    $(".displayDiv").append(prepositionDisplay)
  });
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