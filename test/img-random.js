

// Lista de URLs de imágenes
var imagenes = [
    '../img/895410.png',

    // Agrega más URLs de imágenes aquí
];

// Obtener un número aleatorio entre 0 y la longitud de la lista de imágenes
var indiceAleatorio = Math.floor(Math.random() * imagenes.length);

// Obtener la URL de la imagen aleatoria
var imagenAleatoria = imagenes[indiceAleatorio];

// Crear un elemento de imagen HTML
var img = document.createElement('img');

// Establecer la fuente (src) de la imagen en la URL aleatoria
img.src = imagenAleatoria;

// Agregar la imagen a un elemento HTML existente en tu página, por ejemplo, un div con el id "imagen-aleatoria"
var contenedor = document.getElementById('imagen-aleatoria');
contenedor.appendChild(img);
