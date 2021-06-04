const router = require("express").Router();
const { bet } = require("../../models");

module.exports = router;

router.get("/league/:leagueId/user/:userId", async (req, res) => {
  res.json({
      bets: await bet.getAllBy({leagueId: req.params.leagueId, userId: req.params.userId})
  });
});