import fs from 'fs';
import sharp from 'sharp';

const carpetaEntrada = './public/assets/imagenes-jpg/'
const carpetaSalida = './public/assets/imagenesInfoEmpresa/'

fs.readdir(carpetaEntrada, (err, files) => {
    if (err) {
        console.error('Error al leer la carpeta de entrada:', err);
        return;
    }

    // Itera sobre cada archivo en la carpeta de entrada
    files.forEach((file) => {
        // Verifica que sea una imagen (puedes ajustar la condición según tus necesidades)
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            // Lee la imagen desde la carpeta de entrada
            const imagePath = carpetaEntrada + file;
           // Genera el nombre de la imagen de salida con extensión .webp
            const imageOutputPath = carpetaSalida + file.replace(/\s+/g, '').replace(/\.[^.]+$/, '') + '.webp';

            // Convierte la imagen a WebP y guarda en la carpeta de salida
            sharp(imagePath)
                .toFormat('webp')
                .toFile(imageOutputPath)
                .then(() => console.log('Imagen convertida:', imageOutputPath))
                .catch((err) => console.error('Error al convertir la imagen:', err));
        }
    });
});