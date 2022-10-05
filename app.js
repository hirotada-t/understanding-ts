function add2(n1, n2) {
    var result = n1 + n2;
    return result;
}
function printResult2(num) {
    console.log("Result: " + num);
}
var combineValues;
combineValues = add2;
// combineValues = 1;
// combineValues = printResult2
console.log(combineValues(5, 1));
printResult2(add2(4, 12));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
