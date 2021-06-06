const router = require("express").Router();

router.use("/api", [
    require("./bet"),
    require("./comp"),
    require("./game"),
    require("./team"),
    require("./user"),
    require("./login"),
    require("./league")
])

module.exports = () => {
    return router;
}