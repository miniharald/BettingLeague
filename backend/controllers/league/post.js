const router = require("express").Router();
const { league, user } = require("../../models");

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

router.post("/leagues/users", async (req, res) => {
  if (!req.body) return res.json({ error: "Fälten var inte ifyllda!" });
  let userToAdd;

  try {
    userToAdd = await user.getBy(req.body.mail);
    await league.addUserToLeague({leagueId: req.body.leagueId, userId: userToAdd.id})
  } catch (error) {
    console.log("Error when saving league: ", error);
    return res.json({ error: "Något gick snett!" });
  }

  res.json("Användare sparad i liga!");
})