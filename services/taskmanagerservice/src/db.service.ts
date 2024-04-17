import mongoose from 'mongoose';
const PORT =  5001;
const MONGODB_URI = 'mongodb://localhost:27017/task-manager';

const connectToMongoDb = true;

export const connectToDB = () => {
  if(connectToMongoDb) {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  }
}