require("dotenv").config();
const express = require("express");
const controllers = require("./controllers");

const app = express();

app.use(express.json());
app.use(controllers());

app.listen(process.env.PORT, () => {
    console.log("Listening to", process.env.PORT);
})
