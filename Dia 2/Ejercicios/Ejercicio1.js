const users = require('./users.json');

/**
 * Ejercicio 1
 * Obtener el usuario cuyo teléfono es "024-648-3804"
 */
console.log('=== 1 ===');
const user = users.filter((user)=>user.phone==='024-648-3804')[0]

/**
 * Ejercicio 2
 * Crear una función que devuelva true si existe un usuario cuyo email
 * sea el que se pasa como parámetro
 */
console.log('=== 2 ===');

const checkUserAvailable = (email) => {
     if(!users.every((user)=>user.email===email)) return true
}
 /**
  *  Ejercicio 3
  *  Obtener el número de usuarios que tienen website
  */
console.log('=== 3 ===');
const numberUsersWithWebsite = users.filter((user)=>user.website!==undefined).length

/**
 * Ejercicio 4
 * Obtener el índice de la posición que toma en el array el primer usuario
 * cuyo número de la calle de su dirección es menor que 300
 * 
 */
console.log('=== 4 ===');
const indexUser = users.findIndex((user)=>{
    if(user.address!==undefined && parseInt(user.address.number)<300)
    return user
})

/**
 * Ejercicio 5
 * Obtener un array que sólo contenga las cadenas de los emails de los usuarios
 */
console.log('=== 5 ===');
const usersEmails = users.map((user)=>user.email)
/**
 * Ejercicio 6
 * Obtener un array que contengan objetos {id: "id", username: "username"},
 * que contienen los ids y los nombres de usuarios de los usuarios
 */

console.log('=== 6 ===');

const objectUsers = users.map((user)=>({
    id:user.id,
    username:user.username
}))

/**
 *  Ejercicio 7
 * Obtener el array de usuarios pero con los números de sus direcciones en
 * formato de número (y no de cadena que es como está ahora mismo)
 */
console.log('=== 7 ===');
const usersChangedAddressFormat = users.map((user)=>{
    if(user.address!==undefined)
    user.address.number=parseInt(user.address.number)
    return user
})


/**
 * Ejercicio 8
 * Obtener el array de usuarios cuya dirección está ubicada entre la
 * altitud -50 y 50, y la longitud -100 y 100
 */

console.log('=== 8 ===');
const usersFilteresLtLg = users.filter((user)=>{
    if(user.address !== undefined && user.address.geo!==undefined){
        if((user.address.geo.lat>-50 && user.address.geo.lat< 50) && (user.address.geo.lng>-100 && user.address.geo.lng< 100)){
            return user
        }
    }
})
/**
 * Ejercicio 9
 * Obtener un array con los teléfonos de los usuarios cuyo website
 * pertenezca a un dominio biz
 */

const phonesWithBizEmail = users.map((user)=>{
    if(user.email.split('.').pop()==='biz') return user.phone
}).filter(((user)=>user!==undefined))

/**
 * Ejercicio 10
 * Escriba una función processArray que, dado un array de números
 * enteros, devuelva un nuevo array en que aquellos elementos que
 * sean pares se multipliquen por 2.
 */
console.log('=== 10 ===');

const testArray = [2, 3, 5, 6, 5, 9, 10, 12, 13];

const processArray = (array) => {
    let multiples = []
    array.forEach(number => {
        if(number%2===0)
            multiples.push(number*2)
    });
    return multiples
};

console.log(processArray(testArray)); 