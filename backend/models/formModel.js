const mongoose = require("mongoose");

const fieldsSchema = mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  placeholder: String,
  errorMessage: String,
  label: String,
  pattern: String,
  required:Boolean,
  maxLength:Number,
  list:Array,
})

const formSchema = mongoose.Schema({
  step:String,
  fields: [fieldsSchema]
});

module.exports = mongoose.model("form", formSchema);