const fs = require('fs');

const filePath = 'F:\\trincado\\src\\data\\library.ts';

function repairAccents(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    console.log("Reparando acentos y codificación de forma segura...");
    
    // Lista de reparaciones basadas en los fallos detectados
    const fixes = [
        { from: /CAP\?TULO/g, to: "CAPÍTULO" },
        { from: /ART\?CULO/g, to: "ARTÍCULO" },
        { from: /EP\?LOGO/g, to: "EPÍLOGO" },
        { from: /raz/g, to: "raíz" },
        { from: /preado/g, to: "preñado" },
        { from: /estǭ/g, to: "está" },
        { from: //g, to: "" } // Eliminar el símbolo corrupto
    ];

    fixes.forEach(fix => {
        content = content.replace(fix.from, fix.to);
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`\nRestauración de acentos completada con éxito.`);
    } else {
        console.log(`\nNo se requirieron más reparaciones.`);
    }
}

repairAccents(filePath);
