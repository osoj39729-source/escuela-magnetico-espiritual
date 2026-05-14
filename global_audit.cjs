const fs = require('fs');
const path = require('path');

// Caminos base
const LIBRARY_PATH = 'f:/trincado/src/data/library.ts';
const CONTENTS_DIR = 'f:/trincado/public/data/contents';
const DICTIONARY_PATH = 'f:/trincado/public/data/diccionario_sinapsis.json';

function audit() {
    console.log("=== AUDITORÍA DOCTRINAL INTEGRAL ===");
    
    // 1. Leer Library
    const libraryContent = fs.readFileSync(LIBRARY_PATH, 'utf8');
    // Extraer el objeto LIBRARY_BOOKS usando una expresión regular o simplemente evaluando si fuera posible, 
    // pero como es TS, vamos a buscar el inicio del array.
    const jsonMatch = libraryContent.match(/export const LIBRARY_BOOKS: LibraryBook\[\] = (\[[\s\S]*?\]);/);
    if (!jsonMatch) {
        console.error("No se pudo encontrar LIBRARY_BOOKS en library.ts");
        return;
    }
    
    let libraryBooks;
    try {
        // Limpiar un poco para que JSON.parse funcione (aunque sea TS, la estructura de datos suele ser JSON-like)
        // Eliminamos tipos de TS si los hay dentro del array (complicado con regex simple, pero intentémoslo)
        let jsonStr = jsonMatch[1]
            .replace(/\/\/.*$/gm, '') // eliminar comentarios
            .replace(/,\s*\]/g, ']') // eliminar comas finales
            .replace(/,\s*\}/g, '}'); 
        
        // Intentar parsear. Si falla, usaremos una aproximación más manual.
        libraryBooks = eval(jsonMatch[1]); // eval es peligroso pero aquí estamos en un entorno controlado
    } catch (e) {
        console.error("Error al parsear LIBRARY_BOOKS:", e);
        return;
    }

    // 2. Leer Diccionario
    const dictionary = JSON.parse(fs.readFileSync(DICTIONARY_PATH, 'utf8'));
    
    const results = [];

    libraryBooks.forEach(book => {
        const id = book.id;
        const essenceFile = path.join(CONTENTS_DIR, `${id}_esencia.json`);
        const report = {
            id: id,
            title: book.title,
            indexCount: book.index.length,
            essenceExists: fs.existsSync(essenceFile),
            missingEssenceKeys: [],
            synapticTerms: 0,
            status: 'OK'
        };

        if (report.essenceExists) {
            const essenceData = JSON.parse(fs.readFileSync(essenceFile, 'utf8'));
            const essenceKeys = Object.keys(essenceData);
            
            // Comparar llaves
            book.index.forEach(key => {
                if (!essenceData[key]) {
                    report.missingEssenceKeys.push(key);
                }
            });
            
            report.essenceKeysCount = essenceKeys.length;
            if (report.missingEssenceKeys.length > 0) {
                report.status = 'INCONSISTENT';
            }
        } else {
            report.status = 'MISSING_ESSENCE';
        }

        // Contar términos en el diccionario para este libro
        // En el diccionario, cada término tiene una propiedad "nodos_sinapticos"
        // que es un array de strings: "book-id_esencia.json#Key"
        Object.values(dictionary.CONCEPTOS || {}).forEach(concept => {
            if (concept.nodos_sinapticos && Array.isArray(concept.nodos_sinapticos)) {
                concept.nodos_sinapticos.forEach(node => {
                    if (node.startsWith(`${id}_esencia.json`)) {
                        report.synapticTerms++;
                    }
                });
            }
        });

        results.push(report);
    });

    // 3. Generar Informe
    console.log("\n| Libro | Índice | Esencia | Mismatch | Términos Sínapsis | Estado |");
    console.log("| :--- | :---: | :---: | :---: | :---: | :--- |");
    results.forEach(r => {
        const mismatch = r.missingEssenceKeys.length;
        const essenceCount = r.essenceKeysCount || 0;
        console.log(`| ${r.title.substring(0, 30)} | ${r.indexCount} | ${essenceCount} | ${mismatch} | ${r.synapticTerms} | ${r.status} |`);
    });

    // 4. Libros Críticos
    console.log("\n=== ALERTAS CRÍTICAS ===");
    results.filter(r => r.status !== 'OK' || r.synapticTerms === 0).forEach(r => {
        console.log(`- [${r.status}] ${r.title}: ${r.missingEssenceKeys.length} llaves faltantes, ${r.synapticTerms} términos sínapsis.`);
    });
}

audit();
