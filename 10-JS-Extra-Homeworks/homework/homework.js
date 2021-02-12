// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  for (const [key, value] of Object.entries(objeto)) {
    let new_element = [];
    new_element[0] = key;
    new_element[1] = value;
    matriz.push(new_element);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let the_map = {};
  for(let c of string) {
    //check if char is on Object
    if(!the_map.hasOwnProperty(c)) { //if property isnt in the_map
      the_map[c] = 1;  //create property
    }else {
      the_map[c]++;  //add +1 to property
    }
  }

  return the_map;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let uppers = [];
  let lowers = [];
  for(let c of s) {
    if(c === c.toUpperCase()) {
      uppers.push(c);
    }else {
      lowers.push(c);
    }
  }
  return uppers.join('') + lowers.join('');
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let words_array = str.split(' ');
  for(let i = 0; i < words_array.length; i++) {
    words_array[i] = words_array[i].split('').reverse().join('');
  }
  return words_array.join(' ');
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num_arr = numero.toString().split('');
  for(let i = 0; i < num_arr.length/2 ; i++) {
    if(num_arr[i] !== num_arr[num_arr.length-1-i]) {
      return 'No es capicua';
    }
  }
  return 'Es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let str_to_arr = cadena.split('');
  str_to_arr = str_to_arr.filter(letter => !(letter === 'a' ||  letter === 'b' || letter === 'c'));
  return str_to_arr.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a,b) => {
    return a.length - b.length;
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let intersection = [];

  arreglo1.forEach((num1, i) => {
    arreglo2.forEach((num2, j) => {
      if(num1 === num2) {
        intersection.push(num1);
      }
    });
  });
  
  return intersection;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
