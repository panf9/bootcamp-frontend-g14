import { fetchMovies } from './services.js'
import { renderMovies } from './movies.js'

const moviesForm = document.getElementById('moviesForm')

const createMovie = async (form) => {
    const url = 'http://localhost:3000/movies'
    const body = JSON.stringify(form) // convierto a cadena el objeto del formulario antes de enviarlo 
    const options = {
        method: 'POST', // crear un nuevo registro
        headers: {
            'Content-type': 'application/json',
        },
        body
    }
    const response = await fetch(url, options)
    return response.json
}

moviesForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const moviesForm = document.forms['moviesForm']
    

    const name = moviesForm.name.value
    const image = moviesForm.image.value
    const release = moviesForm.release.value
    const genre = moviesForm.genre.value
    const resume = moviesForm.resume.value
    console.log(resume);

    console.log({name, image, release, genre, resume});

    const newMovie = {
        name, 
        image, 
        release, 
        genreId: Number(genre), 
        resume
    }

    // debugger
    const res = await createMovie(newMovie)
    
    if (res) {
        const movies = await fetchMovies()

        renderMovies(movies)
    }
    
    moviesForm.reset()

})

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