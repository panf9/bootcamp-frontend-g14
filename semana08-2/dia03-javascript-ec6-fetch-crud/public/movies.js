import { fetchMovies, deleteMovie, editMovie } from "./services.js"

export const renderMovies = (movies) => {
    const moviesList = document.querySelector('.movies__list')
    let elementos = ''

    movies.forEach(movie => {
        elementos += `
            <tr>
                <td>${movie.id}</td>
                <td>
                    <img src="${movie.image}"
                        onerror="this.src='https://placehold.co/300x450'" 
                        width="100" 
                        height="250" 
                    />
                </td>
                <td>
                    <strong>${movie.name}</strong> 
                    <div class="fs-small"> 
                        <strong>Release:</strong> ${movie.release}
                    </div>
                    <div class="fs-small"> 
                        <strong>Genre:</strong> ${movie.genre.name}
                        </div>
                    <div class="fs-small"> 
                        <strong>Resume:</strong> ${movie.resumen}
                    </div>
                </td>
                <td>
                    <div>
                        <button class="movie__edit" data-id="${movie.id}">✏</button>
                        <button class="movie__remove" data-id="${movie.id}">❌</button>
                    </div>
                </td>
            </tr>
        `
    })

    moviesList.innerHTML = elementos

    const removeButtons = document.querySelectorAll('.movie__remove')

    removeButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            const id = event.target.dataset.id
            
            const res = await deleteMovie(id)

            if (res) {
                const movies = await fetchMovies()
                renderMovies(movies)
            }
        })
    })

    const editButton = document.querySelectorAll('.movie__edit')
    const moviesForm = document.querySelector('#moviesForm')

    editButton.forEach(button => {
        button.addEventListener('click', async (event) => {
            console.log(event.target.dataset.id);
            const id = event.target.dataset.id

            const url = `http://localhost:3000/movies/${id}`

            const res = await fetch(url)

            const data = await res.json()

            console.log(data);

            moviesForm.name.value = data.name
            moviesForm.image.value = data.image
            moviesForm.release.value = data.release
            moviesForm.genre.value = data.genreId
            moviesForm.resume.value = data.resumen

            
        })
    })
}