const arr = [1, 2];

// console.log(arr[5]); // undefined

function A() {
  const x = 1;
}

function B() {
  /** not find error */
  // console.log(x);
}
function foo() {
  return Promise.reject(new Error("ohh"));
}

class TheoError extends Error {
  constructor(message: string, public msg: string) {
    super(msg);
  }
}

async function foo2() {
  try {
    await foo();
    throw new TheoError("hello", "good boy");
    //   "hello".normalize("theo");
    //   throw new Error("Eorrorrrrr");
    //   throw "Somethind went wrong";
  } catch (e: unknown) {
    // console.log("When used any we can use:", e.potato);
    //   console.log("/.|");
    //   console.log("Something went worng.");
    if (e instanceof TheoError) {
      // use "if" to control unknown.
      console.log(e.msg);
    }
    if (e instanceof Error) {
      console.log(e.message);
    } else if (typeof e === "string") {
      console.log("something went wrong with string ");
    } else {
      console.log("something went wrong");
    }
  }
}
