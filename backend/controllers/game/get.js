const router = require("express").Router();
const { game } = require("../../models");

module.exports = router;

router.get("/games/comp/:compId", async (req, res) => {
  res.json({
      games: await game.getAllByCompetition({compId: req.params.compId})
  });
});