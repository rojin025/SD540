console.log("Running 3.");

import events from "node:events";
class MSDStudent extends events {
  constructor() {
    super();
  }
  triggerGraduation(year: number) {
    this.emit("graduation", year); // this refers to instance
  }
}
const student = new MSDStudent();
student.on("graduation", (year) => console.log(`Congrats ${year} graduates.`));
student.triggerGraduation(2024);
