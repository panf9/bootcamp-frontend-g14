const PokemonsList = ({ pokemons }) => {
  return (
    <>
      {
        pokemons.results?.map(pokemon => {
          const id = pokemon.url.split('/').at(-2)
          const pokemonnImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          console.log(id);
        return(
          <>
            <section className="border" key={pokemon.id}>
              <h3>{pokemon.name}</h3>
              <img src={pokemonnImage}  className="w-40 " />
            </section>
          </>
        )
      })}
    </>
  )
}

export default PokemonsList