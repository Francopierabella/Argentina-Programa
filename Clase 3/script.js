/*
EJERCICIO 1:
Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
que es.
*/


let variable = prompt("ingrese un tipo de dato")
function TipoDelValorIngresado(parametro){
    parametro = variable
    console.log(typeof(parametro))// al usar prompt, sea cual sea el valor que le ingrese me dice que es una string?!
}
TipoDelValorIngresado()

/*
EJERCICIO 2:
 Dado dos números ingresados por el usuario, se pide realizar una función que
devuelve la resta de ambos números. Mostrar el resultado por la consola.
*/
let num1 = prompt("A este numero ")
let num2 = prompt("Le restamos este")
function RestaDeParametros (Num1,Num2){
    Num1 = num1
    Num2 = num2
    console.log (Num1 - Num2)
}
RestaDeParametros()

/*
EJERCICIO 3:
Generar una función que le ingresen por parámetro dos valores distintos en dos
variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
Pasarlo a a y mostrarlos
*/

function IntercambioDeParametros(ParametroA,ParametroB){
    let aux1 = ParametroA
    let aux2 = ParametroB
    ParametroA = aux2
    ParametroB = aux1
    console.log(ParametroA,ParametroB)
}
IntercambioDeParametros("hola","mundo")

/*
EJERCICIO 4:
Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
calcular su perímetro, su superficie, e informar los mismos en consola.
*/

function cuadrado (ParametroNumber){
    let perimetro = ParametroNumber * 4
    let superficie = ParametroNumber **2
    console.log("El perimetro del cuadrado de lado",ParametroNumber,"es de",perimetro, "y su superficie es de ", superficie)

}
cuadrado(5)

/*
EJERCICIO 5:
Generar una función que dada una temperatura en grados fahrenheit los convierta a
grados celsius.
la formula es -> (32 °F - 32) × 5/9 = 0 °C
*/

function PasarDeFahrenheitACelsius (grados){
    let gradosCelsiusaux = grados - 32
    let gradosCelsius = gradosCelsiusaux * 5/9
    console.log(gradosCelsius)

}
PasarDeFahrenheitACelsius(100)

/*
EJERCICIO 6:
Realizar una función que calcule el factorial de un número ingresado por el usuario (el
número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
consola.
*/

let NumeroACalcularSuFactorial = prompt("ingrese un numero y asi calcular su factorial")

function factorial (n) {
    n = NumeroACalcularSuFactorial
    if (n<10){
        var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	console.log(total);
    }
	else 
        return "numero Invalido"
}
factorial(5)

/*
EJERCICIO 7:
 Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
indique si ese texto es un palíndromo
*/

let Palabra = prompt("Ingrese una Palabra y veremos si es un palindromo")
function Palindromo (cadena){
    cadena = Palabra
    Palabra = Palabra.toLowerCase().split("").reverse().join("").split(" ").join("");
    if(Palabra === cadena.toLowerCase().split(" ").join("")){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
Palindromo()

/*
EJERCICIO 8:
Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
Javascript.

Mirar clase de apoyo
*/

let cadena = prompt("Ingrese una cadena y la mostraremos en minuscula y en mayuscula")
function MayusMinus(p) {
    p = cadena
    let CadenaEnMinuscula = cadena.toLowerCase()
    let CadenaEnMayuscula = cadena.toUpperCase()
    console.log(CadenaEnMinuscula,CadenaEnMayuscula)
}
MayusMinus()
/*
EJERCICIO 9: 
Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
calificación resultante según la nota ingresada:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente
*/

let Nota = prompt("Ingrese su nota del 1 al 10:")
function Calificacion (nota){
    nota = Nota
    if (nota >= 0 && nota <=3){
        console.log("Nota muy deficiente")
    }
    else if (nota > 3 && nota <= 5){
        console.log ("Nota Insuficiente")
    }
    else if (nota > 5 && nota <= 6){
        console.log("Nota Sufuciente")
    }
    else if (nota > 6 && nota <= 7){
        console.log("la Nota estuvo Bien")
    }
    else if (nota > 7 && nota <= 9){
        console.log("Muy buena Nota!") // Notable me quedaba medio feo ejej
    }
    else if(nota > 9 && nota <= 10){
        console.log ("Excelente Nota!")
    }
    else console.log("Ingrese una nota valida")
}
Calificacion()

/*
Ejercicio 10:
Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
devuelve si ese mes tiene 30 o 31 días.
*/
let Mes = prompt("Ingrese el numero de un mes:")
function DiasDeMeses (mes){
    mes = Mes
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
        console.log("El mes ingresado tiene 31 días")
    }
    else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
        console.log("El mes ingresado tiene 30 días")
    }
    else if (mes == 2){
        console.log ("El mes igresado tiene generalmente 28 días, excepto en años bisiestos que tiene 29 días")
    }
    else 
        console.log("El numero ingresado no pertenece a ningun mes")
}   
DiasDeMeses()

/*
EJERCICIO 11 :
Crear un script que genere una pirámide como el ejemplo con los números del 1 al
número que ingrese el usuario (no puede ser mayor de 10, realizar la validación)
*/
function pirámide (numero){
    if (numero > 1 && numero < 10){
        let piramide = ""
        for(i = 1; i < numero;i++){ 
            piramide = piramide + i
            console.log(piramide)

        }
      
    }
    else console.log("numero invalido")   
}
pirámide(5)

/*
Ejercicio 12:
Generar una función donde ingresen dos números, el primero corresponde a la
cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.
*/
// 5 % 2 nos devuelve el resto al dividi 5 y 2
function bultos (cantidadStock,cantidadCajasLlenas){
    if (cantidadStock > cantidadCajasLlenas){
        let CajasCompletas = Math.floor (cantidadStock / cantidadCajasLlenas)
    let BultoRestates = cantidadStock % cantidadCajasLlenas
    console.log("La cantidad de cajas llenas es de:",CajasCompletas,"Y sobraron", BultoRestates,"bultos")
    }
    else 
        console.log("No hay sufiente stock")
}       
bultos(2,5)

/*
Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
través de su código y el script saca el descuento correspondiente por la consola.
*/

function DescuentoFord (tipoDeFord){
    if (tipoDeFord == "fiesta"){
        console.log("Se aplicara un descuento del 5%")
    }
    else if (tipoDeFord == "focus"){
        console.log("Se aplicara un descuento del 10%")
    }
    else console.log("Ingrese un tipo valido")
}

DescuentoFord("fiesta")
