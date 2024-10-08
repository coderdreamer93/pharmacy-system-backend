const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://nomannasir:lrrh0sUhTCs1ONyg@cluster0.jucwity.mongodb.net/PHARMACY_APPLICATION');
    console.log(`Connected to mongo db ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongo DB  Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;