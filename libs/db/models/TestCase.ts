import mongoose from "mongoose";

interface Answer {
  firstAnswer: string;
  secondAnswer: string;
}

export interface Test extends mongoose.Document {
  type: string;
  question: string;
  firstAnswer: Answer;
  secondAnswer: Answer;
  rowState: number;
  imageURL: string;
}
const AnswerSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  content: {
    type: String,
  },
});

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
    firstAnswer: AnswerSchema,
    secondAnswer: AnswerSchema,
    rowState: {
      type: Number,
      enum: [0, 1, 2], //0 : use , 1 : hide , 2 : delete
      default: 0,
    },
    imageURL: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models["TestCase"] ||
  mongoose.model<Test>("TestCase", TestSchema);
