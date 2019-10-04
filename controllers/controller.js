const fetch = require("node-fetch");

// POKEMON: 807

exports.get_pokemon = (req, res) => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0")
    .then(res => res.json())
    .then(data => res.send(data.results))
}

exports.get_one_pokemon = (req, res) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemon}`)
    .then(res => res.json())
    .then(data => res.send(data))
}
