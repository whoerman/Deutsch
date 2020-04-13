$(document).ready(function () {
    $("#newNoun").on("submit", function (event) {
      event.preventDefault();
  
      if (
        !$("#genderselect").val() ||
        !$("#singularnoun").val() ||
        !$("#pluralnoun").val()
      ) {
        alert("Looks like your forgot to input something!");
        return;
      }
  
      let newNounData = {
        gender: $("#genderselect").val().trim(),
        singularnoun: $("#singularnoun").val().trim(),
        pluralnoun: $("#pluralnoun").val().trim(),
        person: $("#personselect").val().trim(),
        animal: $("#animalselect").val().trim(),
        thing: $("#thingselect").val().trim(),
        place: $("#placeselect").val().trim(),
        athome: $("#athomeselect").val().trim(),
        atwork: $("#atworkselect").val().trim(),
        dining: $("#diningselect").val().trim(),
        hotel: $("#hotelselect").val().trim(),
        travel: $("#travelselect").val().trim(),
        people: $("#peopleselect").val().trim(),
        events: $("#eventsselect").val().trim(),
        shopping: $("#shoppingselect").val().trim(),
      };
  
      console.log(newNounData);
  
    //   $.ajax({
    //     method: "POST",
    //     url: "/api/newNoun",
    //     data: newNounData,
    //   }).then(function () {
    //     window.location.href = "/login";
    //   });
    });
  });