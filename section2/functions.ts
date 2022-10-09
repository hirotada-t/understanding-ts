function add2(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

function printResult2(num: number) {
  console.log("Result: " + num);
}

let combineValues: (a: number, b: number) => number;
combineValues = add2;
// combineValues = 1;
// combineValues = printResult2
console.log(combineValues(5, 1));

printResult2(add2(4, 12));

function addAndHandle(n1:number, n2:number,cb:(num:number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});