import mongoose from "mongoose";

export interface Test extends mongoose.Document {
  type: string;
  question: string;
  firstAnswer: string;
  secondAnswer: string;
  rowState: number;
}

const TestSchema = new mongoose.Schema<Test>(
  {
    type: {
      type: String,
      enum: ["IE", "NS", "FT", "PJ"],
      default: "IE",
    },
    question: {
      type: String,
      default: "",
    },
    firstAnswer: {
      type: String,
      default: "",
    },
    secondAnswer: {
      type: String,
      default: "",
    },
    rowState: {
      type: Number,
      enum: [0, 1, 2], //0 : use , 1 : hide , 2 : delete
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models["TestCase"] ||
  mongoose.model<Test>("TestCase", TestSchema);
