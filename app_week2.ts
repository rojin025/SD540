import mongoose, { Schema, model, InferSchemaType } from "mongoose";

/**
 * localhost === 127.0.0.1
 */
mongoose
  .connect("mongodb://127.0.0.1:27017/demo")
  .then((_) => console.log("Connceted to DB"))
  .catch(console.log);

/**
 * 1 create schemma
 *
 * infer a type from a schemma
 */

const userSchema = new Schema({});

type User = InferSchemaType<typeof userSchema>;
const userModel = model<User>("user", userSchema);

/**
 * To disconnect
 * mongoose.disconnect()
 */

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
// create an inferred type from your schema
export type User2 = InferSchemaType<typeof schema>;
// create a model object using schema
const userModel2 = model<User2>("user", schema);
