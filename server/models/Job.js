import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    position: { type: String, required: true },
    company: { type: String, required: true },
    salary: { type: Number, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;