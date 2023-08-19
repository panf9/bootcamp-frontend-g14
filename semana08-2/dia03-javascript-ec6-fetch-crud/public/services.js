export const fetchMovies = async () => {
    const url = 'http://localhost:3000/movies?_expand=genre'

    const response = await fetch(url)

    const data = await response.json()

    return data
}

export const deleteMovie = async (id) => {
    const url = `http://localhost:3000/movies/${id}`

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    return response.json()
}


export const editMovie = async (id) => {
    const url =`http://localhost:3000/movies/${id}`

    console.log(url);
    // const options = {
    //     method: 'PUT'
    // }

    // const response = await fetch(url, options)
}
