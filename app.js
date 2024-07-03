let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let value = document.getElementById('valorUsuario').value;

    if (value == "" || value == 0){
        asignarTextoElemento('p','Ingrese un número válido'); 
        return;
    }

    let numeroDeUsuario = parseInt(value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}



function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();



/* --- Taller 4 ---

// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(lenguagesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrar(){
    console.log(lenguagesDeProgramacion);
}
mostrar();

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarInverso(){
    let lenguagesDeProgramacionReversed=lenguagesDeProgramacion.reverse();
    console.log(lenguagesDeProgramacionReversed);
}
mostrarInverso();

// Crea una función que calcule el promedio de los elementos en una lista de números.

function promedio (numeros){
    let divisor = numeros.length;
    let suma = numeros.reduce((total, num)=>{return total + num});
    let prom = suma/divisor;
    console.log(prom);  
}
let listaNumeros = [1,2,3,4,5];
promedio(listaNumeros);

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function buscarMaxMin (numbers){
    console.log(Math.max(...numbers));
    console.log(Math.min(...numbers));
}
let numbers = [10,20,30,40,50];
buscarMaxMin (numbers);

// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarNumeros (numeros){
    let suma = numeros.reduce((total, num)=>{return total + num});
    console.log(suma);
}
let numerosAsumar = [10,100,90,300,500];
sumarNumeros(numerosAsumar);

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function posicion (lista, numero){
    let pos = lista.find((elemento)=>elemento === numero);
    console.log(pos);
}
let lista = [1,2,3,4,5,6,7,8,9,10];
let numero = 3;
posicion (lista, numero);

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaTotal (lista1, lista2){
    let lista3 = lista1.concat(lista2);
    let suma = lista3.reduce((total, num)=>{return total + num});
    console.log(lista3);
    console.log(`total: ${suma}`);
}

let lista1 = [1,2,3,4,5,6,7,8,9,10];
let lista2 = [11,12,13,14,15,16,17,18,19,20];
sumaTotal (lista1, lista2);

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.


function cuadrados (numbers){
    let numbers2 =[];
    for(let i=0; i<numbers.length; i++){
        let calculo = numbers[i]**2;
        numbers2.push(calculo);
    }    
    console.log(numbers2);
}
let numbers1 = [10,20,30,40,50];
cuadrados(numbers1)

*/