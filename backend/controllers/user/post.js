const router = require("express").Router();
const bcrypt = require("bcrypt");
const { user } = require("../../models");

module.exports = router;

router.post("/users", async (req, res) => {
    if (!req.body) return res.json({ error: "Fälten var inte ifyllda!" });

    let existingUser = await user.getBy({username: req.body.username});
    if (existingUser) return res.json({ error: "Ifyllt användarnamn används redan!" });

    existingUser = await user.getBy({mail: req.body.mail});
    if (existingUser) return res.json({ error: "Ifylld e-mail används redan!" });

    try {
        const salt = parseInt(process.env.SALTROUNDS);
        bcrypt.hash(req.body.password, salt, async function(error, hash) {
            req.body.password = hash;
            await user.insert(req.body);
        })
    } catch (error) {
        console.log("Error when saving new user: ", error);
        return res.json({ error: "Något gick snett!" });
    }

    res.json("Användare registrerad");
})