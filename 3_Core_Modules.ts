// // console.log("Running 3.");

// // import events from "node:events";
// // class MSDStudent extends events {
// //   constructor() {
// //     super();
// //   }
// //   triggerGraduation(year: number) {
// //     this.emit("graduation", year); // this refers to instance
// //   }
// // }
// // const student = new MSDStudent();

// // student.on("graduation", (year) => console.log(`Congrats ${year} graduates.`));
// // student.on("graduation", () =>
// //   console.log(`Theo: Time to celebrate.` + "\n --------")
// // );

// // student.triggerGraduation(2024);
// // student.triggerGraduation(2025);
// // student.triggerGraduation(2026);

// import { join } from "node:path";
// const path = join("this", "is", "a", "path");
// const pathToFile = join(__dirname, "file.txt");

// /**
//  ' this/is/a/path '
// */
// console.log(path);

// /**
//  /Users/rojin025/Documents/MSD/12_SD540/SD540/file.txt
// */
// console.log(pathToFile);

// /**
//  * Buffer
//  */
// const emptybuffer = Buffer.alloc(8); // allocate a Buffer with 8 bytes
// const buffer = Buffer.from("Hello"); // create Buffer of 5 bytes and fill it
// console.log(buffer); // <Buffer 48 65 6c 6c 6f>
// console.log(buffer.toString()); // Hello
// buffer.write("ipp", 1); // overwrite data in the buffer console.log(buffer.toString()); // Hippo
// console.log(buffer.toString()); // Hippo

// console.log(Buffer);
// console.dir(Buffer);

// import { readFile } from "node:fs/promises";
// (async function () {
//   const filecontent = await readFile(pathToFile);
//   setTimeout(() => {
//     console.log("timeout");
//   }, 0);
//   setImmediate(() => {
//     console.log("immediate");
//   });
//   process.nextTick(() => console.log("nexttick"));
// })();

/**
 * Intresting finding
 */
// import { readFile } from "node:fs/promises";
// import { join } from "node:path";
// const pathToFile = join(__dirname, "app.ts");

// const filecontent = readFile(pathToFile);
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// setImmediate(() => {
//   console.log("immediate");
// });
// process.nextTick(() => console.log("nexttick"));
// console.log(filecontent);

// /**
//  *
//  * Create Zip file.
//  */

// import { createReadStream, createWriteStream } from "node:fs";
// import { createGzip } from "node:zlib";
// import { join } from "node:path";

// const pathToSource = join(__dirname, "3_Core_Modules.ts");
// const pathToDestination = join(__dirname, "zipedFile.gz");

// const readableStream = createReadStream(pathToSource);
// const gzipStream = createGzip(); // Duplex Stream // read and write
// const writableStream = createWriteStream(pathToDestination);

// readableStream.pipe(gzipStream).pipe(writableStream);

/**
 * Server
 */
import http from "node:http";
import url from "node:url";

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the Overview.");
  } else if (pathName === "/products") {
    res.end("This is the Product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Error",
    });
    res.write("Something");
    res.write("went Wrong.");
    res.end("Page Not found.");
  }
});

// Day 4
import { createServer } from "node:http";
const server2 = createServer();
server2.on("request", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Inform client of content type res.write('Hello '); // content
  res.write("World!"); // content
  res.end();
});
server2.listen(3000, () => console.log(`listening to 3000`));
