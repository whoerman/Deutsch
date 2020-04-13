$(document).ready(function () {
  function arrayToObject(arr) {
    const Obj = {};
    arr.forEach((element) => {
      Obj[element.name] = element.value;
    });
    return Obj;
  }

  //EVENTS
  $("#newNoun").on("submit", function (event) {
    event.preventDefault();
    const formArray = $(event.currentTarget).serializeArray();
    const contactData = arrayToObject(formArray);
    console.log(contactData);
  });
});
  
    //   $.ajax({
    //     method: "POST",
    //     url: "/api/newNoun",
    //     data: newNounData,
    //   }).then(function () {
    //     window.location.href = "/login";
    //   });