const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Define the Part schema
const partSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the Part model
const Part = model("Part", partSchema);

// Export the Part model
module.exports = Part;
