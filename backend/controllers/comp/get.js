const router = require("express").Router();
const { comp } = require("../../models");

module.exports = router;

router.get("/comp", async (req, res) => {
    res.json({
        comp: await comp.getAll()
    });
  });

router.get("/comp/:compId", async (req, res) => {
  res.json({
      comp: await comp.getById({compId: req.params.compId})
  });
});