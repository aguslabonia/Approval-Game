let preguntas = {
  "Deportes": [
    {
      "pregunta": "¿En qué país se originó el fútbol?",
      "opciones": ["Inglaterra", "Brasil", "Italia", "Alemania"],
      "respuesta": "Inglaterra",
      "extra": "El fútbol moderno se originó en Inglaterra en el siglo XIX."
    },
    {
      "pregunta": "¿Cuántos jugadores hay en un equipo de baloncesto en cancha?",
      "opciones": ["5", "6", "7", "11"],
      "respuesta": "5",
      "extra": "Cada equipo de baloncesto tiene 5 jugadores en cancha."
    }
  ],
  "Ciencia": [
    {
      "pregunta": "¿Cuál es el elemento químico más abundante en el universo?",
      "opciones": ["Oxígeno", "Hidrógeno", "Carbono", "Helio"],
      "respuesta": "Hidrógeno",
      "extra": "El hidrógeno constituye aproximadamente el 75% de la materia visible del universo."
    },
    {
      "pregunta": "¿Qué órgano humano consume más energía?",
      "opciones": ["Corazón", "Cerebro", "Hígado", "Pulmones"],
      "respuesta": "Cerebro",
      "extra": "El cerebro consume alrededor del 20% de la energía total del cuerpo."
    }
  ],
  "Historia": [
    {
      "pregunta": "¿Quién fue el primer emperador romano?",
      "opciones": ["Julio César", "Augusto", "Nerón", "Tiberio"],
      "respuesta": "Augusto",
      "extra": "Augusto fue el primer emperador romano, gobernando desde el 27 a.C."
    },
    {
      "pregunta": "¿En qué año cayó el Muro de Berlín?",
      "opciones": ["1987", "1989", "1991", "1993"],
      "respuesta": "1989",
      "extra": "El Muro de Berlín cayó el 9 de noviembre de 1989."
    }
  ],
  "Humanidad": [
    {
      "pregunta": "¿Cuál es el idioma más hablado en el mundo?",
      "opciones": ["Inglés", "Chino mandarín", "Español", "Hindi"],
      "respuesta": "Chino mandarín",
      "extra": "El chino mandarín es hablado por más de 900 millones de personas."
    },
    {
      "pregunta": "¿En qué continente se encuentra el desierto del Sahara?",
      "opciones": ["Asia", "África", "Oceanía", "América"],
      "respuesta": "África",
      "extra": "El Sahara es el desierto cálido más grande del mundo."
    }
  ],
  "Cultura": [
    {
      "pregunta": "¿Qué país es famoso por el sushi?",
      "opciones": ["China", "Japón", "Corea", "Tailandia"],
      "respuesta": "Japón",
      "extra": "El sushi es uno de los platos más representativos de la gastronomía japonesa."
    },
    {
      "pregunta": "¿Cuál es la capital de Australia?",
      "opciones": ["Sídney", "Melbourne", "Canberra", "Brisbane"],
      "respuesta": "Canberra",
      "extra": "Canberra fue elegida capital para resolver la rivalidad entre Sídney y Melbourne."
    }
  ],
  "Series de televisión": [
    {
      "pregunta": "¿En qué ciudad transcurre la serie 'Friends'?",
      "opciones": ["Los Ángeles", "Chicago", "Nueva York", "Miami"],
      "respuesta": "Nueva York",
      "extra": "La serie 'Friends' se desarrolla en Manhattan, Nueva York."
    },
    {
      "pregunta": "¿Cómo se llama el reino principal en 'Game of Thrones'?",
      "opciones": ["Hogwarts", "Narnia", "Westeros", "Mordor"],
      "respuesta": "Westeros",
      "extra": "Westeros es el continente ficticio donde ocurre la mayor parte de la serie."
    }
  ],
  "Películas": [
    {
      "pregunta": "¿Quién dirigió la película 'Jurassic Park'?",
      "opciones": ["James Cameron", "Steven Spielberg", "George Lucas", "Tim Burton"],
      "respuesta": "Steven Spielberg",
      "extra": "Jurassic Park se estrenó en 1993 y fue dirigida por Spielberg."
    },
    {
      "pregunta": "¿Cuál es el nombre del hobbit protagonista en 'El Señor de los Anillos'?",
      "opciones": ["Frodo", "Bilbo", "Sam", "Pippin"],
      "respuesta": "Frodo",
      "extra": "Frodo Bolsón es el portador del anillo en la trilogía."
    }
  ],
  "Empresas": [
    {
      "pregunta": "¿Qué empresa creó el iPhone?",
      "opciones": ["Samsung", "Apple", "Google", "Microsoft"],
      "respuesta": "Apple",
      "extra": "El primer iPhone fue lanzado en 2007 por Apple."
    },
    {
      "pregunta": "¿Cuál es el buscador de internet más usado en el mundo?",
      "opciones": ["Bing", "Yahoo", "Google", "DuckDuckGo"],
      "respuesta": "Google",
      "extra": "Google procesa más de 3.500 millones de búsquedas al día."
    }
  ],
  "Música": [
    {
      "pregunta": "¿Quién es conocido como el 'Rey del Pop'?",
      "opciones": ["Elvis Presley", "Michael Jackson", "Freddie Mercury", "Prince"],
      "respuesta": "Michael Jackson",
      "extra": "Michael Jackson revolucionó la música y el baile con su estilo único."
    },
    {
      "pregunta": "¿De qué país es originaria la banda 'The Beatles'?",
      "opciones": ["Estados Unidos", "Australia", "Reino Unido", "Canadá"],
      "respuesta": "Reino Unido",
      "extra": "The Beatles se formó en Liverpool en 1960."
    }
  ],
  "Tecnología": [
    {
      "pregunta": "¿Qué significa 'www' en una dirección web?",
      "opciones": ["World Wide Web", "Web World Wide", "Wide Web World", "Web Web World"],
      "respuesta": "World Wide Web",
      "extra": "La World Wide Web fue inventada por Tim Berners-Lee en 1989."
    },
    {
      "pregunta": "¿Cuál fue la primera red social popular en internet?",
      "opciones": ["Facebook", "MySpace", "Hi5", "Friendster"],
      "respuesta": "MySpace",
      "extra": "MySpace fue la red social más popular antes de la llegada de Facebook."
    }
  ]
};
cargarTemas();
let temaActual = '';
let preguntasTema = [];
let indicePregunta = 0;
let puntaje = 0;
let respuestasUsuario = [];
let nombreUsuario = "";


function cargarTemas() {
  const temaSelect = document.getElementById('tema');
  temaSelect.innerHTML = '';
  Object.keys(preguntas).forEach(tema => {
    const option = document.createElement('option');
    option.value = tema;
    option.textContent = tema;
    temaSelect.appendChild(option);
  });
}

document.getElementById('empezar').onclick = () => {
  nombreUsuario = document.getElementById('nombre-usuario').value.trim();
  if (!nombreUsuario) {
    alert("Por favor, ingresa tu nombre para jugar.");
    return;
  }
document.getElementById('empezar').onclick = () => {
  temaActual = document.getElementById('tema').value;
  preguntasTema = [...preguntas[temaActual]];
  indicePregunta = 0;
  puntaje = 0;
  respuestasUsuario = [];
  document.getElementById('tema-selector').style.display = 'none';
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('juego').style.display = 'block';
  document.getElementById('musica-fondo').volume = 0.2;
  document.getElementById('musica-fondo').currentTime = 0;
  document.getElementById('musica-fondo').play();
  mostrarPregunta();
  actualizarBarraProgreso();
};

document.getElementById('siguiente').onclick = () => {
  indicePregunta++;
  if (indicePregunta < preguntasTema.length) {
    mostrarPregunta();
    actualizarBarraProgreso();
  } else {
    mostrarResultado();
    actualizarBarraProgreso();
  }
};

document.getElementById('reiniciar').onclick = () => {
  document.getElementById('tema-selector').style.display = 'block';
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('juego').style.display = 'none';
  actualizarBarraProgreso(0);
};

function mostrarPregunta() {
  const preguntaObj = preguntasTema[indicePregunta];
  const preguntaArea = document.getElementById('pregunta-area');
  preguntaArea.innerHTML = `<h2>${preguntaObj.pregunta}</h2>`;
  preguntaObj.opciones.forEach(opcion => {
    const btn = document.createElement('button');
    btn.textContent = opcion;
    btn.className = 'opcion';
    btn.onclick = () => seleccionarOpcion(btn, opcion, preguntaObj.respuesta, preguntaObj.extra);
    preguntaArea.appendChild(btn);
  });
  document.getElementById('siguiente').style.display = 'none';
}
function normalizarTexto(texto) {
  return texto
    .toString()
    .normalize("NFD") // quita tildes
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ") // reemplaza múltiples espacios por uno solo
    .replace(/\u00A0/g, " ") // reemplaza espacios no separables por espacio normal
    .trim()
    .toLowerCase();
}
function seleccionarOpcion(btn, opcion, respuesta, extra) {
  const opciones = document.querySelectorAll('.opcion');
  opciones.forEach(b => {
    b.disabled = true;
    if (normalizarTexto(b.textContent) === normalizarTexto(respuesta)) {
      b.classList.add('correcta');
    } else if (b === btn && normalizarTexto(b.textContent) !== normalizarTexto(respuesta)) {
      b.classList.add('incorrecta');
    }
  });
  let esCorrecta = normalizarTexto(opcion) === normalizarTexto(respuesta);
  if (esCorrecta && document.getElementById('sonido-correcto')) {
    let audio = document.getElementById('sonido-correcto');
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play();
    puntaje++;
  } else if (!esCorrecta && document.getElementById('sonido-incorrecto')) {
    let audio = document.getElementById('sonido-incorrecto');
    audio.currentTime = 0;
    audio.volume = 1;
    audio.play();
  }
  // Guarda la respuesta del usuario
  respuestasUsuario.push({
    pregunta: preguntasTema[indicePregunta].pregunta,
    correcta: respuesta,
    usuario: opcion,
    extra: extra || ""
  });
  document.getElementById('siguiente').style.display = 'inline-block';
}

function mostrarResultado() {
  document.getElementById('juego').style.display = 'none';
  document.getElementById('resultado').style.display = 'block';
  document.getElementById('musica-fondo').pause();
  document.getElementById('musica-fondo').currentTime = 0;
document.getElementById('puntaje').textContent = `${nombreUsuario}, tu puntaje: ${puntaje} de ${preguntasTema.length}`;
  mostrarResumen();
  guardarPuntaje(nombreUsuario, puntaje);
  mostrarRanking();
}

function mostrarResumen() {
  let resumenHTML = '<h3 class="resumen-titulo">Resumen de tus respuestas</h3>';
  respuestasUsuario.forEach(r => {
    const esCorrecta = normalizarTexto(r.usuario) === normalizarTexto(r.correcta);
    resumenHTML += `
      <div class="resumen-card">
        <div class="resumen-pregunta"><strong>${r.pregunta}</strong></div>
        <div class="resumen-respuesta">
          <span class="res-label">Tu respuesta:</span>
          <span class="res-user ${esCorrecta ? 'correcta' : 'incorrecta'}">${r.usuario}</span>
        </div>
        ${!esCorrecta ? `<div class="resumen-correcta"><span class="res-label">Correcta:</span> <span>${r.correcta}</span></div>` : ''}
        <div class="resumen-extra">${r.extra || ''}</div>
      </div>
    `;
  });
  document.getElementById('resumen').innerHTML = resumenHTML;
}

function guardarPuntaje(nombre, puntaje) {
  let ranking = JSON.parse(localStorage.getItem('approvalRanking') || '[]');
  ranking.push({ nombre, puntaje, fecha: new Date().toLocaleString() });
  // Ordena de mayor a menor puntaje y deja solo los 10 mejores
  ranking = ranking.sort((a, b) => b.puntaje - a.puntaje).slice(0, 10);
  localStorage.setItem('approvalRanking', JSON.stringify(ranking));
}

function mostrarRanking() {
  let ranking = JSON.parse(localStorage.getItem('approvalRanking') || '[]');
  let html = `
    <h3 class="ranking-titulo">Ranking local (Top 10)</h3>
    <div class="ranking-list">
  `;
  if (ranking.length === 0) {
    html += `<div class="ranking-item ranking-empty">¡Aún no hay puntajes! Sé el primero en jugar.</div>`;
  } else {
    ranking.forEach((r, i) => {
      html += `
        <div class="ranking-item${i === 0 ? ' ranking-primero' : ''}">
          <div class="ranking-puesto">${i + 1}</div>
          <div class="ranking-nombre">${r.nombre}</div>
          <div class="ranking-puntaje">${r.puntaje}</div>
          <div class="ranking-fecha">${r.fecha}</div>
        </div>
      `;
    });
  }
  html += `</div>`;
  document.getElementById('resumen').innerHTML += html;
}

function actualizarBarraProgreso() {
  const barra = document.getElementById('barra-progreso');
  let porcentaje = 0;
  if (preguntasTema.length > 0) {
    porcentaje = ((indicePregunta) / preguntasTema.length) * 100;
    if (document.getElementById('resultado').style.display === 'block') {
      porcentaje = 100;
    }
  }
  barra.style.width = porcentaje + '%';
}
window.addEventListener('DOMContentLoaded', () => {
  const musica = document.getElementById('musica-fondo');
  if (musica) {
    musica.volume = 0.2;
    // Intenta reproducir al cargar
    const playPromise = musica.play();
    // Si el navegador lo bloquea, espera la primera interacción
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const iniciarMusica = () => {
          musica.play();
          window.removeEventListener('click', iniciarMusica);
          window.removeEventListener('keydown', iniciarMusica);
        };
        window.addEventListener('click', iniciarMusica);
        window.addEventListener('keydown', iniciarMusica);
      });
    }
  }
});
};