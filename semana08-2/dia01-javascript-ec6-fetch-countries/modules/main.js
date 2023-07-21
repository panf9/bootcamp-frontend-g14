
import { fetchCountries } from './services.js'
import { renderCountries } from './utils.js'


const searchInput = document.querySelector('.app__search')
const filterSelect = document.querySelector('.app__filter')
const scrollTopButton =document.querySelector('.app__scrolltop')


let countryData = []


// Función para realizar la búsqueda
searchInput.addEventListener('keyup', (event) => {
    console.log(event.target.value)

    const value = event.target.value

    const filteredCountries = countryData.filter(country => {
        const loweredName = country.name.common.toLowerCase()
        // console.log(country.capital)
        const joinedCapital = country.capital.join() // Une todos los elemenntos de un arreglo en una cadena de texto
        const loweredCapital = joinedCapital.toLowerCase()
        const loweredValue = value.toLowerCase()
        // TODO: Adicionalmente necesitamos filtrar por capital
        return loweredName.includes(loweredValue) || loweredCapital.includes(loweredValue)
    })

    renderCountries(filteredCountries)
})



filterSelect.addEventListener('input', (event) => {
    const value = event.target.value
    
    console.log(value)

    const filteredCountryByRegion = countryData.filter(country => {
        const loweredRegion = country.region.toLowerCase()
        const loweredvalue = value.toLowerCase()
        return country.region.includes(value)
    })

    renderCountries(filteredCountryByRegion);
})



// document.addEventListener('DOMContentLoaded', function () {
//     console.log('El DOM se cargó totalmente')

//     fetchCountries()
//         .then( response => renderCountries(response))
// })

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchCountries()

    countryData = data

    renderCountries(data)

    scrollTopButton.style.visibility = 'hidden'
    scrollTopButton.style.opacity = 0
})

// Evento scroll
document.addEventListener('scroll', () => {
    console.log('scrolling...', window.scrollY);

    if ( window.scrollY > 300 ) {
        scrollTopButton.style.visibility = 'visible'
        scrollTopButton.style.opacity = 1
    } else {
        scrollTopButton.style.visibility = 'hidden'
        scrollTopButton.style.opacity = 0
    }
})

