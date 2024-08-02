//setter method
$("h1").html(
  "NOTE: the headings (h3) are written using jQuery and not in index.html, also, this text is also written by jQuery"
);

//getter method
let h3 = $("h3").html();
console.log(h3); //Getters &amp; Setters =>NOTE: this will only give first h3

//getter method when used with .text()
let p = $("p").text();
console.log(p); //=>this will give all the text of p tags

//chaining in setter method
$("body").find("h3").eq(1).html("Chaining");

//chaining in getter method will give us error
// $("h1").html().addClass("test"); // // Attempting to call a jQuery method after calling a getter. i.e., chaining does not work for getters =>ERROR

//.end() method
$("body")
  .find("h3")
  .eq(2)
  .html(".end() method")
  .end() // Restores the selection to all h3s in body
  .eq(0)
  .html("Getters & Setters");
