$(document).ready(() => {
    let inputField = $("#inputField");
    let addToDoBtn = $("#addToDoBtn");
  let ol = $("ol");
  addToDo.click(() => {
    let checkBox = $("<input />");
    checkBox.attr({
      type: "checkbox",
    });
    ol.append(checkBox);
    let toDoItem = $("<li></li>").text(inputField.val());
    checkBox.append(toDoItem);
  });
});
