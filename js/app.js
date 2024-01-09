
let wordsGame;
let wordSelect;
let provenLyrics = [];
let letraProvada = document.getElementById('provenLyrics');
let trys;
let showTime = document.getElementById('time');
const seconsTrans = 1000;
let timer;
let acierto = 0;



let abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function startWords() {

    let category = document.getElementById('category');
    let electionCategory;

    const maxCategory = 3;

    if (getCookie("category")) {
        electionCategory = getCookie("category")
    } else {

       electionCategory  = Math.floor(Math.random() * maxCategory) + 1;
    }



    switch (electionCategory) {

        case 1:
            category.innerHTML = `Categoria: 1`;

            palabras = ["perro", "paralelepipedo", "quevedo", "auronplay", "pasta",
                "gato", "helado", "america", "biyin", "play",
                "goku", "puerta", "parque", "axozer", "guitarra",
                "reborn", "rubius", "stream", "pelota", "futbol",
                "camara", "instirucion", "peliculas", "lasso", "avatar",
                "teclado", "arepa", "maiz", "computadora", "frescolita"
            ]
            break;
        case 2:
            category.innerHTML = `Categoria: 2`;


            palabras = ["perro", "paralelepipedo", "quevedo", "auronplay", "pasta",
                "gato", "helado", "america", "biyin", "play",
                "goku", "puerta", "parque", "axozer", "guitarra",
                "reborn", "rubius", "stream", "pelota", "futbol",
                "camara", "instirucion", "peliculas", "lasso", "avatar",
                "teclado", "arepa", "maiz", "computadora", "frescolita"
            ]
            break
        default:
            category.innerHTML = `Categoria: 3`;


            palabras = ["perro", "paralelepipedo", "quevedo", "auronplay", "pasta",
                "gato", "helado", "america", "biyin", "play",
                "goku", "puerta", "parque", "axozer", "guitarra",
                "reborn", "rubius", "stream", "pelota", "futbol",
                "camara", "instirucion", "peliculas", "lasso", "avatar",
                "teclado", "arepa", "maiz", "computadora", "frescolita"
            ]
            break;

    }
    setCookie("category",electionCategory,1);

    return palabras;

}

function selectWord() {

    let selection;
    let wordElection;
    const maxWords = 20

    selection = Math.floor(Math.random() * maxWords) + 1;
    wordElection = wordsGame[selection];


    return wordElection;


}

function loadingGame() {

    if (getCookie("timer")) {
        timer = getCookie("timer");
    } else {
        timer = 0;
    }


    contarTiempo();

    wordsGame = startWords();


    if (getCookie("palabra")) {
        
    wordSelect = getCookie("palabra");

    } else {

        wordSelect = selectWord();

    }

    if (getCookie("letraProvada")) {
        provenLyrics = getCookie("letraProvada").split(', ');
    }

    cargarPalabra();

    
    const rows = 3;
    const cols = 9;

    let table = document.getElementById("letters")


    for (let i = 0; i < rows; i++) {
        // Crea una fila
        let row = table.insertRow(i);

        for (let j = 0; j < cols; j++) {
            // Crea una celda en la fila
            let cell = row.insertCell(j);

            // Crea un botón en la celda
            let button = document.createElement("button");
            button.id = i * cols + j; // Asigna un ID único al botón
            button.onclick = function () { revisionLetra(this.id); };
            button.innerHTML = abecedario[i * cols + j];

            if (provenLyrics.includes(abecedario[i * cols + j])) {
                button.disabled = true;
            }

            

            // Añade el botón a la celda
            cell.appendChild(button);
        }
    }

   

}

function cargarPalabra() {
    let parrafo = document.getElementById("palabraAdivinar");


    for (let i = 0; i < wordSelect.length; i++) {
        let span = document.createElement('span');

        if (provenLyrics.includes(wordSelect[i].toUpperCase())) {
            span.innerHTML = wordSelect[i].toUpperCase();
        }

        parrafo.appendChild(span);

    }
}


function revisionLetra(id) {

    const spans = document.querySelectorAll('#palabraAdivinar span');

    let aciertos = false;

    let botnSelect = document.getElementById(id);
    botnSelect.disabled = true;

    let letra = botnSelect.innerHTML.toUpperCase();
    let palabra = wordSelect.toUpperCase();
    
    if (getCookie("palabra")) {
        
        palabra = getCookie("palabra");
    
        } 

    setCookie("palabra",palabra,1);


    provenLyrics.push(letra);


    letraProvada.innerHTML = `Letras Probadas: ${provenLyrics.join(', ')} `;
    
    setCookie("letraProvada", provenLyrics.join(', '), 1);

    console.log(palabra);

    if (getCookie("acierto")) {
        acierto = getCookie("acierto");
    } else {
        acierto = 0

    }

    for (let i = 0; i < palabra.length; i++) {

        if (palabra[i] === letra) {
            spans[i].innerHTML = letra;
            acierto++;

            aciertos = true;

            setCookie("acierto",acierto,1);
            comprobacionVictoria();

        }

    }

    if (aciertos == false) {

        if (getCookie("intento")) {
            trys = getCookie("intento");
        } else {
            trys = 0
        }

        trys++;
        let source = `../img/img${trys}.png`;
        let img = document.getElementById("imagenStart");

      
            img.src = source;
    


        setCookie("intento",trys,1);
        comprobacionDerrota();
    }


}


function contarTiempo() {

    timerRegre = setInterval(() => {

        timer++;
        showTime.innerHTML = `Tiempo: ${timer} segundos`;
        setCookie("timer",timer,1);


    }, seconsTrans)

}

function comprobacionVictoria() {

    let resultado = document.getElementById('resultado');

    if (acierto == wordSelect.length) {
        clearInterval(timerRegre);

        document.getElementById("contenedorGame").style.display = "none";
        document.getElementById("contenedor").style.display = "block";
        resultado.innerHTML = `Felicidaes haz logrado descubrir la palabra misteriosa en ${timer} segundos`;

        borrarCookie("timer");
        borrarCookie("intento");
        borrarCookie("acierto");
        borrarCookie("letraProvada");
        borrarCookie("palabra");
        borrarCookie("category");
        

    }

}

function comprobacionDerrota() {

    let resultado = document.getElementById('resultado');

    if (trys == 7) {
        clearInterval(timerRegre);

        document.getElementById("contenedorGame").style.display = "none";
        document.getElementById("contenedor").style.display = "block";
        resultado.innerHTML = `Lamentablemente no se ha completado la palabra, la palabra a adivinar era ${wordSelect}`;

        borrarCookie("timer");
        borrarCookie("intento");
        borrarCookie("acierto");
        borrarCookie("letraProvada");
        borrarCookie("palabra");
        borrarCookie("category");
        


    }
   
}

function crearPartida() {

    document.getElementById("formStart").style.display = "none";
    document.getElementById("contenedorGame").style.display = "inline-block";

    return false;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function borrarCookie(cookie) {
    document.cookie = cookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
