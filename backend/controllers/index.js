const router = require("express").Router();

router.use("/api", [
    require("./login"),
    require("./game")
])

module.exports = () => {
    return router;
}