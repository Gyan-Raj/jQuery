$("#item1").data("info", { id: 101, name: "Item One" });
$("#item2").data("info", { id: 102, name: "Item Two" });
$("#item3").data("info", { id: 103, name: "Item Three" });

$("li").each(function () {
  var info = $(this).data("info");
  console.log("ID: " + info.id + ", Name: " + info.name);

  var allData = $(this).data();
  console.log("All data for " + $(this).text() + ":", allData);
});

//we can also add single values without using object as:
$("#item1").data("category", "Category A");
$("#item2").data("category", "Category A");
$("#item3").data("category", "Category A");

$("li").each(function () {
  var info = $(this).data("info");
  console.log("ID: " + info.id + ", Name: " + info.name);

  var allData = $(this).data();
  console.log("All data for " + $(this).text() + ":", allData);

  var category = $(this).data("category");
  console.log("Category: " + $(this).data("category"));
});
