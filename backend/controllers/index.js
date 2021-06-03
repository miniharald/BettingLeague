const router = require("express").Router();

router.use("/api", [
    require("./login"),
    require("./game"),
    require("./team")
])

module.exports = () => {
    return router;
}