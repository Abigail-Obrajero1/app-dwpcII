function seleccionarImagenAlAzar(imagenes) {
    // Obtener un número aleatorio entre 0 y la longitud de la lista de imágenes
    var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  
    // Obtener la URL de la imagen aleatoria
    var imagenAleatoria = imagenes[indiceAleatorio];
  
    return imagenAleatoria;
  }
  
 