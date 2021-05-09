const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	password: { type: String, required: true },
	number: { type: Number, required: true },
	isAdmin: { type: Boolean, required: true, default: false },
	DOB: { type: Date, required: true },
});

module.exports = mongoose.model("User", UserSchema);
