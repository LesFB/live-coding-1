/*2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

- Escribe una función que reciba 1 parámetro
   - Parámetro 1 - Un array de strings
- La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento **<li></li>**.
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'escritorio'];`
   - `printArray(myArray);`
   - Output - `<li>insecto</li>
               <li>bootcamp</li>
               <li>escritorio</li>*/

function longitud(palabra,arreglo){
    let a = palabra.length;
    let nuevoArreglo = [];

    for(let i=0;i<arreglo.length;i++){

        if (a < arreglo[i].length){                     
            nuevoArreglo.push(arreglo[i]);              
        }                                              
    }

    return nuevoArreglo
}


function imprimir(arreglo){
    let a = document.getElementsById("lista");
    
    for(i=0;arreglo.length>i;i++){
        let vineta=arreglo[i];

        a.innerHTML = "<li>"+vineta+"</li>"
    }
     


}

/*imprimir(['insecto', 'bootcamp', 'escritorio']);
console.log(longitud("helicoptero", ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'] ))*/

let a = document.getElementsByClass("lista");
a.innerHTML="HOLAAA"
