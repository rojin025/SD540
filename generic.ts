// Example of a generic function
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello"); // Type of output will be 'string'
console.log(output); // Output: hello

let output2 = identity<number>(10); // Type of output2 will be 'number'
console.log(output2); // Output: 10
