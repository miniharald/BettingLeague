const router = require("express").Router();
const { bet } = require("../../models");

module.exports = router;

router.put("/bets/:id", async (req, res) => {
  if (!req.body) return res.json({ error: "Fälten var inte ifyllt!" });
  
  try {
    await bet.update(req.body);
  } catch (error) {
    console.log("Error when trying to update bet: ", error);
    return res.json({ error: "Något gick fel!" });
  }

  res.json("Tips uppdaterat!")
})