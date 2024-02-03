
const pokemonAPI = {}

function pokemonToTemplate(pokemonDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokemonDetail.order
    pokemon.name = pokemonDetail.name

    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokemonAPI.getDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(pokemonToTemplate)
}

pokemonAPI.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokemonAPI.getDetails))
        .then((detailsRequests) => Promise.all(detailsRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((err) => console.log(err))
        .finally(() => console.log('Successfully requested!'))
}
