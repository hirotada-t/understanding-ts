function conbine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') return +result;
    // return result.toString();
}
var conbinedAges = conbine(30, 26, "as-number");
console.log(conbinedAges);
var conbinedStringAges = conbine("30", "26", "as-number");
console.log(conbinedStringAges);
var conbinedNames = conbine("Max", "Anna", "as-text");
console.log(conbinedNames);
