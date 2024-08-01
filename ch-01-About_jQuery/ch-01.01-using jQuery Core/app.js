// Utility Method ($ Namespace)
$.each(["foo", "bar", "baz"], function (idx, val) {
  console.log("element " + idx + " is " + val);
});

$.each({ foo: "bar", baz: "bim" }, function (k, v) {
  console.log(k + " : " + v);
});

// jQuery Object Methods ($.fn Namespace)
$("li").each(function (index, element) {
  // 'index' is the index of the element in the collection
  // 'element' is the actual DOM element

  // Add a class to each <li> element
  $(element).addClass("highlight");

  // Append the index of the element to its text content
  $(element).append(" (Item " + (index + 1) + ")");
});
