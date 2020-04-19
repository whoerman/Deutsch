console.log("run noun.js");


//Click button to get all the form inputs
$("#newNoun").on("click", function (event) {
  event.preventDefault();

  //make sure all the forms have data
  if (
    !$("#genderselect").val() ||
    !$("#singularnoun").val() ||
    !$("#pluralnoun").val() ||
    !$("#englishdefinition").val()
  ) {
    alert("Looks like your forgot to input something!");
    return;
  };

  //seperate form groups becuase of multiple handlebars
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

  //put all the data into one noun object
  let newNounData = {
    ...newNounText,
    ...newNounType,
    ...newNounSituation
  };

  //change yes no responses to true false (object to array first)
  const newNounArray = Object.entries(newNounData);
  newNounArray.forEach(function (index) {
    if (index[1] === "Yes") {
      index[1] = true
    };
    if (index[1] === "No") {
      index[1] = false
    }
  });

  //changing the array back to an object
  let finalNounObj = newNounArray.reduce(function (aspect, curr) {
    aspect[curr[0]] = curr[1];
    return aspect;
  }, {});

  console.log(finalNounObj)

  console.log("then I will post the finalNounObj")

  // $.ajax({
  //   method: "POST",
  //   url: "/api/newNoun",
  //   data: companyData,
  // }).then(function () {
  //   window.location.href = "/login";
  // });

});

