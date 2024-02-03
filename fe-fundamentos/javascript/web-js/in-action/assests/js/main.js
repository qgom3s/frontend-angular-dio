
function pokemonToHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span>${pokemon.name}</span>
                    
            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonChain = document.getElementById('pokemonsChain')

pokemonAPI.getPokemons().then((pokemons = []) => {    
    pokemonChain.innerHTML += pokemons.map(pokemonToHTML).join('');
})
