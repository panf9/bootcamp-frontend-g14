// async - await => Nos permite controlar todo proceso asincronos
// async => Controlan la procesa que hizo fetch()
// await => recibe, guarda y detiene algunos procesos que necesitan de los datos en espera, una vez recibido los datos ejecuta esos procesos


async function renderCategories () {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    console.log(response);

    // La respuesta que trae viene en un formato texto y no podemos entenderlo, por lo que necesitamos cambiar de formato.
    const categories = await response.json() // Aquí el respnse.json() tiene q esperar la respuesta el fetch sino no podremos pasarlo a JSON, ya q la data aún no ha llegado
    console.log(categories);

    const categoria = document.querySelector('.categories')
    let categoryButton = ''

    categories.forEach(categery => {
        categoryButton += `<button class="">${categery}</button>`
    })

    categoria.innerHTML = categoryButton

    const buttons = document.querySelectorAll('button')
    console.log(buttons);

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            value =  event.target.textContent
            fetchProductByCategory(value)
        })
    })
    
}


async function fetchProductByCategory (categoryName) {
    const url = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    const products = await url.json()
    console.log(products);

    const productsSection = document.querySelector('.products')
    let productElements = ''

    products.forEach(product => {
        productElements += `
        <article class="product">
            <img class="product__image" src="${product.image}" alt="">
            <div class="product__description">
                <h2 class="product__title">${product.title}</h2>
                <p class="product__price">${product.price}</p>
            </div>
        </article>
        `
    })

    productsSection.innerHTML = productElements
} 


renderCategories()




