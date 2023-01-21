//Selectores
let palabras = [
  "ALURA",
  "ORACLE",
  "ONE",
  "JAVASCRIPT",
  "HTML",
  "CSS",
  "PALABRA",
];

let nuevaPalabra = document.getElementById("nueva-palabra");
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let palabraAtinada = []
let letras = [];
let oportunidades = 9;
var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

desaparecePatibulo ()
document.getElementById("nuevo-juego").style.display = "none"
document.getElementById("desistir").style.display = "none"

function desaparecePatibulo() {
  for (let i = 1; i < 11 ; i++){
    trazo = "t" + i.toString(); 
    document.getElementById(trazo).style.display = "none"
  }
}

function trazaPatibulo (oportunidades){
  let indice = 9 - oportunidades
  trazo = "t" + indice.toString(); 
  console.log("indice " + indice)
    document.getElementById(trazo).style.display = "block"
    if (indice > 9) {
       noMasOportunidades ();
    }
}

function escojerPalabraSecreta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
  console.log(palabraSecreta);
}

function comprobarLetra(key) {
  let estado = false;
  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key))
  ) {
    letras.push(key);
    console.log(key);
    return estado;
  } else {
    estado = true;
    console.log(key);
    return true;
  }
}

function iniciarJuego() {
  document.getElementById("iniciar-juego").style.display = "none";
  document.getElementById("agregar-palabra").style.display = "none";
  document.getElementById("nuevo-juego").style.display = "block"
  document.getElementById("desistir").style.display = "block"

  escojerPalabraSecreta();
  dibujarLinea();

  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();
    if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          escribirLetraCorrecta(i);
          letra = palabraSecreta[i]
          console.log("letra " + letra)
          palabraAtinada[i] = letra
         if (palabraAtinada.join("") == palabraSecreta) {
            bienHecho();
            
         }
       }
      }
    } else {
      oportunidades -= 1;
      escribirLetraIncorrecta(letra, oportunidades);
      trazaPatibulo(oportunidades);
    }
  }
}

function btnNvoJuego() {
  location.reload();
}

function btnDesistir(){
  location.reload();
}

function btnCancelar () {
   location.reload();
 }

// function btnGuardarEmpezar () {
 
// }

 function btnAgregarPalabra () {
   document.getElementById("iniciar-juego").style.display = "none";
   document.getElementById("agregar-palabra").style.display = "none";
   document.getElementById("nueva-palabra").style.display = "block";
   document.getElementById("guardar-empezar").style.display = "block";
   document.getElementById("cancelar").style.display = "block";
   document.getElementById("informacion").style.display ="block";
 }

function btnGuardarEmpezar() {
   globalThis.permitido = 0;
   tiene_letras(nuevaPalabra);
   if (permitido == 0) {
       palabras.push(nuevaPalabra.value);
       alert("Nueva palabra agregada a la lista")
       nuevaPalabra.value = "";
       document.getElementById("nueva-palabra").style.display = "none";
       document.getElementById("guardar-empezar").style.display = "none";
       document.getElementById("cancelar").style.display = "none";
       document.getElementById("informacion").style.display ="none";
       iniciarJuego();

   }
 }
/* Validar si el texto  tiene caracteres distintos de MAYUSCULAS */
function tiene_letras(nuevaPalabra) {
    newWord = nuevaPalabra.value
    for(i=0; i<newWord.length; i++) { 
       if (abecedario.indexOf(newWord.charAt(i),0)==-1) {
           alert ("Solo se permiten MAYUSCULAS sin caracteres especiales");
           permitido = 1;
           return permitido;
       }
   } 
   permitido = 0;
   return permitido;
}