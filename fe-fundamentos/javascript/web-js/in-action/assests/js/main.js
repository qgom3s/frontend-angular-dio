const pokemonChain = document.getElementById('pokemonsChain')
const loadMore =document.getElementById('loadMore')
const limit = 12;
let offset = 0;

function pokemonToLi(pokemon) {
    return  `
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

function loadMoreItems(offset, limit) {
    pokemonAPI.getPokemons(offset, limit).then((pokemons = []) => {    
        const newSet = pokemons.map(pokemonToLi).join('')
        pokemonChain.innerHTML += newSet
    })
}

loadMoreItems(offset, limit)

loadMore.addEventListener('click', () => {
    offset += limit;
    loadMoreItems(offset, limit)
})
