//no arguement
var index = $("#index");
console.log(index.index()); //1
console.log(index.first().index()); //1
var ol = $("ol");
console.log(ol.index()); //0
console.log(ol.first().index()); //0
var noArgs = $("#noArgs");
console.log(noArgs.index()); //0
console.log(noArgs.first().index()); //0

//string arguement
var index = $("#index");
console.log(index.index("div")); //1
console.log(index.first().index("div")); //1
var ol = $("ol");
console.log(ol.index("ol")); //0
console.log(ol.first().index("ol")); //0
var strArgs = $("#strArgs");
console.log(strArgs.index("#strArgs")); //0
console.log(strArgs.first().index("#strArgs")); //0

//jQuery Objects arguement
var ol = $("ol");
console.log(ol.index(ol)); //0
console.log(ol.first().index(ol)); //0
var noArgs = $("#noArgs");
console.log(noArgs.index(noArgs)); //0
console.log(noArgs.first().index(noArgs)); //0

//DOM Element Argument
