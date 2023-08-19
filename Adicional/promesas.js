const sumar = (a, b) => {
    return new Promise((response, reject) => {
    
        if (a < 0 || b < 0){
            reject("Valores no aceptado")
        }else {
            response( a + b)
        }
    })
}

const result = sumar(2,-7).then((res) => {
    document.write(res)
    console.log(res)
}).catch((rej) => {
    console.log(rej)
    document.write(rej)
})

console.log(result);
