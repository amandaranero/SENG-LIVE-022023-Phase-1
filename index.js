const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];



const pokeForm = document.getElementById('poke-form')
console.log(pokeForm)

const pokeContainer =document.querySelector('#poke-container')
console.log(pokeContainer)

const labels = document.getElementsByClassName('form-label')
console.log(labels)

const goals = document.getElementById('lecture-goals');
goals.remove()

const renderPokemon = () => {
   const pokeDiv = document.querySelector('dpoke-container')
   pokemons.forEach((poke) => {
      const pokeP = document.createElement('p')
      pokeP.innerHTML 
      const pokeHTML = <p align="center"> <img src="./assets/wireframe.png" width="550" height="400"> </p>
      goals.appendChild(pokeHTML)
   })
}

renderPokemon()