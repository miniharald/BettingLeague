const router = require("express").Router();
const { league } = require("../../models");

module.exports = router;

router.get("/leagues", async (req, res) => {
    res.json({
        leagues: await league.getAll()
    });
  });

router.get("/leagues/:leagueId", async (req, res) => {
  res.json({
      league: await league.getById({leagueId: req.params.leagueId})
  });
});

router.get("/leagues/creator/:creatorId", async (req, res) => {
  res.json({
      leagues: await league.getByCreatorId({creatorId: req.params.creatorId})
  });
});