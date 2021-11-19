import React from 'react'
import '../../App.css'



function PokeSelect({ pokemonList, setCurrentPokemonId }){
  const pokemons = pokemonList.map((pokemon, index) => {
    return (
      <option
        key={index}
        value={index + 1}
      >
        {pokemon.name}
      </option>
    )
  })

  return (
    <div className='PokeSelect'>
      <label htmlFor="pokemon">Choose a Pokemon:</label>
      <select onChange={(e) => setCurrentPokemonId(e.target.value)}>
        {pokemons}
      </select>
    </div>
  )
}

export default PokeSelect