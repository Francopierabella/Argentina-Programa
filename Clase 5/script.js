/*
EJERCICIO 1:
Crea un array que contenga el nombre de cinco colores escritos como strings.
*/
let array1 = ["red","blue","green","pink","white"]

/*
EJERCICIO 2:
Guarda en una variable el tercer elemento del array del ejercicio anterior.
*/
//el tercer elemento del array se encuentra en la posicion 2
let tercerElementoArray1 = array1[2]
console.log(tercerElementoArray1)

/*
EJERCICIO 3:
Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
ejercicio 1.
*/
console.log(array1[0][0])

/*
EJERCICIO 4:
Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
función Math.random().
*/

function NumeroAleatorio (){
    let aux = Math.floor((Math.random() * (99 - 1) + 1))
    console.log(aux)
}
NumeroAleatorio()

/*
EJERCICIO 5:
Rellena un array con los números del 1 al 10. Muéstralo por la consola.
*/
let array5 = []
function RellenarArray (){
    for(i = 1; i<= 10;i++){
        array5.push(i)
        
    }
    console.log(array5)
}

RellenarArray()


/*
EJERCICIO 6:
Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola
*/
const array6 = []
function RellenaArrayConRandoms (){
    
    for(i = 0; i < 10;i++){
        array6.push(Math.floor(Math.random() * 100))
    }
    console.log(array6)
}
RellenaArrayConRandoms()

/*
EJERCICO 7:
Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
consola.
*/
const NuevoArray6 = array6
console.log(NuevoArray6)


/*
EJERCICIO 8:

Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio.
*/

function IngreseCancelar (){
    let Acumulador = " "
    let PalabraIngresada = prompt("Ingrese cancelar");
    while (PalabraIngresada != "cancelar") {
                Acumulador += PalabraIngresada + "-"
                PalabraIngresada = prompt("Por favor, ingrese cancelar")
    }
    console.log(Acumulador)
}   
IngreseCancelar()

function IngreseCancelarArray (){
    let Acumulador = []
    let PalabraIngresada = prompt("Ingrese cancelar");
    while (PalabraIngresada != "cancelar") {
                Acumulador.push(PalabraIngresada)
                PalabraIngresada = prompt("Por favor, ingrese cancelar")
    }
    for (i = 0;i < Acumulador.length; i++){
        console.log(Acumulador[i])
    }
}   
IngreseCancelarArray()

/*
EJERCICIO 9:
Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
Mostrar el resultado elemento de html
*/
let btnCalcular = document.getElementById("calcular")
const pesosRecibidos = document.getElementById("pesos")
btnCalcular.addEventListener("click",calcular)
function calcular(){
    let Pesos = pesosRecibidos.value
    let dolares = Pesos / 300
    console.log(Pesos,"pesos son",dolares,"dólares")
}


/*
EJERCICIO 10
Generar la inversa del ejercicio anterior (de pesos a dólares)
*/
let botonCalcular = document.getElementById("Calcular")
let dolaresRecibidos = document.getElementById("dolares")
botonCalcular.addEventListener("click",calcular2)

function calcular2 (){
    let dolar = dolaresRecibidos.value
    let pesos = dolar * 300
    console.log(dolar,"dolares son",pesos,"pesos")
}

/*
EJERCICIO 11:
Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
son 86 grados fahrenheit.
*/
let botonDeCalcular = document.getElementById("Calcular!")
let gradosFahrenheit = document.getElementById("Far")
botonDeCalcular.addEventListener("click",calcular3)

function calcular3(){
    let gradosFahrenheitRecibidos = gradosFahrenheit.value
    let aux = gradosFahrenheitRecibidos * 9/5
    let pasarACentígrados = aux + 32
    console.log(gradosFahrenheitRecibidos,"grados Fahrenheit son",pasarACentígrados, "grados centígrados")
}

/*
EJERCICIO 13:
. A través de un formulario, el usuario debe introducir un número secreto que estará
entre 0 y 5.
El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
juego.
Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.
*/
let intentos = 3
let botonDeEnviar = document.getElementById("Enviar")
botonDeEnviar.addEventListener("click",function(e){
    e.preventDefault()
    let numeroIngresadoPorUsuario = document.getElementById("secreto").value
    let numeroSecreto = Math.floor(Math.random() * 5)
    if (intentos >= 1){
        if (numeroSecreto == numeroIngresadoPorUsuario){
            console.log("ganaste","el numero era ", numeroSecreto)
        }
        else {
            intentos = intentos - 1
            console.log("Perdiste 1 intento ")
            }
        }
    else{
        console.log("Perdiste","el numero era", numeroSecreto)
        }
    })
    
   







// no me salieron los ejercicios restantes. 
