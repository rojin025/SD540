console.log("Day 2 Event Loop");

(() => new Promise((resolve) => resolve("I promise")))().then((p) =>
  console.log(p)
);
setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));
queueMicrotask(() => console.log("microtask"));
process.nextTick(() => console.log("nexttick"));
