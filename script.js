// --- 1. Definimos las listas de palabras ---
const formatos = [
    "una aplicación web", 
    "una app móvil", 
    "un bot de Telegram", 
    "un script de automatización", 
    "una extensión de navegador",
    "una plataforma online"
];

const publicos = [
    "para estudiantes", 
    "para dueños de mascotas", 
    "para músicos", 
    "para viajeros", 
    "para deportistas",
    "para programadores"
];

const problemas = [
    "que ayuda a organizar tareas", 
    "que encuentra recetas de cocina", 
    "que enseña un nuevo idioma", 
    "que conecta a personas con intereses similares", 
    "que monitoriza los hábitos de sueño",
    "que gestiona las finanzas personales"
];

// --- 2. Obtenemos las referencias a los elementos del HTML ---
const boton = document.getElementById("boton-generar");
const cajaIdea = document.getElementById("idea-generada");

// --- 3. Creamos la función que genera la idea ---
function generarIdea() {
    // Escogemos un elemento al azar de cada lista
    const formatoAleatorio = formatos[Math.floor(Math.random() * formatos.length)];
    const publicoAleatorio = publicos[Math.floor(Math.random() * publicos.length)];
    const problemaAleatorio = problemas[Math.floor(Math.random() * problemas.length)];

    // Combinamos las partes para formar la idea completa
    const ideaFinal = `Crear ${formatoAleatorio} ${publicoAleatorio} ${problemaAleatorio}.`;

    // Mostramos la idea en la caja de texto
    // Usamos .innerHTML para poder meter etiquetas HTML, como <p>
    cajaIdea.innerHTML = `<p>${ideaFinal}</p>`;
}

// --- 4. Le decimos al botón que, cuando le hagan clic, ejecute la función `generarIdea` ---
boton.addEventListener("click", generarIdea);