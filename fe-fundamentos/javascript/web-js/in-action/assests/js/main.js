
function getPokemonTypes(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function pokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span>${pokemon.name}</span>
                    
            <div class="details">
                <ol class="types">
                    ${getPokemonTypes(pokemon.types).join('')}
                </ol>

                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonChain = document.getElementById('pokemonsChain')

pokemonAPI.getPokemons().then((pokemons = []) => {    
    pokemonChain.innerHTML += pokemons.map(pokemonToHTML).join('');
})
