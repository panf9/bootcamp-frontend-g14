// Usamos axios como de costumbre
axios.get('https://jsonplaceholder.typicode.com/users/3')
.then((data) => {
    console.log(data.data);
})

// Usamos axios y aplicamos destructring
axios.get('https://jsonplaceholder.typicode.com/users/6')
.then(({ data }) => {
    console.log(data);
})