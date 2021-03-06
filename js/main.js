
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
let player1 = new Luchador("almendra",200,80,50,7);

let player2 = new Luchador("anacardo",200,60,20,6);

let player3 = new Luchador("cacahuete",200,70,30,8);

let player4 = new Luchador("manzana",200,60,60,5);

let player5 = new Luchador("piña",200,70,45,4);

let player6 = new Luchador("platano",200,85,38,8); 

let p1 = "";

let p2 = "";

//traductor
let allplayers = {
    "almendra": player1,
    "anacardo": player2,
    "cacahuete": player3,
    "manzana": player4,
    "piña": player5,
    "platano": player6
};

//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

let cambiaPantalla = (faseAhora,faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);

    let pantallaDestino = document.getElementById(faseFutura);

    //cambiamos visibiidad pantallas

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "block";
};

// INICIO GAME - aparicion del div "mortimers" y cambio de pantalla 0 a pantalla1
    let iniciar = () => {
      resolveIn(1000).then(delay => {
        let aparece = document.getElementById("morti");
        aparece.style.display= "block";
     });
    resolveIn(2000).then(delay => {

        cambiaPantalla("screen0","screen1");
        
         });
    };

// SELECCION PERSONAJES, PLAYER1 PLAYER2 Y MENSAJE DE CONFIRMACION DE ELECCION Y CAMBIO DE PANTALLA A PANTALLA2
let selectPersonaje = (personaje) => {
  
    if (p1 ==  "") {
        p1 = allplayers[personaje]; 
        
        document.getElementById(personaje).className = "elegido";
        document.getElementById(personaje).onclick = ""; 
    } else if (p2 == "") { 
        p2 = allplayers[personaje]
        document.getElementById(personaje).className = "elegido";
        document.getElementById(personaje).onclick = ""; 
        document.getElementById("fighters").onclick="";
    
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `Player1 is : ${p1.nombre} <br><br>&<br><br> Player2 is : ${p2.nombre}`;
        console.log("Player1 " + p1.nombre);   
        console.log("Player2 "  + p2.nombre);   
    
     //Cargo los personajes en screen2
        let showPlayer1 = document.getElementById("jugador1");
        let showPlayer2 = document.getElementById("jugador2");
        
        showPlayer1.innerHTML = `<div><img class="estiloContricante1" src="img/${p1.nombre}.png"></div>`;
        showPlayer2.innerHTML = `<div><img class="estiloContrincante2" src="img/${p2.nombre}.png"></div>`;

        resolveIn(1000).then(delay => {

            cambiaPantalla("screen1","screen2");
            
            });
    };
};
//Funcion de ataque;

let atacar = () => {
    
    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);

    if(turno == 0){
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
            p1.ataqueEspecial(p2);
        }else{

            p1.ataque(p2);
        }
    }else{
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
            p2.ataqueEspecial(p1);
        }else{
            p2.ataque(p1);

        };
         
    };
    //MENSAJE BATALLA
    let mensajebatalla = document.getElementById("mensajebatalla");
    mensajebatalla.innerHTML = `${p1.nombre} ${p1.vida} <br>${p2.nombre} ${p2.vida}`
    //MENSAJE GANADOR
    let mensajeduelo = document.getElementById("mensajeduelo");
        
    if (p1.vida <= 0){ 
        console.log(`El ganador es ${p2.nombre}`)
        mensajeduelo.innerHTML = `El ganador es ${p2.nombre}`;
        document.getElementById("strike").onclick = ""; 
       resolveIn(1000).then(delay => {
        let reiniciar = document.getElementById("reinicio");
        reiniciar.style.display= "block";        
     });
    };
    if (p2.vida <= 0){
        console.log(`El ganador es ${p1.nombre}`)
        mensajeduelo.innerHTML = `El ganador es ${p1.nombre}`;
        document.getElementById("strike").onclick = ""; 
        resolveIn(1000).then(delay => {
            let reiniciar = document.getElementById("reinicio");
            reiniciar.style.display= "block";
         });  
    }; 
};


