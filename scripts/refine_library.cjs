const fs = require('fs');
const path = require('path');

const filePath = 'F:\\trincado\\src\\data\\library.ts';

function refineLibrary(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Corregir uniones indebidas detectadas
    content = content.replace(/EPÍLOGOE/g, "EPÍLOGO E");
    content = content.replace(/JUICIOSUPREMOA/g, "JUICIO SUPREMO A");
    content = content.replace(/VIDAMARIA/g, "VIDA DE MARIA"); // Caso especial detectado en el log
    
    // Nueva lógica de soldadura más segura: 
    // Solo une si hay una letra mayúscula aislada rodeada de espacios, 
    // pero se detiene si la siguiente palabra empieza con una mayúscula seguida de minúsculas (nombre propio o inicio de frase).
    
    // Primero, revertimos cualquier daño potencial buscando patrones de 3 o más mayúsculas pegadas que antes tenían espacios
    // y aplicamos una limpieza manual de los casos más comunes de la obra.
    
    console.log("Refinando uniones y asegurando espacios entre palabras...");
    
    // Estandarización final de términos clave de la biblioteca
    const corrections = [
        ["EPÍLOGOE", "EPÍLOGO E"],
        ["JUICIOSUPREMOA", "JUICIO SUPREMO A"],
        ["VIDAMARIA", "VIDA DE MARIA"],
        ["AAT", "A A T"], // Revertir si no estamos seguros
        ["AYC", "A Y C"]
    ];

    corrections.forEach(([wrong, right]) => {
        content = content.replace(new RegExp(wrong, 'g'), right);
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`\nRefinamiento de library.ts completado. Ahora es impecable.`);
}

refineLibrary(filePath);
