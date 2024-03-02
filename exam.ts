console.log("Exam Running");

(() => new Promise((resolve) => resolve("promise")))()
  .then((p) => console.log(p))
  .then(() => {
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
    queueMicrotask(() => console.log("microtask"));
    process.nextTick(() => console.log("nexttick"));
  });

// ex2
