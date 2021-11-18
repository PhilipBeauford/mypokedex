import React, { useEffect, useState } from 'react'
import styles from './Pokemon.module.css'
import { getPokemonDescription, getPokemonImage } from '../../api/utils'

function Pokemon({ pokemonList, currentPokemonId }){
  const [pokemonDescription, setPokemonDescription] = useState('')

  function formatName(name){
    return name.slice(0,1).toUpperCase() + name.slice(1)
  }

  useEffect(() => {
    (async function loadPokemonDescription(){
      const results = await getPokemonDescription(currentPokemonId)

      setPokemonDescription(results)
    })();
  }, [currentPokemonId])

  if (pokemonList.length > 0) {
    const pokemonName = formatName(pokemonList[currentPokemonId - 1].name)

    return (
      <div className={styles.Pokemon}>
        <div className={styles['pokemon-image-container']}>
          <img src={getPokemonImage(currentPokemonId)} alt="pokemon" />
        </div>
        <h2 className={styles['pokemon-name']}>
          {pokemonName}
        </h2>
        <div className={styles['pokemon-description-container']}>
          {pokemonDescription}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.Pokemon}/>
    )
  }
}

export default Pokemon