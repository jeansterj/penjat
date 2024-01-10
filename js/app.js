
let wordsGame;
let wordSelect;
let provenLyrics = [];
let letraProvada = document.getElementById('provenLyrics');
let trys;
let showTime = document.getElementById('time');
const seconsTrans = 1000;
let timer;
let acierto = 0;
let palabras;
let mensajePalabra;
let mensajeElection;



let abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function startWords() {

    let category = document.getElementById('category');
    let electionCategory;

    const maxCategory = 3;

    if (getCookie("category")) {
        electionCategory = getCookie("category")
    } else {

        electionCategory = Math.floor(Math.random() * maxCategory) + 1;
    }



    switch (electionCategory) {

        case 1:
            category.innerHTML = `Categoria: Paises`;

            palabras = ["Argentina", "Japon", "Italia", "Australia", "India",
                "Canada", "Mexico", "China", "España", "Rusia", 
                "Venezuela"
            ]

            mensajePalabra = ["Un país en América del Sur conocido por su tango, asados deliciosos y vastos paisajes, que van desde las cataratas de Iguazú hasta la Patagonia.", "Una nación insular en Asia que combina la rica tradición cultural con la tecnología moderna. Japón es famoso por su sushi, samuráis y hermosos templos.",
                "País europeo famoso por su arte renacentista, arquitectura histórica, deliciosa comida (como la pasta y la pizza) y ciudades encantadoras como Roma y Florencia.", " Continente-isla con una diversidad única de flora y fauna. Hogar de la Gran Barrera de Coral, canguros y koalas, así como ciudades vibrantes como Sídney y Melbourne.",
                "País colorido y diverso con una rica historia, arquitectura impresionante (como el Taj Mahal) y una variedad de tradiciones culturales, incluyendo la danza y la gastronomía.", " Gran país norteamericano conocido por su belleza natural, como los Parques Nacionales de Banff y Jasper, así como su amabilidad y calidad de vida.",
                "País latinoamericano con una cultura vibrante, famoso por su gastronomía picante, festivales coloridos, playas hermosas y antiguas ruinas mayas.", "Nación asiática con una historia milenaria, destacando la Gran Muralla China, la Ciudad Prohibida y la rica tradición cultural que incluye la medicina tradicional china.",
                "País europeo conocido por su alegría de vivir, festivales animados como La Tomatina y la Feria de Abril, así como la arquitectura única de Antoni Gaudí en Barcelona.", "País extenso que se extiende por Europa y Asia, famoso por su rica historia, arquitectura monumental, como la Plaza Roja en Moscú, y su vasta diversidad cultural.",                ,
                "País sudamericano con una geografía diversa que incluye playas caribeñas, la selva amazónica y los Andes. Conocido por el Salto Ángel, la cascada más alta del mundo."
            ]

            break;
        case 2:
            category.innerHTML = `Categoria: Medios de Transporte`;


            palabras = ["Avion", "Barco", "Tren", "Bicicleta", "Coche",
                "Autobus", "Helicoptero", "Velero", "Scooter", "Motocicleta",
                "Teleferico"
            ]

            mensajePalabra = ["Medio de transporte aéreo que permite viajar rápidamente entre destinos distantes, conectando ciudades y países de todo el mundo.", "Vehículo acuático que navega por mares y océanos, utilizado para transportar mercancías y personas, además de ser una opción recreativa.",
                "Medio de transporte ferroviario que conecta diferentes lugares, proporcionando un viaje eficiente y cómodo por tierra.", "Vehículo de dos ruedas propulsado por pedales, ideal para el ejercicio y el transporte personal, respetuoso con el medio ambiente.",
                "Medio de transporte terrestre común, ofreciendo comodidad y flexibilidad para desplazarse individualmente o en grupo.", "Vehículo de transporte público que lleva a pasajeros a diferentes destinos, proporcionando una opción accesible y conveniente.",
                "Aeronave capaz de despegar y aterrizar verticalmente, utilizada para vuelos cortos y en áreas de difícil acceso.", "Embarcación a vela que navega por océanos y mares, proporcionando una experiencia tranquila y escénica.",
                "Medio de transporte de dos ruedas impulsado por motor, ágil y compacto, ideal para desplazamientos urbanos.", "Vehículo de dos ruedas motorizado, conocido por su agilidad y versatilidad, perfecto para viajes cortos o largos.",
                "Sistema de transporte aéreo que utiliza cabinas suspendidas por cables para transportar personas entre puntos elevados, ofreciendo vistas panorámicas."
            ]
            break
        default:
            category.innerHTML = `Categoria: Lugares Turisticos`;


            palabras = ["Montserrat", "Coliseo", "Louvre", "Santorini", "Dubai",
                "Viena", "Atenas", "Acropolis", "Piramides", "Jerusalen",
                "Tokyo"
            ]
            mensajePalabra = ["Una montaña y monasterio en Cataluña, España, conocidos por su belleza natural, espiritualidad y vistas impresionantes.", "Antiguo anfiteatro romano en Italia, símbolo de la grandeza arquitectónica romana y escenario de eventos históricos y gladiadores.",
                "Museo en París, Francia, hogar de la Mona Lisa y una vasta colección de arte, siendo uno de los museos más grandes y visitados del mundo.", "Isla griega famosa por sus impresionantes vistas, arquitectura blanca distintiva y aguas cristalinas, un destino turístico paradisíaco.",
                "Ciudad en los Emiratos Árabes Unidos con rascacielos futuristas, islas artificiales y atracciones lujosas, representando la modernidad y la opulencia.", "Capital de Austria, conocida por su arquitectura imperial, música clásica y encanto histórico, siendo cuna de grandes compositores como Mozart y Beethoven.",
                "Capital de Grecia, rica en historia antigua y hogar de la Acrópolis, un sitio arqueológico destacado con el Partenón y otros templos.", "Antigua ciudadela en Atenas, Grecia, con templos históricos que representan la grandeza de la civilización griega.",
                "Capital de Egipto, famosa por sus pirámides, la Esfinge de Giza y el Museo Egipcio, que alberga tesoros faraónicos.", "Ciudad sagrada para varias religiones, con sitios históricos como el Muro de los Lamentos, la Iglesia del Santo Sepulcro y la Cúpula de la Roca.",
                "Capital de Japón, una metrópolis moderna que combina la tradición con la tecnología, ofreciendo una experiencia única con su animada cultura y luces brillantes."
            ]
            break;

    }
    setCookie("category", electionCategory, 1);

    return palabras;

}

function selectWord() {

    let selection;
    let wordElection;

    const maxWords = 11

    selection = Math.floor(Math.random() * maxWords) + 1;
    wordElection = wordsGame[selection];
    mensajeElection = mensajePalabra[selection];


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

console.log(wordSelect);
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

    setCookie("palabra", palabra, 1);


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

            setCookie("acierto", acierto, 1);
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



        setCookie("intento", trys, 1);
        comprobacionDerrota();
    }


}


function contarTiempo() {

    timerRegre = setInterval(() => {

        timer++;
        showTime.innerHTML = `Tiempo: ${timer} segundos`;
        setCookie("timer", timer, 1);


    }, seconsTrans)

}

function comprobacionVictoria() {

    let resultado = document.getElementById('resultado');

    if (acierto == wordSelect.length) {
        clearInterval(timerRegre);

        document.getElementById("contenedorGame").style.display = "none";
        document.getElementById("contenedor").style.display = "block";
        mensajeFinal();
        resultado.innerHTML = `Felicidaes haz logrado descubrir la palabra en ${timer} segundos`;

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
        mensajeFinal();
        resultado.innerHTML = `Lamentablemente no se ha completado la palabra`;

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

function mensajeFinal() {

    let menFinal = document.getElementById("mensajeFinal");
    let palabraFinal = document.getElementById("palabraFinal");

    palabraFinal.innerHTML = wordSelect;
    menFinal.innerHTML = mensajeElection;

    let source = `../img/${wordSelect}.png`;
    let img = document.getElementById("ImagenMensajeFinal");
    img.src = source;



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
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
