const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 6 },
    age: { type: String, required: true, maxlength: 20 }
  }, {timestamps: true});

   mongoose.model('User', UserSchema); 