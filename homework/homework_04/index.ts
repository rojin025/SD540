import { readdir } from "node:fs/promises";
import { join } from "node:path";

class App {
  #inputFiles: string[] = [];
  #outputFiles: string[] = [];

  #inputPath = join(__dirname, "input");
  #outputPath = join(__dirname, "output");

  // this.#inputPath;
  // constructor cannot be await
  constructor() {
    this.run();
  }

  async run() {
    this.#inputFiles = await readdir(this.#inputPath);
    this.#outputFiles = await readdir(this.#outputPath);
    let difference = this.#inputFiles.filter(
      (filename) => !this.#outputFiles.includes(filename)
    );
    this.generateThumnail(difference);
  }

  generateThumnail(difference: string[]) {
    console.log(difference);
  }
}

const app = new App();
app.run();
