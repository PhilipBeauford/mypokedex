import './App.css';
import axios from 'axios';

function App() {


const pokeGrab = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
  .then((data) => {
    // handle success
    console.log(data);
    return data.results
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}


const getPokemonFace = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}



const pokeDescription = (id) => {

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}






  return (
    <div className="App">
      <div className='wrapper'>
        <div className="pokecard">
          <p className='pee'>Choose a Pokemon</p>

          <select className='pokesearch'>

          </select>

          <div className= 'innercard'>
              <img src= ""/>
              <p>

              </p>
              <p>

              </p>
              <button onClick={pokeGrab}></button>
          </div>

        </div>
      </div>

      <header className="App-header">
        <p>
          Philip's React Mini-Project Pokedex
        </p>
        <a
          className="App-link"
          href="https://philipbeauford.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Website
        </a>
      </header>
    </div>
  );
}

export default App;
