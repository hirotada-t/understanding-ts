type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function conbine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor,
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') return +result;
  // return result.toString();
}

const conbinedAges = conbine(30, 26, "as-number");
console.log(conbinedAges);

const conbinedStringAges = conbine("30", "26", "as-number");
console.log(conbinedStringAges);

const conbinedNames = conbine("Max", "Anna", "as-text");
console.log(conbinedNames);