

function getPokemon(){
    const API = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i = 1; i<= 151; i++){
        pokemonPromises.push(fetch(API(i)).then(response => response.json()))
    }
    
    Promise.all(pokemonPromises).then(pokemons => {
        
        const listPokemons = pokemons.reduce((accumulator, pokemon) => {
            accumulator += `
            <li class="card">
            <img class="card-image " src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/> 
                <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>

            </li>`
            return accumulator
        }, ' ')

        const ul = document.querySelector('[data-js="pokedex"]')

        ul.innerHTML = listPokemons
    })



    

}

getPokemon()