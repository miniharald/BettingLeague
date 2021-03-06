const router = require("express").Router();
const { bet } = require("../../models");

module.exports = router;

router.get("/bets/league/:leagueId/user/:userId", async (req, res) => {
  res.json({
      bets: await bet.getAllBy({leagueId: req.params.leagueId, userId: req.params.userId})
  });
});

router.get("/bets/:id", async (req, res) => {
  res.json({
      bet: await bet.getById({betId: req.params.id})
  });
});