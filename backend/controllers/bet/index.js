const router = require("express").Router();

module.exports = router.use([
    require("./get"),
    require("./put"),
    require("./post")
])