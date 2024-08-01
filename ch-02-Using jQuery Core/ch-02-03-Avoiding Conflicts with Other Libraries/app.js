//one way of avaoiding conflict
// var $j = jQuery.noConflict();
// // $j is now an alias to the jQuery function; creating the new alias is optional.
// $j(document).ready(function () {
//   $j("h1").hide();
// });
// // The $ variable now has the prototype meaning, which is a shortcut for
// // document.getElementByTagName(). div below is a DOM element, not a jQuery object.
// window.onload = function () {
//   var div = $j("div");
//   console.log(div);
// };

// Another way to put jQuery into no-conflict mode.
jQuery.noConflict();
jQuery(document).ready(function ($) {
  // You can use the locally-scoped $ in here as an alias to jQuery.
  $("h1").hide();
});
// The $ variable in the global scope has the prototype.js meaning.
window.onload = function () {
  var div = jQuery("div");
  console.log(div);
};
