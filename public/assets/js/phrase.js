console.log("run phrase.js");

//Click button
$("#newPhrase").on("click", function (event) {
  event.preventDefault();

 //make sure all the forms have data
 if (
  !$("#germanphrase").val() ||
  !$("#englishphrase").val() 
) {
  alert("Looks like your forgot to input something!");
  return;
};

//seperate form groups becuase of multiple handlebars
let newPhraseText = {
  germanphrase: $("#germanphrase").val().trim(),
  englishphrase: $("#englishphrase").val().trim(),
  englishphrase2: $("#englishphrase2").val().trim(),
};

let newPhraseSituation = {
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
let newPhraseData = {
  ...newPhraseText,
  ...newPhraseSituation
};

//change yes no responses to true false (object to array first)
const newPhraseArray = Object.entries(newPhraseData);
newPhraseArray.forEach(function (index) {
  if (index[1] === "Yes") {
    index[1] = true
  };
  if (index[1] === "No") {
    index[1] = false
  }
});

//changing the array back to an object
let finalPhraseObj = newPhraseArray.reduce(function (aspect, curr) {
  aspect[curr[0]] = curr[1];
  return aspect;
}, {});

console.log(finalPhraseObj)
});

