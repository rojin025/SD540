/**
 *Creating our own custom Error.
 */
class CustomError extends Error {
  constructor(msg: string, public status: number, public log: string) {
    super(msg);
  }
}

// {Message : "N E M"}
const error = new CustomError("Error msg: 400", 400, "Something went wrong");
console.log(error.status);
console.log(error.message);
console.log(error.log);
