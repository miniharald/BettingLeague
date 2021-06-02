const router = require("express").Router();
const bcrypt = require("bcrypt");
const { user } = require("../../models");

module.exports = router;

router.post("/login", async (req, res) => {
  if (!req.body) return res.json({ error: "Fälten var inte ifyllda!" });
  
  let loggedInUser = null;
  let success = false;
  const userLoggingIn = await user.getBy({mail: req.body.mail});
  if (!userLoggingIn) return res.json({ error: "Användaren hittades ej!" });

  success = await bcrypt.compare(req.body.password, userLoggingIn.password);
  if (!success) return res.json({ error: "Kombinationen användare och lösenord var inte rätt!" });

  loggedInUser = userLoggingIn;
  if (!success || !loggedInUser) return res.json({ error: "Något gick fel!" });

  delete loggedInUser.password

  res.json({success, user: loggedInUser});
})