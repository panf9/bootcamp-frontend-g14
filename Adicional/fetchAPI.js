fetch('https://jsonplaceholder.typicode.com/users/1')
    .then( (res) => {
        const data = res.json()
        console.log(data);
    })
    .then((data) => {
        console.log(data);
    })