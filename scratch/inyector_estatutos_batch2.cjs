const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/estatutos-y-reglamentos_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Estatutos y Reglamentos (Batch 2 - Claves 15 a 29)
const nuevosNodos = {
  "005: Art. 3: Universalidad y Respeto Civil": {
    "PilotoDeCoherencia": "Soberanía Transnacional. La Escuela es universal y no reconoce fronteras morales, pero acata las leyes civiles de cada nación siempre que no violen la libertad de pensamiento.",
    "CitaInelutable": "No tiene por nacionalidad una nación determinada, sino que es universal... acata y cumple las constituciones y leyes civiles.",
    "EjemploPedagogico": "Un ciudadano del mundo que vive en México; respeta el semáforo y las leyes locales, pero su corazón y su pensamiento no tienen muros ni banderas.",
    "ConexionDoctrinal": ["Universalidad", "Libertad de Pensamiento"],
    "NodosSimapticos": []
  },
  "006: Art. 4: Los Diez Propósitos de la EMECU": {
    "PilotoDeCoherencia": "Misión Integral. Los propósitos abarcan desde el estudio de leyes primordiales y bibliotecas hasta la creación de casas comunales y la protección de huérfanos y viudas.",
    "CitaInelutable": "Levantar casa y casas comunales... protección a los niños menores, huérfanos... operar en todos los ramos de la vida.",
    "EjemploPedagogico": "Una fundación que no solo enseña a leer, sino que construye comedores, protege a los desamparados y ayuda a gestionar los bienes de quienes no pueden hacerlo solos.",
    "ConexionDoctrinal": ["Comunización de Bienes", "Justicia Social"],
    "NodosSimapticos": []
  },
  "007: Art. 5: Intereses Comunales": {
    "PilotoDeCoherencia": "Fondo de Bien Común. Los recursos de la Escuela no son un fondo social con fines de lucro, sino intereses comunales destinados al bienestar de la comunidad.",
    "CitaInelutable": "No forman ni son nunca un fondo social: son intereses comunales, destinados al bien de la comunidad.",
    "EjemploPedagogico": "Una caja común en una familia donde todos ponen lo que pueden; no es para que el padre se haga rico, sino para que cuando un hijo necesite zapatos o medicinas, el dinero esté allí.",
    "ConexionDoctrinal": ["Intereses Comunales (Axioma)", "Trabajo en Común"],
    "NodosSimapticos": ["Intereses Comunales (Axioma)"]
  },
  "008: Art. 5 (Cont.): Sacrificio y Derecho": {
    "PilotoDeCoherencia": "Equidad de Esfuerzo. Se establece el axioma de que el derecho emana del sacrificio previo, fundamentado en el trabajo y usufructo en común.",
    "CitaInelutable": "El que nada sacrifica, a nada tiene derecho... nuestra ley primordial es el trabajo en común y el usufructo en común.",
    "EjemploPedagogico": "En una comida comunitaria, se espera que todos hayan ayudado a cocinar o a limpiar; quien se cruza de brazos y espera ser servido sin aportar nada, rompe el equilibrio de la justicia.",
    "ConexionDoctrinal": ["Sacrificio y Derecho (Axioma)", "Ley del Trabajo"],
    "NodosSimapticos": ["Sacrificio y Derecho (Axioma)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Intereses Comunales (Axioma)": {
    "Definición": "Principio económico de la EMECU que transforma el concepto de 'propiedad privada' o 'fondo social' en recursos destinados exclusivamente al servicio de la fraternidad universal. Los bienes administrados por la Escuela son patrimonio de la humanidad en progreso y no generan dividendos individuales.",
    "Contexto": "Estatutos y Reglamento (Art. 5).",
    "Conexiones": ["Comunismo (Doctrinal)", "Usufructo", "Justicia"],
    "Obras": ["Estatutos y Reglamentos", "Código de Amor Universal"]
  },
  "Sacrificio y Derecho (Axioma)": {
    "Definición": "Regla de oro de la justicia comunal que establece la proporcionalidad entre el esfuerzo aportado y los beneficios recibidos. Elimina el parasitismo social al exigir que cada individuo contribuya según su capacidad para poder recibir según su necesidad.",
    "Contexto": "Estatutos y Reglamento (Art. 5).",
    "Conexiones": ["Trabajo", "Justicia", "Responsabilidad"],
    "Obras": ["Estatutos y Reglamentos", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 2 de Estatutos y Reglamentos (4 nodos) y 2 términos sinápticos. Universalidad y Sacrificio sellados.');
