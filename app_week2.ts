import mongoose, { Schema, model, InferSchemaType } from "mongoose";

// /**
//  * localhost === 127.0.0.1
//  */
// mongoose
//   .connect("mongodb://127.0.0.1:27017/demo")
//   .then((_) => console.log("Connceted to DB"))
//   .catch(console.log);

// /**
//  * 1 create schemma
//  *
//  * infer a type from a schemma
//  */

// const userSchema = new Schema({});

// type User = InferSchemaType<typeof userSchema>;
// const userModel = model<User>("user", userSchema);

// /**
//  * To disconnect
//  * mongoose.disconnect()
//  */

// create a schema
const schema = new Schema(
  {
    fullname: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    height: Number,
    weight: Number,
    gender: { type: String, enum: ["male", "female"], default: "male" },
  },
  { timestamps: true }
);

/**
 * create an inferred type from your schema (Structure).
 */
export type User2 = InferSchemaType<typeof schema>;

/**
 * create a model object using schema
 * Collections -> Users
 */
const userModel2 = model<User2>("user", schema);

/**
 * we work with model for CRUD operation.
 * methods used in model return promises
 * model: collection
 * doc: instance of model is doc
 */

async function run() {
  //   const user: User2 = await userModel2.create({
  //     userName: "mike",
  //     password: "123",
  //   });
  //   console.log(user);

  /**
   * first parm is query
   * sec param is projection
   * $in means or
   * , -> && // after $in
   * $in in same field
   * $or in different field [
        { weight: { $lt: 20 } },
        { height: 10 }]
   */
  const user: User2 | null = await userModel2.findOne(
    {
      weight: { $lte: 100 },
    },
    {
      password: 1,
      //   _id = 0,
    }
  );
  console.log(user);
}

run();
