import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()

    setPokemon(data)
  }

  useEffect(() => {
    getPokemon(id)
  }, [])

  if (!pokemon) return <h1>Not Found</h1>

  return (
    <section className='w-10/12 mx-auto mt-5'>
      <Link to={'/'}>Regresar al Home</Link>
      <div>PokemonDetail {id}</div>
      <div className='text-center'>
        {/* {JSON.stringify(pokemon)} */}
        <h1 className='text-4xl capitalize'>{pokemon.name}</h1>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon" />
      </div>
    </section>
  )

}

export default PokemonDetail