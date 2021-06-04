const router = require("express").Router();
const { team } = require("../../models");

module.exports = router;

router.get("/team/:teamId", async (req, res) => {
  res.json({
      team: await team.getById({teamId: req.params.teamId})
  });
});