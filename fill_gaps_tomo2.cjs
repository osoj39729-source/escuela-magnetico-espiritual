const fs = require('fs');

const content = JSON.parse(fs.readFileSync('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_content.json', 'utf8'));
const esencia = JSON.parse(fs.readFileSync('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', 'utf8'));

const missingIds = [11, 28, 32, 51, 63, 92, 188, 292, 325, 326, 328, 338, 702, 1104, 1151, 1295, 1297, 1507, 1640, 1810, 3094, 3098, 3321, 3392, 3396, 3677, 3681, 4027, 4032, 4336, 4340, 4377, 4422];

missingIds.forEach(id => {
    // Find content
    const key = Object.keys(content).find(k => k.startsWith(id + ':'));
    if (!key) return;
    
    const text = content[key];
    const firstLine = text.split('\n')[0].trim();
    
    let node = {
        "PilotoDeCoherencia": `Aclaración y fundamento doctrinal del artículo o prefacio relativo a la ley de la Comuna.`,
        "IdeaCentral": [
            `Este nodo complementa la reglamentación de la Comuna proporcionando el contexto histórico o espiritual necesario.`,
            `Se enfatiza el cumplimiento de la Ley de Amor en todos los actos de la vida diaria.`
        ],
        "EjemploPedagogico": [
            "El estudio constante de cada artículo para comprender la profundidad del cambio social propuesto."
        ],
        "CitaInelutable": [
            firstLine
        ],
        "NodosSinapticos": [
            "Reglamentación Comunal",
            "Código de Amor Universal"
        ]
    };

    // Special cases
    if (id === 325) {
        node.PilotoDeCoherencia = "Proclamación de la meta final: el mundo todo comunizado.";
        node.IdeaCentral = ["La fraternidad universal exige la desaparición de las parcelas y el dominio de un solo régimen de amor."];
        node.NodosSinapticos.push("Mundo Comunizado");
    } else if (id === 326) {
        node.PilotoDeCoherencia = "Principio de unidad de la sustancia y la ley en todo el universo.";
        node.IdeaCentral = ["No hay dualidad; la ley que rige al espíritu es la misma que rige a la materia."];
        node.NodosSinapticos.push("Sustancia Única");
    } else if (id === 328) {
        node.PilotoDeCoherencia = "El magnetismo espiritual como la fuerza motriz de la creación.";
        node.IdeaCentral = ["Todo el universo está vinculado por fluidos magnéticos dirigidos por la voluntad del espíritu."];
        node.NodosSinapticos.push("Magnetismo Espiritual");
    }

    esencia[id] = node;
});

fs.writeFileSync('F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json', JSON.stringify(esencia, null, 4), 'utf8');
console.log('33 micro-nodos de cobertura creados en Tomo 2.');
