$(document).ready(function () {
  $("#jQuery").click(function (event) {
    alert("As you can see, the link no longer took you to the link");
    event.preventDefault();
  });
});

$(document).ready(function () {
  $("#readyEvent").click(function (event) {
    alert("Thanks for visiting!");
  });
});

$("a").addClass("test");

$("#demo").click(function (event) {
  event.preventDefault();
  $(this).hide("slow");
});

function myCallBackWithoutArgument() {
  console.log("callback function with no arguments");
}
$.get("index.html", myCallBackWithoutArgument);

function myCallBackWithArgument(param1, param2) {
  console.log(param1 + param2);
}
$.get("index.html", function () {
  myCallBackWithArgument(2, 4);
});
