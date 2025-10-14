

let words = ["pera", "manzana"];
let intentos = 5;
const letrasIntentadas = new Set();
let palabraElegida = ""; //Palabra que se eligira//
let StartButton = document.getElementById("iniciar-juego");
let txt = "";
let keyboard = document.querySelector("body");//donde se capturaran los eventos del teclado//
let ganar;
let victorias;







function Agregar () {

	let inputForm = document.getElementById("input-nueva-palabra");
	let nuevaPalabra = inputForm.value;
	words.push(nuevaPalabra);
	inputForm.value = "";

	
}


	






// StartButton.addEventListener("click",  Iniciar);

keyboard.addEventListener('keypress', txt => {
	

	 txt = txt.key.toLowerCase();
	//AQUI PONGO UNA CONDICION PARA QUE NO SE EJECUTE EL JUEGO MIENTRAS ESTOY AGREGANDO UNA PALABRA//
	let inputForm = document.getElementById("input-nueva-palabra");
	if(document.activeElement === inputForm) return;


	if(letrasIntentadas.has(txt)) return;

	if (!/^[a-zñ]$/.test(txt)) return;

	letrasIntentadas.add(txt)

let x = 230;
let y = 700;
comprobar(txt,x,y);

});
	

	
		



	
		




// <!-------------------------------CANVAS--------------------------------------------->





var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");




//notas: no se debe poner el valor que se quiere incrementar dentro del loop, esto provocara que el resultado se mantenga de la misma manera, es bueno declararlo fuera del loop y luego añadir el incremento con la forma que se quiera//
//Let sirve para declarar variables que solo esten dentro de un solo scope, no algo global, esto es bueno para variables que solo se quieren declarar una sola vez con el objetivo de traer el resultado de una variable global//




function Iniciar () {

//Palabra Elegida//
palabraElegida = words[Math.floor(Math.random()*words.length)];
 victorias = palabraElegida.length;





console.log('victorias: ' + victorias)

pincel.fillStyle = "white";
pincel.rect(0,0,1200,800);
pincel.fill();

//rayas//

 var x = 200;

for (i=0; i<palabraElegida.length; i++) {



	pincel.fillStyle = "black";
     pincel.fillRect(x, 700, 100, 10);

     x+= 115;

            console.log(i)

        }
}







function EscribirTexto (txt,x,y) {

	pincel.fillStyle = "black"
	pincel.font = "100px Comic Sans MS";
	pincel.fillText(txt,x,y);

}

function cambiar () {
	encontrado = false;
}



function cabeza () {
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.arc(450, 210, 50, 0, 2 * 3.14);
	pincel.stroke();

	console.log("cabeza")


}






function cuello () {
	//palo mas largo//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(100,100);
	pincel.lineTo(450,100);
	pincel.closePath();
	pincel.stroke();

	//palo mas corto//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,100);
	pincel.lineTo(450,160);
	pincel.closePath();
	pincel.stroke();

	console.log("cuello")

}

function Cuerpo () {
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,260);
	pincel.lineTo(450,450);
	pincel.stroke();
	pincel.closePath();

	//brazos//

	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,350);
	pincel.lineTo(300,258);
	pincel.stroke();
	pincel.closePath();

	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,348);
	pincel.lineTo(580,257);
	pincel.stroke();
	pincel.closePath();

	//pies//

	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,450);
	pincel.lineTo(350,580);
	pincel.stroke();
	pincel.closePath();


	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(450,450);
	pincel.lineTo(550,580);
	pincel.stroke();
	pincel.closePath();

	console.log("cuerpo")



}


function DibujoCuerpo () {


	pincel.beginPath();
	pincel.lineWidth = 5;
    pincel.moveTo(100, 100);
    pincel.lineTo(100, 700);
    pincel.closePath();
    pincel.stroke();

	console.log("dibujo cuerpo")


	
}

function DibujoBase () {
	//izquierda//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(100,700);
	pincel.lineTo(40,720);
	pincel.closePath();
	pincel.stroke();

	//derecha//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(100,700);
	pincel.lineTo(160,720);
	pincel.closePath();
	pincel.stroke();


	//base//
	pincel.beginPath();
	pincel.lineWidth = 5;
	pincel.moveTo(40,720);
	pincel.lineTo(160,720);
	pincel.closePath();
	pincel.stroke();

	console.log("dibujo base")

}




//error del boleano: se debe declarar el valor del booleano dentro de la funcion, de esa manera debera pasar nuevamente por el valor originalmente declarado y no se quedara con el ya cambiado;


function comprobar (txt,x,y) {

//en este caso puse encontrado fue para que recorra todos los if y cuando vuelva arriba, entonces ya se cierre debido a que encontrado es true;
let encontrado = false;

	


for(i=0; i<palabraElegida.length;i++) {

	if(txt == palabraElegida[i]) {


				if(i == 0) {
					EscribirTexto(txt,x,y);
					encontrado = true;
					victorias = victorias - 1;
					

				
				} else if(i == 1) {
					EscribirTexto(txt, x + 120,y);
					encontrado = true;
					victorias = victorias - 1;
					
					
					
					
				 } else if (i == 2) {
				 	EscribirTexto(txt,  x + 230,y);
				 	encontrado = true;
					victorias = victorias - 1;
				 	
				 					 	
				 } else if (i == 3) {
				 	EscribirTexto(txt, x + 330,y);
				 	encontrado = true;
					victorias = victorias - 1;
				 	
				 	
				 
				  } else if (i == 4) {
				  	EscribirTexto(txt, x + 450, y);
				  	encontrado = true;
					victorias = victorias - 1;
				  	
				  	
				  	
				  } else if (i == 5) {
				  	EscribirTexto(txt, x + 560, y);
				  	encontrado = true;
					victorias = victorias - 1;
				  	
		
				  } else if (i == 6) {
				  	EscribirTexto(txt, x + 670, y);
				  	encontrado = true;
					victorias = victorias - 1;
				  	
				  	
				  	
				  } else if ( i == 7) {
				  	EscribirTexto(txt, x + 790, y);
				  	encontrado = true;
					victorias = victorias - 1;
				 
				  	
				  	
				  } else if ( i == 8) {
				  	EscribirTexto(txt, x + 900, y);
				  	encontrado = true;
					victorias = victorias - 1;
				  	
				  	
				} 
			} 

		} if (encontrado === false) { 
			intentos = intentos - 1;
		
		} if (intentos == 4) {
			DibujoBase();
			
		} else if (intentos == 3) {
			DibujoCuerpo();
			
		} else if (intentos == 2) {
			cuello();
			
		} else if (intentos == 1) {
			cabeza();
			alert("Solo te queda 1 intento!");
			intentos = 0;

			
//aqui converti intentos en 0 para sacarlo del estado en el cual se ejecutara el alerta//
		} if (intentos == -1) {

			
			keyboard.addEventListener('keydown', e => {

				if(e.code === "Space") {
				let texto = document.getElementById("text");
			

				let texto2 = document.getElementById("text2")
			

				texto.textContent= ""	
			
			texto2.textContent = ""
			intentos = 5;
			letrasIntentadas.clear()
				Iniciar();
			}})
			
			let texto = document.getElementById("text");
			Cuerpo();

			let texto2 = document.getElementById("text2")
			

			texto.textContent= "PERDISTE!!!"	
			
			texto2.textContent = "Presione espacio para volver a jugar..."

			

		
			

		} 
		
		if(victorias == 0) {

		

			let texto = document.getElementById("text");
			

			let texto2 = document.getElementById("text2")
			

			texto.textContent= "Felicidades, has ganado!!"	
			
			texto2.textContent = "Presione espacio para volver a jugar..."
			

			

		}

		


	};
			

Iniciar();






