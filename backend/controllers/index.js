const router = require("express").Router();

router.use("/api", [
    require("./bet"),
    require("./comp"),
    require("./game"),
    require("./team"),
    require("./login")
])

module.exports = () => {
    return router;
}