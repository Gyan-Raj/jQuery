//$.each()
var sum = 0;
var obj = {
  ele1: 1,
  ele2: 2,
  ele3: 3,
  ele4: 4,
  ele5: 5,
};
// for (let value in obj) {
//   sum += obj[value];
// }
// console.log(sum);
$.each(obj, (key, value) => (sum += value));
console.log(sum);

var sum = 0;
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

$.each(arr, (index, value) => (sum += value));
console.log(sum);

//$.map()
var arr = [
  {
    id: "a",
    tagName: "li",
  },
  {
    id: "b",
    tagName: "li",
  },
  {
    id: "c",
    tagName: "li",
  },
];

// returns [ "a", "b", "c" ]
// Note that the value and not the index comes as arguement with $.map
$.map(arr, function (value, index) {
  console.log(value.id);
});

//.each()
$("li").each(function (index, element) {
  console.log($(this).text());
});

//.map()
$("li")
  .map(function (index, element) {
    console.log(this.text());
  })
  .get();
