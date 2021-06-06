const router = require("express").Router();
const { league } = require("../../models");

module.exports = router;

router.put("/leagues/:id", async (req, res) => {
  if (!req.body) return res.json({ error: "Fälten var inte ifyllt!" });
  
  try {
    await league.update(req.body);
  } catch (error) {
    console.log("Error when trying to update league: ", error);
    return res.json({ error: "Något gick fel!" });
  }

  res.json("Liganamn uppdaterat!")
})