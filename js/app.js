let wordsGame;
let wordSelect;
let provenLyrics = [];
let lyricsProven = document.getElementById("provenLyrics");
let trys;
let showTime = document.getElementById("time");
const seconsTrans = 1000;
let timer;
let success = 0;
let words;
let messageWord;
let messageElection;

let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function startWords() {
  let category = document.getElementById("category");
  let electionCategory;

  const maxCategory = 3;

  if (getCookie("category")) {
    electionCategory = getCookie("category");
  } else {
    electionCategory = Math.floor(Math.random() * maxCategory) + 1;
  }

  switch (electionCategory) {
    case 1:
      category.innerHTML = `Categoria: Paises`;

      words = [
        "Argentina",
        "Japon",
        "Italia",
        "Australia",
        "India",
        "Canada",
        "Mexico",
        "China",
        "España",
        "Rusia",
        "Venezuela"
      ];

      messageWord = [
        "Un país en América del Sur conocido por su tango, asados deliciosos y vastos paisajes, que van desde las cataratas de Iguazú hasta la Patagonia.",
        "Una nación insular en Asia que combina la rica tradición cultural con la tecnología moderna. Japón es famoso por su sushi, samuráis y hermosos templos.",
        "País europeo famoso por su arte renacentista, arquitectura histórica, deliciosa comida (como la pasta y la pizza) y ciudades encantadoras como Roma y Florencia.",
        " Continente-isla con una diversidad única de flora y fauna. Hogar de la Gran Barrera de Coral, canguros y koalas, así como ciudades vibrantes como Sídney y Melbourne.",
        "País colorido y diverso con una rica historia, arquitectura impresionante (como el Taj Mahal) y una variedad de tradiciones culturales, incluyendo la danza y la gastronomía.",
        " Gran país norteamericano conocido por su belleza natural, como los Parques Nacionales de Banff y Jasper, así como su amabilidad y calidad de vida.",
        "País latinoamericano con una cultura vibrante, famoso por su gastronomía picante, festivales coloridos, playas hermosas y antiguas ruinas mayas.",
        "Nación asiática con una historia milenaria, destacando la Gran Muralla China, la Ciudad Prohibida y la rica tradición cultural que incluye la medicina tradicional china.",
        "País europeo conocido por su alegría de vivir, festivales animados como La Tomatina y la Feria de Abril, así como la arquitectura única de Antoni Gaudí en Barcelona.",
        "País extenso que se extiende por Europa y Asia, famoso por su rica historia, arquitectura monumental, como la Plaza Roja en Moscú, y su vasta diversidad cultural.",
        ,
        "País sudamericano con una geografía diversa que incluye playas caribeñas, la selva amazónica y los Andes. Conocido por el Salto Ángel, la cascada más alta del mundo."
      ];

      break;
    case 2:
      category.innerHTML = `Categoria: Medios de Transporte`;

      words = [
        "Avion",
        "Barco",
        "Tren",
        "Bicicleta",
        "Coche",
        "Autobus",
        "Helicoptero",
        "Velero",
        "Scooter",
        "Motocicleta",
        "Teleferico"
      ];

      messageWord = [
        "Medio de transporte aéreo que permite viajar rápidamente entre destinos distantes, conectando ciudades y países de todo el mundo.",
        "Vehículo acuático que navega por mares y océanos, utilizado para transportar mercancías y personas, además de ser una opción recreativa.",
        "Medio de transporte ferroviario que conecta diferentes lugares, proporcionando un viaje eficiente y cómodo por tierra.",
        "Vehículo de dos ruedas propulsado por pedales, ideal para el ejercicio y el transporte personal, respetuoso con el medio ambiente.",
        "Medio de transporte terrestre común, ofreciendo comodidad y flexibilidad para desplazarse individualmente o en grupo.",
        "Vehículo de transporte público que lleva a pasajeros a diferentes destinos, proporcionando una opción accesible y conveniente.",
        "Aeronave capaz de despegar y aterrizar verticalmente, utilizada para vuelos cortos y en áreas de difícil acceso.",
        "Embarcación a vela que navega por océanos y mares, proporcionando una experiencia tranquila y escénica.",
        "Medio de transporte de dos ruedas impulsado por motor, ágil y compacto, ideal para desplazamientos urbanos.",
        "Vehículo de dos ruedas motorizado, conocido por su agilidad y versatilidad, perfecto para viajes cortos o largos.",
        "Sistema de transporte aéreo que utiliza cabinas suspendidas por cables para transportar personas entre puntos elevados, ofreciendo vistas panorámicas."
      ];
      break;
    default:
      category.innerHTML = `Categoria: Lugares Turisticos`;

      words = [
        "Montserrat",
        "Coliseo",
        "Louvre",
        "Santorini",
        "Dubai",
        "Viena",
        "Atenas",
        "Acropolis",
        "Piramides",
        "Jerusalen",
        "Tokyo"
      ];
      messageWord = [
        "Una montaña y monasterio en Cataluña, España, conocidos por su belleza natural, espiritualidad y vistas impresionantes.",
        "Antiguo anfiteatro romano en Italia, símbolo de la grandeza arquitectónica romana y escenario de eventos históricos y gladiadores.",
        "Museo en París, Francia, hogar de la Mona Lisa y una vasta colección de arte, siendo uno de los museos más grandes y visitados del mundo.",
        "Isla griega famosa por sus impresionantes vistas, arquitectura blanca distintiva y aguas cristalinas, un destino turístico paradisíaco.",
        "Ciudad en los Emiratos Árabes Unidos con rascacielos futuristas, islas artificiales y atracciones lujosas, representando la modernidad y la opulencia.",
        "Capital de Austria, conocida por su arquitectura imperial, música clásica y encanto histórico, siendo cuna de grandes compositores como Mozart y Beethoven.",
        "Capital de Grecia, rica en historia antigua y hogar de la Acrópolis, un sitio arqueológico destacado con el Partenón y otros templos.",
        "Antigua ciudadela en Atenas, Grecia, con templos históricos que representan la grandeza de la civilización griega.",
        "Capital de Egipto, famosa por sus pirámides, la Esfinge de Giza y el Museo Egipcio, que alberga tesoros faraónicos.",
        "Ciudad sagrada para varias religiones, con sitios históricos como el Muro de los Lamentos, la Iglesia del Santo Sepulcro y la Cúpula de la Roca.",
        "Capital de Japón, una metrópolis moderna que combina la tradición con la tecnología, ofreciendo una experiencia única con su animada cultura y luces brillantes."
      ];
      break;
  }
  setCookie("category", electionCategory, 1);

  return words;
}

function selectWord() {
  let selection;
  let wordElection;

  const maxWords = 11;

  selection = Math.floor(Math.random() * maxWords);
  wordElection = wordsGame[selection];
  messageElection = messageWord[selection];

  return wordElection;
}

function loadingGame() {
  if (getCookie("timer")) {
    timer = getCookie("timer");
  } else {
    timer = 0;
  }

  countTime();

  wordsGame = startWords();

  if (getCookie("words")) {
    wordSelect = getCookie("words");
  } else {
    wordSelect = selectWord();
  }

  if (getCookie("lyricsProven")) {
    provenLyrics = getCookie("lyricsProven").split(", ");
  }

  loadWord();

  const rows = 3;
  const cols = 9;

  let table = document.getElementById("letters");

  for (let i = 0; i < rows; i++) {
    // Crea una fila
    let row = table.insertRow(i);

    for (let j = 0; j < cols; j++) {
      // Crea una celda en la fila
      let cell = row.insertCell(j);

      // Crea un botón en la celda
      let button = document.createElement("button");
      button.id = i * cols + j; // Asigna un ID único al botón
      button.onclick = function () {
        revisionLyrics(this.id);
      };
      button.innerHTML = alphabet[i * cols + j];

      if (provenLyrics.includes(alphabet[i * cols + j])) {
        button.disabled = true;
      }

      // Añade el botón a la celda
      cell.appendChild(button);
    }
  }
}

function loadWord() {
  let parrafo = document.getElementById("wordGuess");

  console.log(wordSelect);
  for (let i = 0; i < wordSelect.length; i++) {
    let span = document.createElement("span");

    if (provenLyrics.includes(wordSelect[i].toUpperCase())) {
      span.innerHTML = wordSelect[i].toUpperCase();
    }

    parrafo.appendChild(span);
  }
}

function revisionLyrics(id) {
  const spans = document.querySelectorAll("#wordGuess span");

  let successs = false;

  let botnSelect = document.getElementById(id);
  botnSelect.disabled = true;

  let letter = botnSelect.innerHTML.toUpperCase();
  let words = wordSelect.toUpperCase();

  if (getCookie("words")) {
    words = getCookie("words");
  }

  setCookie("words", words, 1);

  provenLyrics.push(letter);

  lyricsProven.innerHTML = `Letras Probadas: ${provenLyrics.join(", ")} `;

  setCookie("lyricsProven", provenLyrics.join(", "), 1);

  console.log(words);

  if (getCookie("success")) {
    success = getCookie("success");
  } else {
    success = 0;
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i] === letter) {
      spans[i].innerHTML = letter;
      success++;

      successs = true;

      setCookie("success", success, 1);
      verificationVictory();
    }
  }

  if (successs == false) {
    if (getCookie("trys")) {
      trys = getCookie("trys");
    } else {
      trys = 0;
    }

    trys++;
    let source = `../img/img${trys}.png`;
    let img = document.getElementById("imagenStart");

    img.src = source;

    setCookie("trys", trys, 1);
    verificationDefeat();
  }
}

function countTime() {
  timerRegre = setInterval(() => {
    timer++;
    showTime.innerHTML = `Tiempo: ${timer} segundos`;
    setCookie("timer", timer, 1);
  }, seconsTrans);
}

function verificationVictory() {
  let result = document.getElementById("result");

  if (success == wordSelect.length) {
    clearInterval(timerRegre);

    document.getElementById("containerGame").style.display = "none";
    document.getElementById("container").style.display = "block";
    finalMessage();
    result.innerHTML = `Felicidaes haz logrado descubrir la palabra en ${timer} segundos`;

    deleteCookie("timer");
    deleteCookie("trys");
    deleteCookie("success");
    deleteCookie("lyricsProven");
    deleteCookie("words");
    deleteCookie("category");
  }
}

function verificationDefeat() {
  let result = document.getElementById("result");

  if (trys == 7) {
    clearInterval(timerRegre);

    document.getElementById("containerGame").style.display = "none";
    document.getElementById("container").style.display = "block";
    finalMessage();
    result.innerHTML = `Lamentablemente no se ha completado la palabra`;

    deleteCookie("timer");
    deleteCookie("trys");
    deleteCookie("success");
    deleteCookie("lyricsProven");
    deleteCookie("words");
    deleteCookie("category");
  }
}

function createGame
() {
  document.getElementById("formStart").style.display = "none";
  document.getElementById("containerGame").style.display = "inline-block";

  return false;
}

function finalMessage() {
  let menFinal = document.getElementById("finalMessage");
  let wordFinal = document.getElementById("wordFinal");

  wordFinal.innerHTML = wordSelect;
  menFinal.innerHTML = messageElection;

  let source = `../img/${wordSelect}.png`;
  let img = document.getElementById("FinalImageMessage");
  img.src = source;
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function deleteCookie(cookie) {
  document.cookie =
    cookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
