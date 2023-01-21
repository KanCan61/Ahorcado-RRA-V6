
function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(550 + (anchura*i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}
function escribirLetraCorrecta(index) {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#0A3871"
    let anchura=600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index],505+(anchura*index),620)
    tablero.stroke()
  }
  
  function escribirLetraIncorrecta(letra, oportunidades) {
    tablero.lineWidth=6
    tablero.font = 'bold 40px Inter';
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#0A3871"
    tablero.fillText(letra,505+(40*(10-oportunidades)), 720,40)
  }

function bienHecho () {
  tablero.font = 'bold 52px Inter';
  tablero.lineWidth=6
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle= "#41B809"
  tablero.fillText('¡Bien hecho!!',505,60)
  tablero.stroke()
}

function noMasOportunidades () {
  tablero.font = 'bold 52px Inter';
  tablero.lineWidth=6
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle= "#B8090D"
  tablero.fillText('¡Agotaste Oportunidades!',505,60)
  tablero.stroke()
}



