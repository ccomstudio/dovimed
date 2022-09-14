const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
  packages: [
    {
      id: Number,
      name: String,
      age: String,
      memo: String,
      image: String,
      description: String,
    },
  ],
  description:{
    personel:String,
    available:Array,
  }
});

module.exports = mongoose.model("package", packageSchema);
