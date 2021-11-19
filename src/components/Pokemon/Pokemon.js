import React, { useEffect, useState } from 'react'
import { getPokemonDescription, getPokemonImage } from '../../api/utils'
import '../../App.css'



function Pokemon({ pokemonList, currentPokemonId }){
  const [pokemonDescription, setPokemonDescription] = useState('')

 
  useEffect(() => {
    (async function loadPokemonDescription(){
      const results = await getPokemonDescription(currentPokemonId)

      setPokemonDescription(results)
    })();
  }, [currentPokemonId])



  if (pokemonList.length > 0) {
    const pokemonName = formatName(pokemonList[currentPokemonId - 1].name)


 function formatName(name){
    return name.slice(0,1).toUpperCase() + name.slice(1)
  }


    return (
      <div className='Pokemon'>
        <div className='pokemon-image-container'>
          <img src={getPokemonImage(currentPokemonId)} alt="pokemon" />
        </div>
        <h2 className='pokemon-name'>
          {pokemonName}
        </h2>
        <div className='pokemon-description-container'>
          {pokemonDescription}
        </div>
      </div>
    )
  } else {
    return (
      <div className='Pokemon'/>
    )
  }
}

export default Pokemon