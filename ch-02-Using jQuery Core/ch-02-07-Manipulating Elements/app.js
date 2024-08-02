$("#gettingSetting h3:first").html(
  "Getting and Setting Information About Elements"
);

// Moving elements
// Make the first list item the last list item:
var li = $("#movingElements1 li:first").appendTo("#movingElements1");

// Another approach to the same problem:
$("#movingElements2").append($("#movingElements2 li:first"));
// Note that there's no way to access the list item that we moved, as this returns the list itself.

//cloning: Making a copy of an element.
// let us add an event
$("#cloningElements1 button, #cloningElements2 button").click(function () {
  alert("Item clicked: " + $(this).text());
});
// Clone without copying data and events
$("#cloningElements1 button:first").clone().appendTo("#cloningElements1");
//If you need to copy related data and events, be sure to pass true as an argument to .clone(). Clone with copying data and events
$("#cloningElements2 button:first").clone(true).appendTo("#cloningElements2");

//remove
let remove = $("#remove").remove();
console.log(remove); // ce.fn.init {0: p#remove, length: 1} =>.remove() does return the removed element(s)
//detach
let detach = $("#detach").detach();
console.log(detach); // ce.fn.init {0: p#detach, length: 1} =>.detach() does return the removed element(s)
//empty
let empty = $("#empty").empty();
console.log(empty); // ce.fn.init {0: p#empty, length: 1} =>.empty() also returns the removed element(s)

// Creating new elements from an HTML string and adding the element to the page at the same time.
$(
  "<p>jQuery offers a trivial and elegant way to create new elements using the same $() method used to make selections:</p>"
).appendTo("#create");
// Creating a new element with an attribute object and adding the element to the page at the same time.
$("<a/>", {
  html: "Complete documentation of jQuery manipulation methods <strong>(link)</strong>",
  class: "new",
  href: "https://api.jquery.com/category/manipulation/",
}).appendTo("nav");

//manipulating
$("#manipulating")
  .find("button")
  .click(() => {
    let increasedVal =
      Number($("#manipulating").find("p").eq(1).find("span").eq(0).text()) + 1;
    $("#manipulating").find("p").eq(1).find("span").eq(0).html(increasedVal);
  });
