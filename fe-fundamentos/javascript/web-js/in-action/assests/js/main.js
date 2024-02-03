const pokemonChain = document.getElementById('pokemonsChain')
const loadMore =document.getElementById('loadMore')

const maxRecords = 151
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

    // To avoid limiting first generation pokemons, uncomment the line below and comment the following if-else.
    // loadMoreItems(offset, limit)

    // Comment the code below and uncomment the line above to remove the generation limitation.
    const RecordsWithNexPage = offset + limit

    if (RecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadMoreItems(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    } else {
        loadMoreItems(offset, limit)
    }
})
