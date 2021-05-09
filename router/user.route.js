const router = require("express").Router();
const User = require("../model/user.model");

router.post("/signup", async (req, res, err) => {
	const emailCheck = req.body.email;

	try {
		let check = await User.findOne({ email: emailCheck, password: req.body.password });

		if (!check) {
			const user = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				number: req.body.number,
				DOB: req.body.DOB,
			});

			const newUser = await user.save();
			res.status(200).json({ Message: "New user created with below details", Details: newUser });
		} else {
			res.status(409).json({ ERROR: "Provided email is already in use" });
		}
	} catch (err) {
		console.error(err.message);
		return res.status(500).json("Internal Server error " + err.message);
	}
});

module.exports = router;
