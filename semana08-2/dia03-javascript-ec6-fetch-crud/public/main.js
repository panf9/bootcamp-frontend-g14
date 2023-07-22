import { fetchMovies } from './services.js'
import { renderMovies } from './movies.js'


document.addEventListener('DOMContentLoaded', async (event) => {
    // // Ejemplo usando PROMESAS
    // fetchMovies()
    //     .then( response => {
    //         renderMovies(response)
    //     })

    // Ejemplo usando ASYNC-AWAIT
    const movies = await fetchMovies()

    renderMovies(movies)
})