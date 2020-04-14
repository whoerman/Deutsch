console.log("run noun.js");

//Click button
$("#newNoun").on("click", function (event) {
  event.preventDefault();
  if (
    !$("#genderselect").val() ||
    !$("#singularnoun").val() ||
    !$("#pluralnoun").val() ||
    !$("#englishdefinition").val()
  ) {
    alert("Looks like your forgot to input something!");
    return;
  };

  let newNounText = {
    gender: $("#genderselect").val().trim(),
    singular: $("#singularnoun").val().trim(),
    plural: $("#pluralnoun").val().trim(),
    english: $("#englishdefinition").val().trim(),
  };

  let newNounType = {
    person: $("#personselect").val().trim(),
    animal: $("#animalselect").val().trim(),
    thing: $("#thingselect").val().trim(),
    place: $("#placeselect").val().trim(),
    abstract: $("#abstractselect").val().trim(),
  };

  let newNounSituation = {
    athome: $("#athomeselect").val().trim(),
    atwork: $("#atworkselect").val().trim(),
    dining: $("#diningselect").val().trim(),
    hotel: $("#hotelselect").val().trim(),
    travel: $("#travelselect").val().trim(),
    people: $("#peopleselect").val().trim(),
    events: $("#eventsselect").val().trim(),
    shopping: $("#shoppingselect").val().trim(),
  };

  let newNounData = {...newNounText, ...newNounType, ...newNounSituation};

  console.log(newNounData);
});







// $.ajax({
//   method: "POST",
//   url: "/api/newCompany",
//   data: companyData,
// }).then(function () {
//   window.location.href = "/login";
// });