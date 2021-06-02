const router = require("express").Router();

router.use("/api", [
    require("./login")
])

module.exports = () => {
    return router;
}