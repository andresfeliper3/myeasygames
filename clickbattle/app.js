function placePlayers() {
  alert("Posicione los jugadores del equipo azul");
  //Colocar fichas azules
  var contador_azul=0;
   function bluePlayers(a) {
       var cuadro_azul = document.getElementById(''+a+'');
       cuadro_azul.addEventListener('click', function() {
         contador_azul ++; //aumenta de 1 en 1 cada vez que se hace click en una casilla
         console.log(contador_azul);
         if(contador_azul<7) { //solo añade la clase si hay menos de 7 casillas marcadas
           cuadro_azul.classList.add('blue'); //añade la clase
         }
          //Solo dejar 6 fichas
           if(contador_azul==6) {
             alert("Posiciones los jugadores del equipo rojo");
           }
       });
  }
  for(var i=1;i<=14;i++) { //repetir el llamado de la función con el ciclo
    bluePlayers('a'+i);
    bluePlayers('b'+i);
    bluePlayers('c'+i);
    bluePlayers('d'+i);
    bluePlayers('e'+i);
    bluePlayers('f'+i);
    bluePlayers('g'+i);
    bluePlayers('h'+i);
    bluePlayers('i'+i);
    bluePlayers('j'+i);
    bluePlayers('k'+i);
    bluePlayers('l'+i);
    bluePlayers('m'+i);
    bluePlayers('n'+i);
    bluePlayers('o'+i);
 }
 //Colocar fichas rojas
 var contador_rojo=0;
 function redPlayers(a) {
   var cuadro_rojo = document.getElementById('2'+a+'');
   cuadro_rojo.addEventListener('click', function() {
     contador_rojo ++; //aumenta de 1 en 1 cada vez que se hace click
     console.log(contador_rojo);
     if(contador_rojo<7) { //solo añade la clase si hay menos de 7 casillas marcadas
       cuadro_rojo.classList.add('red'); //añade la clase
     }
     //Solo dejar 6 fichas
     if(contador_rojo==6) {
       alert("Comienza a atacar");
       var colocar_jugadores = document.getElementById('colocar');
       colocar.style.display="none";
       var jugar = document.getElementById('jugar');
       jugar.style.display="block";
     }
 });
}
 for(var i=1;i<=14;i++) {
   redPlayers('a'+i);
   redPlayers('b'+i);
   redPlayers('c'+i);
   redPlayers('d'+i);
   redPlayers('e'+i);
   redPlayers('f'+i);
   redPlayers('g'+i);
   redPlayers('h'+i);
   redPlayers('i'+i);
   redPlayers('j'+i);
   redPlayers('k'+i);
   redPlayers('l'+i);
   redPlayers('m'+i);
   redPlayers('n'+i);
   redPlayers('o'+i);
 }
}

//Ataques
//Tomar los turnos
var blue_kills = 0; //Contador de asesinatos del equipo azul
var red_kills = 0; //Contador de asesinatos del equipo rojo
function attack() {
  alert("Comienza el juego");
    var turnos=0; //Inicializar turnos en 0
//Ataques azules
    function blueAttack(a) {
    var cuadro_azul = document.getElementById(''+a+'');
    cuadro_azul.addEventListener('click', function() { //al hacer click en la casilla azul
        turnos++; //turnos aumenta de 1 en 1
        console.log("turno "+turnos);
        if (turnos%2!=0) { //organiza los turnos para que sea en los números impares
          if (cuadro_azul.classList.contains('blue')) {
            alert("Pierdes turno"); //Pierde turno si se hace click en casilla ya seleccionada
          }
          else {
            cuadro_azul.classList.add('attack'); //Marca
          }
        }
        else {
          turnos--; //Si se hace doble click, los turnos eliminan uno
        }
        //Eliminar objetivos por parte del equipo azul
        function eliminateBlue(t1,t2) {
          var obj1 = document.getElementById(''+t1+''); //Obj1 es donde se pone el ataque
          var obj2 = document.getElementById(''+t2+''); //Obj2 es el que recibe el ataque
          if(a==''+t1+'') {    //Confirma y revisa la casilla donde se hizo click
            if(obj2.classList.contains('red')) {  //Revisa que el equipo rojo tenga una ficha allí
              if(obj1.classList.contains('attack')) { //Revisa que sea posible depositar un ataque
                obj2.classList.add('eliminated');  //Elimina el objetivo
                blue_kills++; //El contador de asesinatos aumenta de a 1
                console.log("Blue Kills "+blue_kills);
              }
            }
          }
        }
        for(i=1;i<=14;i++) { //El bucle llama la función de todas las maneras posibles para el equipo azul contra el rojo
          var t = 15-i;
          console.log("ver t"+t)
          eliminateBlue('a'+i,'2a'+t);
          eliminateBlue('b'+i,'2b'+t);
          eliminateBlue('c'+i,'2c'+t);
          eliminateBlue('d'+i,'2d'+t);
          eliminateBlue('e'+i,'2e'+t);
          eliminateBlue('f'+i,'2f'+t);
          eliminateBlue('g'+i,'2g'+t);
          eliminateBlue('h'+i,'2h'+t);
          eliminateBlue('i'+i,'2i'+t);
          eliminateBlue('j'+i,'2j'+t);
          eliminateBlue('k'+i,'2k'+t);
          eliminateBlue('l'+i,'2l'+t);
          eliminateBlue('m'+i,'2m'+t);
          eliminateBlue('n'+i,'2n'+t);
          eliminateBlue('o'+i,'2o'+t);
        }
        //Contador y victoria del equipo azul
        if(blue_kills>=6) {
          alert("El equipo AZUL ha ganado");
          location.reload(); //REEMPLAZAR POR UNA VENTANA DE SALIDA
        }
    });
  }
  for(var i=1;i<=14;i++) { //repetir el llamado de la función con el ciclo
    blueAttack('a'+i);
    blueAttack('b'+i);
    blueAttack('c'+i);
    blueAttack('d'+i);
    blueAttack('e'+i);
    blueAttack('f'+i);
    blueAttack('g'+i);
    blueAttack('h'+i);
    blueAttack('i'+i);
    blueAttack('j'+i);
    blueAttack('k'+i);
    blueAttack('l'+i);
    blueAttack('m'+i);
    blueAttack('n'+i);
    blueAttack('o'+i);
 }
//Ataques rojos
 function redAttack(a) {
 var cuadro_rojo = document.getElementById(''+a+'');
 cuadro_rojo.addEventListener('click', function() { //Al hacer click en casilla roja
     turnos++; //turnos aumentan de 1 en 1
     console.log("turno "+turnos);
     if (turnos%2==0) { //organiza los turnos para que sea con los números pares
       if(cuadro_rojo.classList.contains('red')) {
         alert("Pierdes turno"); //Pierde turno si se hace click en casilla ya seleccionada
       }
       else {
         cuadro_rojo.classList.add('attack'); //Marca
       }
     }
     else {
       turnos--; //SI se hace d
     }
     //Eliminar objetos por parte del equipo rojo
     function eliminateRed(t1,t2) {
       var robj1 = document.getElementById(''+t1+''); //Obj1 es donde se pone el ataque
       var robj2 = document.getElementById(''+t2+''); //Obj2 es el que recibe el ataque
       if(a==''+t1+'') {    //Confirma y revisa la casilla donde se hizo click
         if(robj2.classList.contains('blue')) {  //Revisa que el equipo azul tenga una ficha allí
           if(robj1.classList.contains('attack')) { //Revisa que sea posible depositar un ataque
             robj2.classList.add('eliminated');  //Elimina el objetivo
             red_kills++; //Aumenta el contador de asesinatos de a 1
             console.log("Red kills " + red_kills);
           }
         }
       }
     }
    for(i=1;i<=14;i++) { //El bucle llama la función de todas las maneras posibles para el equipo rojo contra el azul
       var s = 15-i;
       console.log("ver s"+s)
       eliminateRed('2a'+i,'a'+s);
       eliminateRed('2b'+i,'b'+s);
       eliminateRed('2c'+i,'c'+s);
       eliminateRed('2d'+i,'d'+s);
       eliminateRed('2e'+i,'e'+s);
       eliminateRed('2f'+i,'f'+s);
       eliminateRed('2g'+i,'g'+s);
       eliminateRed('2h'+i,'h'+s);
       eliminateRed('2i'+i,'i'+s);
       eliminateRed('2j'+i,'j'+s);
       eliminateRed('2k'+i,'k'+s);
       eliminateRed('2l'+i,'l'+s);
       eliminateRed('2m'+i,'m'+s);
       eliminateRed('2n'+i,'n'+s);
       eliminateRed('2o'+i,'o'+s);
   }
  //Contador y victoria dl equipo rojo
  if(red_kills>=6) {
    alert("El equipo ROJO ha ganado");
    location.reload(); //REEMPLAZAR POR UNA VENTANA DE SALIDA
  }
 });
}
 for(var i=1;i<=14;i++) { //repetir el llamado de la función con el ciclo
   redAttack('2a'+i);
   redAttack('2b'+i);
   redAttack('2c'+i);
   redAttack('2d'+i);
   redAttack('2e'+i);
   redAttack('2f'+i);
   redAttack('2g'+i);
   redAttack('2h'+i);
   redAttack('2i'+i);
   redAttack('2j'+i);
   redAttack('2k'+i);
   redAttack('2l'+i);
   redAttack('2m'+i);
   redAttack('2n'+i);
   redAttack('2o'+i);
  }
}
