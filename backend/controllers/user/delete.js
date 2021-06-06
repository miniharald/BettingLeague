const router = require("express").Router();
const { user } = require("../../models");

module.exports = router;

router.delete("/users/:id", async (req, res) => {
  let userToDelete = null;

  try {
    userToDelete = user.deleteUser({id: req.params.id})
  } catch (error) {
    console.log("Error when deleting user: ", error);
  }

  res.json({userToDelete})
});