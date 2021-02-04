
//clases
  class Luchador {

    constructor(nombre,vida,fuerza,defensa,suerte){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte= suerte;
        this.handicap = suerte - Math.floor(Math.random() * 5);
    };

    ataque(enemigo){
        enemigo.vida -= (this.fuerza - enemigo.defensa) * (this.suerte - this.handicap);
    };

    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.fuerza) - enemigo.defensa;
    };
}; 

//Instancias y variables globales
//nombre,vida,fuerza,defensa,suerte
let player1 = new Luchador('almendra',200,50,30,7);

let player2 = new Luchador('anacardo',200,50,30,6);

let player3 = new Luchador('cacahuete',200,50,30,8);

let player4 = new Luchador('manzana',200,40,45,5);

let player5 = new Luchador('piña',200,40,45,7);

let player6 = new Luchador('platano',200,45,38,8); 

let p1 = [];

let p2 = [];

//traductor
let allplayers = {
    'almendra': player1,
    'anacardo': player2,
    'cacahuete': player3,
    'manzana': player4,
    'piña': player5,
    'platano': player6
};

//Funciones 

/* let inicioGame = () => {

    let vidaInicial = 200;
    
    player1.vida = vidaInicial;
    player2.vida = vidaInicial;

    p1 = "";
    p2 = "";
};
 */

let cambiaPantalla = (faseAhora,faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);

    let pantallaDestino = document.getElementById(faseFutura);

    //aqui procedemos con el cambio

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "block";
};


// SELECCION PERSONAJES, EQUIPO A Y B Y MENSAJE DE CONFIRMACION DE ELECCION
let selectPersonaje = (personaje) => {

    document.getElementById(personaje).className = "elegido";
    document.getElementById(personaje).onclick = "";

   if (p1.length < 1) {
       p1.push(personaje)
   } else if (p2.length < 1 ){
       p2.push(personaje)
   }
   // mensaje con equipoA y sus jugadores y equipoB y sus jugadores y escoger jugador duelos random en grupos de dos
   
    if (p1.length == 1 && p2.length == 1){
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `Player1 is : ${p1} <br> & <br> Player2 is : ${p2}`;
        console.log("Player1 " + p1);   
        console.log("Player2 "  + p2);  
    }
}