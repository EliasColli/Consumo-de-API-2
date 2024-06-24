/*
  Universidad Tecnológica Metropolitana
  
          Aplicaciones Web

    Ruth Betsaida Martinez Dominguez
  
    Practicas Parcial 2 - consumo de API 2

      Carlos Elias Bautista Colli 

    Cuatrimestre III - 3C - Parcial II

          24 de  de 2024
*/
function fetchPokemon() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const pokemonDataDiv = document.getElementById('pokemonData');
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(pokemonData => {
            pokemonDataDiv.innerHTML = `
                <h2>${pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
                <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                <p><strong>Altura:</strong> ${pokemonData.height} cm</p>
                <p><strong>Peso:</strong> ${pokemonData.weight} kg</p>
                <p><strong>Habilidades:</strong></p>
                <ul>
                    ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                </ul>
            `;
        })
        .catch(error => {
            pokemonDataDiv.innerHTML = `<p>${error.message}</p>`;
        });
}
