export const renderMovies = (movies) => {
    const moviesList = document.querySelector('.movies__list')
    let elementos = ''

    movies.forEach(movie => {
        elementos += `
            <tr>
                <td>${movie.id}</td>
                <td>
                    <img src="${movie.image}" width="100" height="250"
                </td>
                <td>
                    <strong>${movie.nname}</strong> 
                    <div class="fs-small"> 
                        <strong>Release:</strong> ${movie.release}
                    </div>
                    <div class="fs-small"> 
                        <strong>Genre:</strong> ${movie.genre.name}
                        </div>
                    <div class="fs-small"> 
                        <strong>Resume:</strong> ${movie.resume}
                    </div>
                </td>
                <td>
                    <div>
                        <button class="movie__edit">  i </button>
                        <button class="movie__remove">  x </button>
                    </div>
                </td>
            </tr>
        `
    })

    moviesList.innerHTML = elementos
}