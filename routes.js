const express = require("express")
const controller = require("./controllers/controller.js");
const router = express.Router()

router.get("/poke", controller.get_pokemon);
router.get("/poke/:pokemon", controller.get_one_pokemon)

module.exports = router;