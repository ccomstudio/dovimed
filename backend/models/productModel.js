const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  products: [
    {
      id: Number,
      name: String,
      age:String,
      location: String,
      memo: String,
      featured: Boolean,
      package: Array,
      image: String,
      description: String,
    },
  ],
  description:{
    personel:String,
    available:Array,
    features: [
      {
        id: Number,
        list:Array,
        subject:String,
      }
    ]
  }
});

module.exports = mongoose.model("Product", productSchema);
