$(document).ready(function () {
  var currentFloor = 2; // Current floor stored in a variable
  var floorPath = $(".home-image path"); // Every single floor in SVG
  var counterUp = $(".counter-up"); /* Floor up button */
  var counterDown = $(".counter-down"); /* Floor down button */

  // Mouseover funtion for the floor
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // Removing active class of the floor
    currentFloor = $(this).attr("data-floor"); // Getting current value of the floor
    $(".counter").text(currentFloor); // Writing down the value of the floor to the counter on a right
  });

  // Tracking down the click on a up button
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      // Checking the floor value, it can't be more then 18
      currentFloor++; // + 1 floor
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      }); // Formating variable with the floor, so the number of the floor will be displayed as 02 instead just 2
      $(".counter").text(usCurrentFloor); // Writing down the value of the floor to the counter on a right
      floorPath.removeClass("current-floor"); // Removing highlighted class of the floor
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Highlighting current floor
    }
  });

  // Tracking down the click on a down button
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      // Checking the floor value, it can't be less then 2
      currentFloor--; // - 1 floor
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      }); // Formating variable with the floor, so the number of the floor will be displayed as 02 instead just 2
      $(".counter").text(usCurrentFloor); // Writing down the value of the floor to the counter on a right
      floorPath.removeClass("current-floor"); // Removing active class of the floor
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Highlighting current floor
    }
  });
});
