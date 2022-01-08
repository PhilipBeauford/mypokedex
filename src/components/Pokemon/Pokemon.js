import React, { useEffect, useState } from 'react'
import { getPokemonDescription, getPokemonImage, getPokemonType, getPokemonAbilities } from '../../api/utils'
import '../../App.css'



function Pokemon({ pokemonList, currentPokemonId }){
  const [pokemonDescription, setPokemonDescription] = useState('')
  const [ pokemonType, setPokemonType ] = useState('')
  const [ pokemonAbilities, setPokemonAbilities ] = useState('')


  function formatName(name){
    return name.slice(0,1).toUpperCase() + name.slice(1)
  }



  useEffect(() => {
      (async function loadPokemonDescription(){
        const results = await getPokemonDescription(currentPokemonId)

        setPokemonDescription(results)
      })();
    }, [currentPokemonId]
  )


  useEffect(() => {
    (async function loadPokemonType(){
      const results = await getPokemonType(currentPokemonId)

      setPokemonType(results)
    })();
  }, [currentPokemonId]
)


useEffect(() => {
    (async function loadPokemonAbility(){
      const results = await getPokemonAbilities(currentPokemonId)

      setPokemonAbilities(results)
    })();
  }, [currentPokemonId]
)



  if (pokemonList.length > 0) {
    const pokemonName = formatName(pokemonList[currentPokemonId - 1].name)



    return (
      <div className='Pokemon'>
        <div className='pokemon-image-container'>
          <img src={getPokemonImage(currentPokemonId)} alt="pokemon" />
        </div>
        <h2 className='pokemon-name'>
          {pokemonName}
        </h2>
        <div className='pokemon-typability'>
          <h4>TYPE: 
            <p>&nbsp;{pokemonType}</p></h4>
        <h4>ABILITY: <p>{pokemonAbilities}</p> </h4>
        </div>
        
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