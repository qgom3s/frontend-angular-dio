
function pokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span>${pokemon.name}</span>
                    
            <div class="details">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonChain = document.getElementById('pokemonsChain')

pokemonAPI.getPokemons().then((pokemons = []) => {    
    pokemonChain.innerHTML += pokemons.map(pokemonToHTML).join('');
})
