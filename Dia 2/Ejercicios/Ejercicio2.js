/**
 * 
 * Ejercicio 1
 * Declarar en ES6 la clase Persona
 */
console.log('=== 1 ===');

class Person {
    /**
     * 
     * @param {string} name 
     * @param {number} age 
     */
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi, my name is ${this.name} and I', ${this.age} years old `);
    }
    haveABirthday(){
        this.age++
    }
}

var p = new Person('Batman', 41);

p.haveABirthday();
p.greet();


/**
 *  Ejercicio2 2
 * Crear un modulo que contenga una clase coche con dos atributos: make y km.
 * El constructor sólo aceptaría como parámetro make, porque km se inicia a 0.
 * También dispondría de dos métoodos: move(km) que incrementa los km según
 * la cantidad y getInfo(), que devuelve un string con el make y el número de km
 */

const Coche = require('./coche');

const coche = new Coche('OPEL')
console.log(coche.getInfo())
coche.move(80)
console.log(coche.getInfo())



/**
 *  Ejercicio 3
 *  Use funciones flecha en vez de las que se indican
 */

console.log('=== 3 ===');

var array = [1, 2, 3];

array = array.map((x)=>{
  return x * 2;
});

console.log(array)

//
// TODO 4
// Declare las variables convenientemente
//

console.log('=== 4 ===');;

function getCircleArea(r) {
  return Math.PI * r * r;
}
const radios = [1,2,3]

radios.forEach((radio)=>{
  console.log('radio = ' + radio  + ', area = ' + getCircleArea(radio));
})


/**
 * TODO 5
 * Simplifique este objeto usando sintaxis ES6
 */
console.log('=== 5 ===');

var prop2 = 'value2';

var object1 = {
  prop1: 'value1',
  prop2,
  acction:(param)=>{ 
    if(typeof param == 'undefined') param = 1;
    console.log(param); 
  }
};

console.log(object1.prop1);
console.log(object1.prop2);
object1.acction(); 

/**
 * Ejercicio 6
 * Simplifique estas asignaciones a variables usando sintaxis ES6
 */
console.log('=== 6 ===');

var object2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
};

const { a,b,c,d,e,f } = object2;

console.log(a, b, c, d, e, f);

/**
 *  Ejercicio 7
 *  Simplifique las siguientes asignaciones usando el spread operator
 */

console.log('=== 7 ===');

var a1 = [4, 5, 6, 7, 8, 9, 10];

var a2 = [0, 1, 2, 3];

var arrayA1_A2 = [...a1, ...a2];

console.log(arrayA1_A2); 


/**
 * Ejercicio 8
 * Convierta los siguientes bucles usando for of y for in
 * 
 */

console.log('=== 8 ===');

var a3 = [0, 1, 2, 3, 4, 5];

for (let number of a3) {
    console.log(number);
}

var object3 = {
  a: 1,
  b: 2,
  c: 3
};

for (const key in object3) {
    if (object3.hasOwnProperty(key)) {
        console.log(key+':'+object3[key])
    }
}