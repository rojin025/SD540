import { readdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import "dotenv/config";
import sgMail from "@sendgrid/mail";

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

// convertToThum(notInOutput);
console.log("Running App");
console.log(process.env);

const msg = {
  from: "Thumbnail Generator App", // Use the email address or domain you verified above
  subject: "Status Report",
  content: [
    {
      type: "text/plain",
      value: `This is an automated email. 
        The input folder has 31 thumbnails.
        The output folder has 31 thumbnails.
        Generated 0 new thumbnails.`,
    },
  ],
};

//ES6
// sgMail.send(from: msg.from,subject: msg.subject,body: msg.body).then(
// sgMail.send(msg).then(
//   () => {},
//   (error) => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// );

// 11
// 13
// 10
