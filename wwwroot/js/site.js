console.log('You have connected...')

document.addEventListener("DOMContentLoaded", () => {

    renderEverything()
})

function renderPokemon(pokeData) {
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") 
    pokeContainer.classList.add('ui', 'card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`

    let pokeTypes = document.createElement('ul') 


    createTypes(pokeData.types, pokeTypes) 

    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
    allPokemonContainer.appendChild(pokeContainer);                                                                
}

function renderEverything() {
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchKantoPokemon();

    getDeleteBtn().style.display = 'block'
}

function getDeleteBtn() {
    return document.querySelector('#delete-btn')
}


function fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allpokemon) {
            allpokemon.results.forEach(function (pokemon) {
                fetchPokemonData(pokemon);
            })
        })
}

function fetchPokemonData(pokemon) {
    let url = pokemon.url 
    fetch(url)
        .then(response => response.json())
        .then(function (pokeData) {
            renderPokemon(pokeData)
        })
}


function createTypes(types, ul) {
    types.forEach(function (type) {
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}

function createPokeImage(pokeID, containerDiv) {
    let pokeImgContainer = document.createElement('div')
    pokeImgContainer.classList.add('image')

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}
