document.addEventListener("keydown", move);
var snake = document.getElementById("snake");
var posY = 0;
var posX = 0;
var forward = 50;

function move(event){
  switch(event.keyCode) {
    //Movimiento hacia arriba
    case 38:
    posY -= forward;
    if(posY < 0) {
      finish();
    } else {
        snake.style.marginTop = posY + "px";
      }
    break;
    //Movimiento hacia abajo
    case 40:
    posY += forward;
    if(posY > 481){
      finish();
    } else {
        snake.style.marginTop = posY + "px";
      }
    break;
    //Movimiento a la derecha
    case 39:
    posX += forward;
    if(posX > 481) {
      finish();
    } else {
        snake.style.marginLeft = posX + "px";
      }
    break;
    //Movimiento a la izquierda
    case 37:
    posX -= forward;
    if(posX < 0){
      finish();
    } else {
        snake.style.marginLeft = posX + "px";
      }
    break;
    //Si el usuario aprieta cualquier tecla diferente a flecha, aparece mensaje
    default:
    alert("Utiliza sólo las flechas.")
    break;
  }
}

//Funcion que avisa cuando el juego acaba
function finish() {
  document.removeEventListener("keydown", move);
  alert("Game over!");
}
