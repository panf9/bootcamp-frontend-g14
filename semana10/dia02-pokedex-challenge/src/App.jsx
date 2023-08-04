import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import PokemonsList from './components/pokemons/PokemonsList'
import Header from './components/Header'

function App() {
  const [pokemons, setPokemons] = useState({})

  useEffect(()=>{
    const fetchPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await response.json()

      // console.log(data);
      setPokemons(data)
    }
    console.log('Me ejecuto cuando se renderiza este componente solo la primera vez');

    fetchPokemon()
  },[])

  return (
    <>
      <Header title="Poké Catalog"/>
      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}
    
      <PokemonsList pokemons={pokemons}/>
    </>
  )
}

export default App
