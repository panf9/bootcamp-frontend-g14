
const url = "https://restcountries.com/v3.1/all?/fields=name,flags,region,capital,population"

// export function fetchCountries () {
//     fetch(url) // Promise
//         .then(response => response.json())
//         // .then(data => data)
//         .then(err => console.log(err))
// }

export const fetchCountries = async () => {
    try {
        const response  = await fetch(url)

        if (!response.ok) {
            throw new Error('Error en el request: ' + response.status)
        }
        return response.json()

    } catch (err){
        console.error(err);
    }
}
