const arr = [1, 2];

// console.log(arr[5]); // undefined

function A() {
  const x = 1;
}

function B() {
  /** not find error */
  // console.log(x);
}

try {
  "hello".normalize("theo");
  //   throw new Error("Eorrorrrrr");
  //   throw "Somethind went wrong";
} catch (e) {
  console.log("/.|");
  //   console.log("Something went worng.");
  console.log(e);
}
