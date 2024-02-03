
const offset = 0;
const limit = 12;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

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

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        // debugger
        for (let index = 0; index < pokemonList.length; index++) {
            const pokemon = pokemonList[index];
            pokemonChain.innerHTML += pokemonToHTML(pokemon)   
        }
    })
    .catch((err) => console.log(err))
    .finally(() => console.log('Successfully requested!'))
