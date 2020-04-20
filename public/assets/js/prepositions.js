console.log("run prepositions.js");

//Click button
$("#newPrepostion").on("click", function (event) {
  event.preventDefault();

 //make sure all the forms have data
 if (
  !$("#preposition").val() ||
  !$("#englishdefinition").val() 
) {
  alert("Looks like your forgot to input something!");
  return;
};

//seperate form groups becuase of multiple handlebars
let newPrepositionText = {
  preposition: $("#preposition").val().trim(),
  englishdefinition: $("#englishdefinition").val().trim(),
  prepositiontype: $("#prepositiontype").val().trim(),
};

let newPrepositionSituation = {
  athome: $("#athomeselect").val().trim(),
  atwork: $("#atworkselect").val().trim(),
  dining: $("#diningselect").val().trim(),
  hotel: $("#hotelselect").val().trim(),
  travel: $("#travelselect").val().trim(),
  people: $("#peopleselect").val().trim(),
  events: $("#eventsselect").val().trim(),
  shopping: $("#shoppingselect").val().trim(),
};

//put all the data into one noun object
let newPrepositionData = {
  ...newPrepositionText,
  ...newPrepositionSituation
};

//change yes no responses to true false (object to array first)
const newPrepositionArray = Object.entries(newPrepositionData);
newPrepositionArray.forEach(function (index) {
  if (index[1] === "Yes") {
    index[1] = true
  };
  if (index[1] === "No") {
    index[1] = false
  }
});

//changing the array back to an object
let finalPrepositionObj = newPrepositionArray.reduce(function (aspect, curr) {
  aspect[curr[0]] = curr[1];
  return aspect;
}, {});

console.log(finalPrepositionObj);

console.log ("then i will post finalPrepositionObj")

$.ajax({
  method: "POST",
  url: "/api/preposition",
  data: finalPrepositionObj,
}).then(function (response) {
  console.log(response)
});

});

