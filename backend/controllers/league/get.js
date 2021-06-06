const router = require("express").Router();
const { league } = require("../../models");

module.exports = router;

router.get("/league", async (req, res) => {
    res.json({
        leagues: await league.getAll()
    });
  });

router.get("/league/:leagueId", async (req, res) => {
  res.json({
      league: await league.getById({leagueId: req.params.leagueId})
  });
});