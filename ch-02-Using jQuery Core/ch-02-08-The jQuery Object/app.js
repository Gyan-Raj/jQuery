var table = document.getElementById("table");
table.innerHTML = "<td>Hello <b>World</b>!</td>";

// Setting the inner HTML with jQuery.
var table = document.getElementById("table");
$(table).html("<td>Hello <b>World</b>!</td>");

// Inserting a new element after another with the native DOM API.
var target1 = document.getElementById("target1");
var newElement = document.createElement("main");
target1.parentNode.insertBefore(newElement, target1.nextSibling);
$("#convenience").find("main").eq(0).html("sibling of target1");

// Inserting a new element after another with jQuery.
var target2 = document.getElementById("target2");
var newElement = document.createElement("article");
$(target2).after(newElement);
$("#convenience").find("article").eq(0).html("sibling of target2");

//Getting Elements Into the jQuery Object

// Selecting all <h3> tags.
var headings = $("h3");
console.log(headings.length);

// Selecting only the first <h3> element on the page (in a jQuery object)
var headings = $("h3");
var firstHeading = headings.eq(0);
console.log(firstHeading);
console.log(firstHeading.length);
firstHeading.html("DOM and DOM Elements");

// Selecting only the first <h1> element on the page.
var firstHeadingElem = $("h3").get(0);
console.log(firstHeading);

// Get the first <article> inside #eqVsGet as a jQuery object
var firstArticleElement = $("#eqVsGet").find("article").eq(0);
// Set the HTML content of the first <article>
firstArticleElement.html("targeted using .eq() method");
firstArticleElement.css("color", "blue");

// Get the first <main> inside #eqVsGet as a DOM element
var firstMainElement = $("#eqVsGet").find("main").get(0);
// Set the HTML content of the first <div> using plain JavaScript
firstMainElement.innerHTML = "targeted using .get() method";
firstMainElement.style.color = "green";

// Get the first <section> inside #eqVsGet as a DOM element
var firstSectionElement = $("#eqVsGet").find("section")[0];
// Set the HTML content of the first <div> using plain JavaScript
firstSectionElement.innerHTML = "targeted using [] method";
firstSectionElement.style.color = "green";

var ele1 = $("#element");
var ele2 = $("#element");
console.log(ele1 == ele2); //false
console.log(ele1 === ele2); //false
console.log(ele1); //ce.fn.init {0: main#element, length: 1}
console.log(ele2); //ce.fn.init {0: main#element, length: 1}

var ele3 = $("#element").get(0);
var ele4 = $("#element").get(0);
console.log(ele3 == ele4); //true
console.log(ele3 === ele4); //true
console.log(ele3); //<main id=​"element">​</main>​
console.log(ele4); //<main id=​"element">​</main>​
