console.log("run adverb.js");

//Click button
$("#newAdjective").on("click", function (event) {
  event.preventDefault();

 //make sure all the forms have data
 if (
  !$("#adjective").val() ||
  !$("#englishdefinition").val() 
) {
  alert("Looks like your forgot to input something!");
  return;
};

//seperate form groups becuase of multiple handlebars
let newAdjectiveText = {
  germanphrase: $("#adverb").val().trim(),
  englishphrase: $("#englishdefinition").val().trim(),
  type: $("#adverbtype").val().trim(),
};

let newAdjectiveSituation = {
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
let newAdjectiveData = {
  ...newAdjectiveText,
  ...newAdjectiveSituation
};

//change yes no responses to true false (object to array first)
const newAdjectiveArray = Object.entries(newAdjectiveData);
newAdjectiveArray.forEach(function (index) {
  if (index[1] === "Yes") {
    index[1] = true
  };
  if (index[1] === "No") {
    index[1] = false
  }
});

//changing the array back to an object
let finalAdjectiveObj = newAdjectiveArray.reduce(function (aspect, curr) {
  aspect[curr[0]] = curr[1];
  return aspect;
}, {});

console.log(finalAdjectiveObj);

console.log ("then i will post finalAdjectiveObj")
});

