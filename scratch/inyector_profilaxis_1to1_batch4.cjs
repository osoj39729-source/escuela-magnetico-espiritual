const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Profilaxis de la Vida (Batch 4 - Final y Ascensión)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "12124: ECONOMÍA UNIVERSAL Y EL TRÁNSITO DE MUNDOS": {
    "PilotoDeCoherencia": "La economía universal rige el ascenso de los mundos. La Tierra, al cumplir su ciclo en el grado 10, prepara a su familia para el siguiente grado. El progreso no es un regalo, es una construcción colectiva. Los espíritus fabrican sus mundos así como fabrican sus cuerpos. La solidaridad es la ley que permite que los maestros guíen a los menores en este tránsito infinito.",
    "CitaInelutable": "No hay gracias que se regalen en la Ley de la Creación; todo se gana con el esfuerzo.",
    "EjemploPedagogico": "Es como mudarse a una casa nueva: no esperes que la casa esté amueblada y limpia si tú no has trabajado para comprar los muebles. El mundo nuevo es la casa que tú mismo estás construyendo con tus obras de hoy.",
    "ConexionDoctrinal": ["Ascensión de Mundos", "Esfuerzo Propio", "Solidaridad Universal"],
    "NodosSimapticos": ["Mudanza de Almas", "Casa del Futuro", "Grados de Progreso"]
  },
  "12144: EL FIN DE LA MIXTIFICACIÓN RELIGIOSA": {
    "PilotoDeCoherencia": "Cerramos esta profilaxis denunciando la mixtificación de las religiones que han ocultado la ley de economía universal. El dogma es el parásito que consume la energía del hombre. Al despertar a la verdad de la vida eterna y continuada, el parásito muere y el hombre recupera su soberanía. ¡Luz y Vida!",
    "CitaInelutable": "La mixtificación religiosa es el velo que oculta la economía de la vida.",
    "EjemploPedagogico": "Es como quitarse una venda de los ojos y ver que el 'misterio' era solo una sombra proyectada por un cura. La sombra no tiene poder; la luz de la profilaxis la disuelve para siempre. Camina libre.",
    "ConexionDoctrinal": ["Desmitificación", "Soberanía del Espíritu", "Luz y Vida"],
    "NodosSimapticos": ["Velo del Dogma", "Parásito de Energía", "Despertar Soberano"]
  },
  "EPÍLOGO: EL SOL DE JUSTICIA EN PROFILAXIS": {
    "PilotoDeCoherencia": "El Sol de Justicia ha salido para higienizar la tierra. Esta obra queda como el manual de salud para la nueva humanidad. Quien siga estos consejos de los 24 Ancianos, no solo sanará su cuerpo, sino que preparará su espíritu para la entrada triunfal en la Comuna Universal. La tarea está cumplida.",
    "CitaInelutable": "El Sol de Justicia ilumina el camino de la profilaxis eterna.",
    "EjemploPedagogico": "Es el final de una larga operación quirúrgica: el paciente (la humanidad) ha despertado y la infección ha sido extirpada. Ahora empieza la convalecencia en el aire puro de la verdad. ¡Respira hondo!",
    "ConexionDoctrinal": ["Sol de Justicia", "Convalecencia Social", "Comuna"],
    "NodosSimapticos": ["Operación Quirúrgica Mundial", "Aire de Verdad", "Manual de Salud"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Ascensión de Mundos": {
    "Definición": "Proceso evolutivo y astronómico mediante el cual una familia espiritual se traslada a un plano vibratorio superior una vez cumplido el aprendizaje en el grado actual.",
    "Contexto": "Economía Universal en Profilaxis de la Vida.",
    "Conexiones": ["Progreso Infinito", "Grados", "Transmigración"],
    "Obras": ["Profilaxis de la Vida", "El Espiritismo en su Asiento"]
  },
  "Solidaridad Universal": {
    "Definición": "Vínculo de ayuda y enseñanza mutua entre seres de diferentes grados de evolución, garantizando que nadie quede estancado en su camino hacia el Creador.",
    "Contexto": "Cadena de maestros en Profilaxis de la Vida.",
    "Conexiones": ["Fraternidad", "Amor Universal", "Economía Universal"],
    "Obras": ["Profilaxis de la Vida", "Primer Rayo de Luz"]
  },
  "Mixtificación": {
    "Definición": "Acción de las religiones para distorsionar la verdad natural mediante dogmas, misterios y rituales, con el fin de confundir y dominar a los pueblos.",
    "Conexiones": ["Dogma", "Engaño", "Religión"],
    "Obras": ["Profilaxis de la Vida", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados los nodos finales 1:1 de Profilaxis de la Vida y 3 términos sinápticos.');
