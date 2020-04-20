console.log("run adverb.js");

//Click button
$("#newAdverb").on("click", function (event) {
  event.preventDefault();

 //make sure all the forms have data
 if (
  !$("#adverb").val() ||
  !$("#englishdefinition").val() 
) {
  alert("Looks like your forgot to input something!");
  return;
};

//seperate form groups becuase of multiple handlebars
let newAdverbText = {
  germanadverb: $("#adverb").val().trim(),
  englishdefinition: $("#englishdefinition").val().trim(),
  type: $("#adverbtype").val().trim(),
};

let newAdverbSituation = {
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
let newAdverbData = {
  ...newAdverbText,
  ...newAdverbSituation
};

//change yes no responses to true false (object to array first)
const newAdverbArray = Object.entries(newAdverbData);
newAdverbArray.forEach(function (index) {
  if (index[1] === "Yes") {
    index[1] = true
  };
  if (index[1] === "No") {
    index[1] = false
  }
});

//changing the array back to an object
let finalAdverbObj = newAdverbArray.reduce(function (aspect, curr) {
  aspect[curr[0]] = curr[1];
  return aspect;
}, {});

console.log(finalAdverbObj);

console.log ("then i will post finalAdverbObj")

$.ajax({
  method: "POST",
  url: "/api/adverb",
  data: finalAdverbObj,
}).then(function (response) {
  console.log(response)
});

});

