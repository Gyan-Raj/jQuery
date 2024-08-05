$("p").css("fontSize"); // Returns a string such as "16px".
$("p").css("font-size"); // Also works.

// Setting an individual property.
$("pre").css("color", "blue");
// Setting multiple properties.
$("pre").css({
  borderRight: "1px solid blue",
  borderTop: "1px solid blue",
});

// Working with classes.
var h3 = $("h3");
h3.addClass("big");
h3.addClass("veryBig");
h3.removeClass("biveryBigg");
$("button").click(() => {
  h3.toggleClass("highlight");
  if (h3.hasClass("highlight")) {
    alert("highlight class toggled");
  }
});

// Basic dimensions methods.
// Sets the width of all <h1> elements.
$(".big").width("auto");

// Gets the width of the first <h1> element.
console.log($(".big").width());

// Sets the height of all <h1> elements.
$(".big").height("50px");

// Gets the height of the first <h1> element.
console.log($(".big").height());

// Returns an object containing position information for
// the first <h1> relative to its "offset (positioned) parent".
console.log($(".big").position());
