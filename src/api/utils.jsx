// Get the first 150 Pokemon
export async function getOriginalPokemonList(){
    const data = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'
    ).then(response => response.json())
    
    // the response results is an array of objects [{name: 'pokemon', url: '/pokemon/id'}, {...}]
    return data.results
  }
  

  // Get pokemon image (front view)
  export function getPokemonImage(id){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }
  

  // Get pokemon description (flavor) text
  export async function getPokemonDescription(id){
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    ).then(response => response.json())
  
    return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ' ');
  }



  export async function getPokemonType(id){
    const data = await fetch(
      `https://pokeapi.co/api/v2/type/${id}/`
    ).then(response => response.json())

    console.log(data.name)
    return data.name
    
  }