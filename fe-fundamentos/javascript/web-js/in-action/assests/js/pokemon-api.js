
const pokemonAPI = {}

pokemonAPI.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((err) => console.log(err))
        .finally(() => console.log('Successfully requested!'))
}
