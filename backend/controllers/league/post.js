const router = require("express").Router();
const { league } = require("../../models");

module.exports = router;

router.post("/leagues", async (req, res) => {
    if (!req.body) return res.json({ error: "Fälten var inte ifyllda!" });

    try {
      await league.insert(req.body);
    } catch (error) {
      console.log("Error when saving league: ", error);
      return res.json({ error: "Något gick snett!" });
    }

    res.json("Ligan sparad!");
})