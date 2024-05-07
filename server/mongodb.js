const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  const url = process.env["MONGODB_URL"];
  console.log("URL", url);
  const client = new MongoClient(url);
  const connect = await client.connect();
  const mongoDB = await connect.db("ProductDB");
  return mongoDB;
};

module.exports = connectDB;
