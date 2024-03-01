import { readdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const pathToIn = "./input";
const pathToOut = "./output";

// readdirSync(pathToFolder);
const inInputDir = readdirSync(pathToIn).map((fileName) => {
  return join(fileName);
});
const inOutputDir = readdirSync(pathToOut).map((fileName) => {
  return join(fileName);
});

const notInOutput = inInputDir.filter((img) => !inOutputDir.includes(img));

console.log("Files in input directory:", inInputDir);
console.log("Files in output directory:", inOutputDir);
console.log("Files not in output directory:", notInOutput);

console.log("app connected");

function convertToThum(notInOut: string[]) {
  notInOut.forEach((img) => {
    const inputFilePath = join(pathToIn, img); // Full path to input file
    const outputFileName = join(pathToOut, img.split("/").pop() || ""); // Full path to output file
    console.log("Input file path:", inputFilePath);
    console.log("Output file path:", outputFileName);

    sharp(inputFilePath)
      .resize({ width: 200 })
      .toFile(outputFileName, (err, info) => {
        if (err) {
          console.error(`Error resizing ${img}:`, err);
        } else {
          console.log(`Resized ${img} to ${info.width}x${info.height}`);
        }
      });
  });
}

convertToThum(notInOutput);
