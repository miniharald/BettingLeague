const router = require("express").Router();
const { user } = require("../../models");

module.exports = router;

router.get("/users", async (req, res) => {
    res.json({
        users: await user.getAll()
    });
  });

router.get("/users/:userId", async (req, res) => {
  res.json({
      user: await user.getBy({userId: req.params.userId})
  });
});