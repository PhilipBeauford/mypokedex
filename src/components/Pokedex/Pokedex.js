import React, { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon'
import styles from './Pokedex.module.css'
import PokeSelect from '../PokeSelect/PokeSelect'
import { getOriginalPokemonList } from '../../api/utils'

function Pokedex(){
  const [pokemonList, setPokemonList] = useState([])
  const [currentPokemonId, setCurrentPokemonId] = useState(1)

  useEffect(() => {
    (async function loadPokemonList(){
      const results = await getOriginalPokemonList()

      setPokemonList(results)
    })();
  }, [])

  return (
    <div className={styles.Pokedex}>
      <PokeSelect
        setCurrentPokemonId={setCurrentPokemonId}
        pokemonList={pokemonList}
      />
      <Pokemon
        pokemonList={pokemonList}
        currentPokemonId={currentPokemonId}
      />
    </div>
  )
}

export default Pokedex