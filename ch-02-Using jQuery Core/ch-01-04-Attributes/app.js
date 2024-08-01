//.attr() as a setter:
$("a").attr("href", "https://learn.jquery.com/using-jquery-core/attributes");

$("a").attr({
  title: "all titles are the same too!",
  target: "_blank",
});

//.attr() as a getter:
var hrefValue = $("a").attr("href"); // Returns the href for the first a element in the document
console.log(hrefValue);
