console.log("Exam Running");

// //ex1
// (() => new Promise((resolve) => resolve("promise")))()
//   .then((p) => console.log(p))
//   .then(() => {
//     setTimeout(() => console.log("timeout"), 0);
//     setImmediate(() => console.log("immediate"));
//     queueMicrotask(() => console.log("microtask"));
//     process.nextTick(() => console.log("nexttick"));
//   });

// // ex2
// (() => new Promise((resolve) => resolve("promise")))().then((p) =>
//   console.log(p)
// );
// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => console.log("immediate"));
// queueMicrotask(() => console.log("microtask"));
// process.nextTick(() => console.log("nexttick"));

/**
 * Blocking vs Non - Blocking
 */
// non Blocking
const add = (a: number, b: number) => {
  setTimeout(() => {
    for (let i = 0; i < 9e7; i++) {}
    console.log(a + b);
  }, 0);
};

// Blocking
const add2 = (a: number, b: number) => {
  for (let i = 0; i < 9e7; i++) {}
  console.log(a + b);
};

// console.log("start");
// const A = add(1, 2);
// const B = add(2, 3);
// const C = add(3, 4);
// console.log("end");

console.log("start");
const A = add2(1, 2);
const B = add2(2, 3);
const C = add2(3, 4);
console.log("end");
// What happen if we set the timer to 0?

/**
 * coding Practice for

Using events core module import events from 'node:events';
class MSDStudent extends events { constructor(){ super() }
triggerGraduation(year: number) { this.emit('graduation', year);
} }
const student = new MSDStudent();
student.on('graduation', (year)=> console.log(`Congrats ${year} graduates.`)); student.triggerGraduation(2024);


 */

/**
 * Observer pattern
 */

// import EventEmitter from "events";

// // Create a custom event emitter
// const eventEmitter = new EventEmitter();

// // Function to listen for the 'graduation' event
// function congratulateOnGraduation(year: number): void {
//   eventEmitter.on("graduation", () => {
//     console.log(`Congratulations on graduating in ${year}!`);
//   });
// }

// // Example usage
// congratulateOnGraduation(2024);

// // Emit the 'graduation' event
// eventEmitter.emit("graduation");

import events from "node:events";

class Graduate extends events {
  constructor() {
    super();
  }

  celebrate(year: number, name: string) {
    this.emit("gradutaion", year, name);
  }
}

const graduate = new Graduate();

graduate.on("gradutaion", (year, name) => {
  console.log("Congradulation ", name, year);
});

// graduate.celebrate(2025, "rojin");

/**
 * PATH CoreModule
 */
import { join } from "node:path";

const path = join("hello", "world", "!!!");
// console.log(path);
const pathToFile = join(__dirname, "exam.ts");
// console.log(pathToFile);

/**
 * Buffer Global var
 */
const buffer = Buffer.from("Hello");
buffer.write("ipp", 1);
// console.log(buffer.toString());

/**
 * Read Files
 */

/**
 * iffy funtion for async
 */
(async function () {
  console.log("someCode");
})();

// Using Streams
