console.log("run verbreg.js");

//Click button
$("#newVerb").on("click", function (event) {
  event.preventDefault();

 //make sure all the forms have data
 if (
  !$("#verb").val() ||
  !$("#englishdefinition").val() 
) {
  alert("Looks like your forgot to input something!");
  return;
};

//seperate form groups becuase of multiple handlebars
let newVerbText = {
  germanverb: $("#verb").val().trim(),
  englishdefinition: $("#englishdefinition").val().trim(),
};

let newVerbSituation = {
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
let newVerbData = {
  ...newVerbText,
  ...newVerbSituation
};

//change yes no responses to true false (object to array first)
const newVerbArray = Object.entries(newVerbData);
newVerbArray.forEach(function (index) {
  if (index[1] === "Yes") {
    index[1] = true
  };
  if (index[1] === "No") {
    index[1] = false
  }
});

//changing the array back to an object
let finalregVerbObj = newVerbArray.reduce(function (aspect, curr) {
  aspect[curr[0]] = curr[1];
  return aspect;
}, {});

console.log(finalregVerbObj);

console.log ("then i will post finalregVerbObj");

$.ajax({
  method: "POST",
  url: "/api/verbreg",
  data: finalregVerbObj,
}).then(function (response) {
  console.log(response)
});

});

