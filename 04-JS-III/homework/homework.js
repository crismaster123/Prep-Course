// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0 ; i<array.length; i++){
    array[i]= array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var text="";
  for (var i = 0 ; i < palabras.length; i++){
    if (palabras[i+1] != undefined)
      text += palabras[i]+" ";
    else
      text += palabras[i];
  }
  return text;
}
// var a = ["hola","mundo"];

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0 ; i<array.length; i++){
    if (array[i] === elemento)
      return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumOP=0;
  for (var i = 0 ; i<numeros.length; i++){
    sumOP += numeros[i];
  }
  return sumOP;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promOP=0;
  var sum=0;
  for (var i = 0 ; i<resultadosTest.length; i++){
    sum += resultadosTest[i];
  }
  return sum/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var temp = 0;

  for (var i = 0 ; i<numeros.length; i++){
    if (numeros[i] > temp)
      temp = numeros[i];
  }
  return temp;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var temp=arguments[0];
  var datoOP=0;
    if(arguments.length > 0){      
      for (var i = 1 ; i<arguments.length; i++){
        temp *= arguments[i];
      }
    }
    else 
      return 0;
  return temp;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var temp=0;
  for (var i = 0 ; i<arreglo.length; i++){
    if (arreglo[i]>18)
      temp += 1;
  }
  return temp;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if( numeroDeDia >= 2 && numeroDeDia <= 6)
    return "Es dia Laboral";
  else
    return "Es fin de semana";
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (String(n)[0] === "9")
    return true;
  else
    return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for (var i = 0 ; i<arreglo.length-1; i++){
    if (arreglo[i]===arreglo[i+1])
      return true;
    else
      return false;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arrayBase = ["Enero", "Marzo", "Noviembre"];
  var arrayTemp = [];
  var temp = 0;
  for (var i = 0 ; i<array.length; i++){
    for (var j = 0 ; j<array.length; j++){
      if (array[i] === arrayBase[j])
        arrayTemp.push(arrayBase[j]);
    }
  }
  if(arrayTemp.length === 3)
    return arrayTemp;
  else 
    return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var a = [];
  for (var i = 0 ; i<array.length; i++){
    if (array[i] > 100)
      a.push(array[i]);
  }
  return a;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i = 0;
  var a = [];

  while(i < 10 ){
    numero +=2;
    if (numero === i)
      return "Se interrumpió la ejecución";
    else
      a[i] = numero;
    i++;
  }
  return a;
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var it = 0;
  var i = 0;
  var a = [];

  for (i; i < 10; i++){
    if(i+1 === 5){
      continue;
    }
    else{
      numero +=2;
      a[it] = numero;
      it++;
    }
  }
  return a;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
