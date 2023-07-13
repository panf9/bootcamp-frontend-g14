// const nombre = "tablet";
// const precio = 300;
// const disponible = true;

// const producto = {
//     nombre: "tablet",
//     precio: 300,
//     disponible: true,
// }

// producto.nombre = "Monitor Curvo";

// producto.imagen = "Hola.jpg"

// console.log(producto.nombre);
// console.log(producto["precio"]);
// console.log(producto.imagen);
// console.log(producto);

// delete producto.disponible
// console.log(producto);

// // Object.keys() => Propiedades del objeto

// const todasLasPropiedades = Object.keys(producto)
// console.log(todasLasPropiedades);

// // objet.values() => valores del objeto
// const todosLosValores = Object.values(producto);
// console.log(todosLosValores);


// // DESTRUCTURING

// let persona = {
//     nombre: "Frank1",
//     pais: "Perú",
//     trabajo: 'Desarrollador',
// };

// let nombre1 = persona.nombre;
// console.log(nombre1);

// let pais1 = persona.pais;
// console.log(pais1);

// let trabajo1 = persona.trabajo;
// console.log(trabajo1);


// // Forma corta del DESTRUCTURING

// let { nombre, pais, trabajo } = persona;
// console.log(nombre + " " + pais + " " + trabajo );


// // asignando el resto de un objeto
// //  OPERADOR REST = ...
// let persona2 = {
//     nombre: 'Frank',
//     pais: 'Perú',
//     trabajo: 'Desarrollador',
//     amigos: ['Estuardo', 'Tobias', 'Rolando']
// };

// let { nombre: tuNombre, amigos, ...otrosCampos } = persona2;

// console.log(tuNombre + ' ' + amigos);
// console.log(otrosCampos);


// // ARRAY

// const tecnologias = [20, 30, true, 'React', 'JavaScript'];

// console.log(tecnologias[0]);
// console.log(tecnologias[3]);

// tecnologias.pop();
// console.log(tecnologias);
// tecnologias.push('Javascript')
// console.log(tecnologias);
// console.log(tecnologias.lastIndexOf(true));

// console.log(tecnologias.reverse())

// console.log(tecnologias.shift())

// console.log(tecnologias.length);

// // SPREAD OPERATOR ...
// const nuevoArreglo = [ 'typeScript', ... tecnologias, 'Nodejs' ]
// console.log(nuevoArreglo);

// // Eliminar un elemento de un array


// // filter()
// const tecnologias = [20, 30, true, 'React', 'JavaScript'];
// const nuevoArreglo = tecnologias.filter((tech)=>{
//     return tech !== 'React';
// })

// console.log(nuevoArreglo)

// const tecnologias = [20, 30, true, 'React', 'Javascript'];
// // map() => Modificamos arraus sin modificar el array principal
// const nuevoArreglo = tecnologias.map((tech => {
//     if(tech === 'Javascript'){
//         return 'HTML';
//     } else {
//         return tech
//     }
// }))

// console.log(nuevoArreglo);


const tecnologias = [20, 30, true, 'React', 'Javascript'];
const numeros = [10, 20, 30];

// //  includes() comprueba si un elemento existe en un array
// const resultado = tecnologias.includes('React')
// console.log(resultado);


// some() => me indica si almenos un elemento de un arreglo cumple con una condición
const resultado1 = numeros.some( numero =>
    numero > 30
)

console.log(resultado1)


// function suma(num1, num2) {
//     console.log("La suma de los numeros es: " + num1 + num2)
// }

// suma(2, 4)


// DESTRUCTURING DE ARRAYS

let bienvenida = ['Hola', 'Frank', 'Parra'];
let saludo1 = bienvenida[0];
let nombre1 = bienvenida[1];
let apellido1 = bienvenida[2];

let [saludo2, , apellido2] = bienvenida

console.log(saludo2 + " " + apellido2);

