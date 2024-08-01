let welcome = document.getElementById("welcome");

//using dom
let dom = document.getElementById("dom");
dom.addEventListener("click", () => {
  welcome.innerText = "DOM";
  dom.style.backgroundColor = "red";
  dom.style.color = "white";
  dom.style.border = "0";
  dom.style.borderRadius = "8px";
});

//using jQuery
$(document).ready(() => {
  $("#jQuery").click(() => {
    $("#welcome").text("jQuery");
    $("#jQuery").css("background", "red");
    $("#jQuery").css({
      color: "white",
      border: "0",
      borderRadius: "8px",
    });
    $("#jQueryIntro").text(
      "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript."
    );
    $("#hide").show();
    //or
    // $("#hide").css("display", "block");
  });
});
