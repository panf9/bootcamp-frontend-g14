const renderPost = (posts) => {
    const appDiv = document.querySelector('#app')
    console.log(posts);

    let postList = ''
    posts.forEach( post => {
        postList += `
            <h2> ${post.id}: ${post.title} </h2>
            <p>${post.body}</p>
        `
    })

    appDiv.innerHTML = postList
}


const fetchPost = async () => {
    try {
        console.log('LLamando la API..');
    
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response.ok) { // response.ok tendrá un valor de true con respuestas como 200, 201, 202, ...
            throw new Error('ERROR HTTP:', response.status)
        }
    
        const json = await response.json()
    
        renderPost(json);
    } catch (err) {
        console.log(err);
    }
}

// const fetchPost = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then( json => renderPost(json))
//         .catch(err => console.log(err))
        
// }


fetchPost()
