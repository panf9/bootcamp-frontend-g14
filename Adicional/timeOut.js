const evaluar = () => {
    const edad = prompt("Cuál es tu edad? ")

    if ( edad < 18 ) {
        alert("Menor de edad!")
        return
    }
    document.write("Mayor de edad!")
}

setTimeout(evaluar, 5000)