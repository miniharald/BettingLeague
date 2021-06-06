const router = require("express").Router();
const { bet } = require("../../models");

module.exports = router;

router.post("/bets", async (req, res) => {
    if (!req.body) return res.json({ error: "Fälten var inte ifyllda!" });

    try {
      await bet.insert(req.body);
    } catch (error) {
      console.log("Error when saving bet: ", error);
      return res.json({ error: "Något gick snett!" });
    }

    res.json("Tips sparat!");
})