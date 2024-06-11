const SECUENCIAL = document.querySelector("#ordenamientoSecuencial")
SECUENCIAL.addEventListener("submit", reset)

function reset(evt){
  evt.preventDefault();
}

function Secuencial(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elemento) {
        return i; 
      }
    }
    return -1; 
}

function SecuencialSecuencial() {
  const arreglo = prompt("Ingresa el arreglo (separado por comas):");
  const valorBuscado = prompt("Ingresa el valor que deseas buscar:");
  const arr = arreglo.split(',').map(Number); 
  const elemento = Number(valorBuscado); 
  return { arr, elemento };
}

function ejecutarBusquedaSecuencial() {
  const { arr, elemento } = SecuencialSecuencial();
  console.log("Arreglo ingresado:", arr);
  let imprimir = document.getElementById("resultadoS");
  imprimir.textContent = `ARREGLO INGRESADO: ${arr}`;
  console.log("Elemento buscado:", elemento);
  let imprimirR = document.getElementById("resultadoS1");
  imprimirR.textContent = `ELEMENTO BUSCADO: ${elemento}`;
  const resultado = Secuencial(arr, elemento);
    if (resultado !== -1) {
      console.log(`El elemento ${elemento} se encuentra en el índice ${resultado}.`);
      let imprimir = document.getElementById("resultadoS2");
      imprimir.textContent = `EL ELEMENTO ${elemento} SE ENCUENTRA EN EL INDICE ${resultado}.`;
    } else {
      let imprimir = document.getElementById("resultadoS2");
      imprimir.textContent = `EL ELEMENTO ${elemento} NO SE ENCUENTRA EN EL ARREGLO`;
      console.log(`El elemento ${elemento} no se encuentra en el arreglo.`);
    }
}

ejecutarBusquedaSecuencial();


