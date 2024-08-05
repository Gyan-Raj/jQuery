//$.trim()
$.trim("    lots of extra whitespace    ");

//$.each()
$.each(["foo", "bar", "baz"], function (idx, val) {
  console.log("element " + idx + " is " + val);
});
$.each({ foo: "bar", baz: "bim" }, function (k, v) {
  console.log(k + " : " + v);
});

//$.inArray()
var myArray = [1, 2, 3, 5];
if ($.inArray(4, myArray) !== -1) {
  console.log("found it!");
}

//$.extend()
var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
var newObject = $.extend(firstObject, secondObject);
console.log(firstObject.foo); // "baz"
console.log(newObject.foo); // "baz"

var firstObject = { foo: "bar", a: "b" };
var secondObject = { foo: "baz" };
var newObject = $.extend({}, firstObject, secondObject);
console.log(firstObject.foo); // "bar"
console.log(newObject.foo); // "baz"

//$.proxy()
var myFunction = function () {
  console.log(this);
};
var myObject = {
  foo: "bar",
};
myFunction(); // window
var myProxyFunction = $.proxy(myFunction, myObject);
myProxyFunction(); // myObject

var myObject = {
  myFn: function () {
    console.log(this);
  },
};
$("#foo").click(myObject.myFn); // <button id="foo">Click me (#foo)</button>
$("#foo").click($.proxy(myObject, "myFn")); // {myFn: ƒ}

//Testing Type
console.log($.isArray([])); // true
console.log($.isFunction(function () {})); //true
console.log($.isNumeric(3.14)); // true

console.log($.type(true)); // "boolean"
console.log($.type(3)); // "number"
console.log($.type("test")); // "string"
console.log($.type(function () {})); // "function" //NOTE: console.log(typeof function () {}); //function

console.log($.type(new Boolean())); // "boolean" //NOTE: console.log(typeof new Boolean()); // "object"
console.log($.type(new Number(3))); // "number" //NOTE: console.log(typeof new Number(3)); // "object"
console.log($.type(new String("test"))); // "string" //NOTE: console.log(typeof new String("test")); // "object"
console.log($.type(new Date())); // "date" //NOTE: console.log(typeof new Date()); // "object"
console.log($.type(new Function())); // "function" //NOTE: console.log(typeof new Function()); // "function"

console.log($.type([])); // "array" //NOTE: console.log(typeof []); // "object"
console.log($.type(null)); // "null" //NOTE: console.log(typeof null); // "object"
console.log($.type(/test/)); // "regexp" //NOTE: console.log(typeof /test/); // "object"
