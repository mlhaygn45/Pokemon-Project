const searchINput = document.querySelector("#poke-input")
const searchBtn = document.querySelector(".btn-search");
const  pokeContainer = document.querySelector(".poke-container");





const pokeCount = 20

const initPokemon = async () => {
  for (let i =1; i <= pokeCount; i++){
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url)
 let data =await res.json();
 createPokemonBox(data);
  

};

const createPokemonBox = (pokemon) => { 
   const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const weight = pokemon.weight
    const type =pokemon.types[0].type.name;
    const pokemonEL = document.createElement('div');
    pokemonEL.classList.add('poke-box');
   
    

    pokemonEL.innerHTML = `


    <img src= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} image">
   <h4  class="poke-name">${name}</h4>
   <p class="poke-id">${id}</p>
   <p class="poke-weight">${weight}</p>
   <p class="poke-type">type: ${type}</p>

   `;


   pokeContainer.appendChild(pokemonEL)
 
      };


initPokemon();






searchINput.addEventListener('input', function (e) {
const search  = searchINput.value.toLowerCase();
const pokeNames = document.querySelectorAll('.poke-name');
const  pokemons = document.querySelectorAll('poke-box')
console.log(pokeNames);

pokeNames.forEach((pokeName) => {
  pokeName.parentElement .style.display = 'block';

  if(!pokeName.innerHTML.toLocaleLowerCase().includes(search)){
    pokeName.parentElement .style.display = 'none';
  

  }


})

 });


 





 



         
  
