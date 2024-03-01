import { readdirSync } from "node:fs";
import { join } from "node:path";

const pathToIn = "./input";
const pathToOut = "./output";

// readdirSync(pathToFolder);
const inInputDir = readdirSync(pathToIn).map((fileName) => {
  return join(pathToIn, fileName);
});
const inOutputDir = readdirSync(pathToOut).map((fileName) => {
  return join(pathToOut, fileName);
});

console.log(inInputDir);
console.log(inOutputDir);

console.log("app connected");
