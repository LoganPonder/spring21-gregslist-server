import mongoose from "mongoose";
import CarSchema from "../models/Car";
import HouseSchema from '../models/House';
import JobSchema from '../models/Job';


// this is where models get registered and access from the db
class DbContext {
  Cars = mongoose.model("Car", CarSchema);
  Houses = mongoose.model("House", HouseSchema);
  Jobs = mongoose.model('Jobs', JobSchema);
}

export const dbContext = new DbContext();
