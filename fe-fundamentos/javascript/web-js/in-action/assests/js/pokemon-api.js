
const pokemonAPI = {}

pokemonAPI.getDetails = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
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
