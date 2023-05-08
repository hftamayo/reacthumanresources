const MONGODB_USER = "node";
const MONGODB_PASSWORD = "B3eG3es";
const MONGODB_DATABASE = "humanresources";
const MONGO_URI =
  "mongodb+srv://node:B3eG3es@nodecluster.hfnls.mongodb.net/humanresources";

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("Database connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};
