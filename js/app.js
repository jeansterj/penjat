let wordsGame;
let wordSelect;
let provenLyrics = [];
let letraProvada = document.getElementById('provenLyrics');
let trys = 0;
let showTime = document.getElementById('time');
const seconsTrans = 1000;
let timer = 0;
let acierto = 0;




let abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function startWords() {

    let category = document.getElementById('category');

    const maxCategory = 3;

    let electionCategory = Math.floor(Math.random() * maxCategory) + 1;

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

    document.getElementById("starGame").style.display = "none";
    contarTiempo();

    wordsGame = startWords();
    wordSelect = selectWord();

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

            // Añade el botón a la celda
            cell.appendChild(button);
        }
    }

}

function cargarPalabra() {
    let parrafo = document.getElementById("palabraAdivinar");

    for (let i = 0; i < wordSelect.length; i++) {
        let span = document.createElement('span');
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


    provenLyrics.push(letra);
    letraProvada.innerHTML = `Letras Probadas: ${provenLyrics.join(', ')} `;

    console.log(palabra);

    for (let i = 0; i < palabra.length; i++) {

        if (palabra[i] === letra) 
        
        {
            spans[i].innerHTML = letra;
            acierto++;
            aciertos=true;

            comprobacionVictoria();

        }

    }

    if (aciertos == false ) 
        
    {
        trys++;
        let source = `../img/img${trys}.png`;
        let img = document.getElementById("imagenStart");
        img.src = source;
        comprobacionDerrota();
    }

}


function contarTiempo() {

    timerRegre = setInterval(() => {

        timer++;
        showTime.innerHTML = `Tiempo: ${timer} segundos`;

    }, seconsTrans)

}

function comprobacionVictoria() {

    let resultado = document.getElementById('resultado');

    if (acierto == wordSelect.length) {
        clearInterval(timerRegre);


        document.getElementById("contenedorGame").style.display = "none";
        document.getElementById("contenedor").style.display = "block";
        resultado.innerHTML = `Felicidaes haz logrado descubrir la palabra misteriosa en ${timer} segundos`;


    }

}

function comprobacionDerrota() {

    let resultado = document.getElementById('resultado');

    if (trys == 7) {
        clearInterval(timerRegre);

        document.getElementById("contenedorGame").style.display = "none";
        document.getElementById("contenedor").style.display = "block";
        resultado.innerHTML = `Lamentablemente no se ha completado la palabra, la palabra a adivinar era ${wordSelect}`;


    }

}

