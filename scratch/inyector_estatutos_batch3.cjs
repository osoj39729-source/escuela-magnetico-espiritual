const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/estatutos-y-reglamentos_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Estatutos y Reglamentos (Batch 3 - Claves 30 a 44)
const nuevosNodos = {
  "009: Art. 6: Propiedad y Maestro Nato": {
    "PilotoDeCoherencia": "Representación Jurídica. Los bienes de la Escuela se registran a nombre del Maestro Nato (el fundador y sus sucesores) para máxima economía y seguridad, pero son inalienables sin acuerdo del consejo.",
    "CitaInelutable": "Son considerados y reconocidos... de propiedad del maestro fundador hoy y de substituto después... no puede enajenar bienes raíces e inmuebles... sin unidad de parecer con el consejo.",
    "EjemploPedagogico": "El capitán de un barco que tiene las llaves de la caja fuerte; el dinero no es suyo para gastarlo en lujos, sino para el combustible y la comida de toda la tripulación, y solo puede abrirla bajo la mirada de sus oficiales.",
    "ConexionDoctrinal": ["Maestro Nato (Autoridad)", "Bienes Inmuebles"],
    "NodosSimapticos": []
  },
  "010: Art. 7: Perpetuidad de la Escuela": {
    "PilotoDeCoherencia": "Continuidad Operativa. La Escuela existe mientras haya quien la rija conforme a lo estatuido. Su desaparición solo ocurriría si no hay hombres capaces de sostener el orden interno y externo.",
    "CitaInelutable": "La Escuela Magnético Espiritual de la Comuna Universal, existe siempre, mientras haya quien o quienes, la pueda o la puedan llevar y regir.",
    "EjemploPedagogico": "Una antorcha que nunca se apaga mientras haya un corredor que se la pase al siguiente; la luz no depende de un solo hombre, sino de la voluntad de mantener la carrera viva.",
    "ConexionDoctrinal": ["Perpetuidad", "Sucesión Doctrinal"],
    "NodosSimapticos": []
  },
  "011: Art. 8: Consejo Asesor y Poder Ejecutivo": {
    "PilotoDeCoherencia": "Trinidad de Mando. El Poder Ejecutivo radica en el Maestro Nato, auxiliado por 2 secretarios y 3 auxiliares medianímicos, formando el Consejo Asesor de 5 miembros.",
    "CitaInelutable": "Radica invariablementey exclusivamente, en el maestro nato... auxiliado por dos secretarios... más tres auxiliares... de facultades medianímicas.",
    "EjemploPedagogico": "Un director de orquesta que tiene a sus primeros violines y a sus oídos más finos (médiums) para asegurar que la música sea perfecta; el director decide, pero los auxiliares le informan sobre la armonía invisible.",
    "ConexionDoctrinal": ["Consejo Asesor", "Mediumnidad de Gobierno"],
    "NodosSimapticos": ["Consejo Asesor", "Mediumnidad de Gobierno"]
  },
  "012: Art. 9: Asamblea Comunal": {
    "PilotoDeCoherencia": "Representación Civil. La Asamblea Comunal (10 titulares y 10 suplentes) ostenta la representación social y civil. Se encarga de la investigación, medios y examen de adherentes, sin tener presidente propio.",
    "CitaInelutable": "Ostentan para el público y leyes nacionales, la representación civil y social de la Escuela. Esta Asamblea, no tiene presidente.",
    "EjemploPedagogico": "Un consejo de vecinos que se encarga de hablar con la municipalidad y revisar que todos los nuevos integrantes del barrio respeten las normas; no hay un jefe entre ellos, pues todos sirven al mismo propósito.",
    "ConexionDoctrinal": ["Asamblea Comunal", "Representación Civil"],
    "NodosSimapticos": ["Asamblea Comunal"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Consejo Asesor": {
    "Definición": "Órgano consultivo y de auxilio directo al Maestro Nato. Está integrado por los dos secretarios de la Escuela y los tres auxiliares medianímicos. Su función es validar las decisiones administrativas y espirituales, asegurando la unidad de parecer en la gestión de los bienes y la doctrina.",
    "Contexto": "Estatutos y Reglamento (Art. 8).",
    "Conexiones": ["Maestro Nato", "Secretarios", "Auxiliares"],
    "Obras": ["Estatutos y Reglamentos"]
  },
  "Mediumnidad de Gobierno": {
    "Definición": "Uso específico de las facultades medianímicas dentro de la estructura administrativa de la EMECU. Los auxiliares del Consejo Asesor utilizan su sensibilidad para captar las vibraciones y consejos del Plano Espiritual Superior, orientando la ejecución de la justicia y la administración de la Comuna.",
    "Contexto": "Estatutos y Reglamento (Art. 8).",
    "Conexiones": ["Auxiliares", "Justicia", "Consejo Asesor"],
    "Obras": ["Estatutos y Reglamentos", "Ley de las Mediumnidades"]
  },
  "Asamblea Comunal": {
    "Definición": "Cuerpo colegiado de la EMECU encargado de la representación legal ante el Estado y la sociedad civil. Sus miembros (10 titulares y 10 suplentes) supervisan la moralidad de los adherentes, gestionan recursos y actúan como puente entre la Escuela y el mundo exterior, rigiéndose por el principio de igualdad sin presidencia fija.",
    "Contexto": "Estatutos y Reglamento (Art. 9).",
    "Conexiones": ["Representación Civil", "Investigación", "Comuna"],
    "Obras": ["Estatutos y Reglamentos"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 3 de Estatutos y Reglamentos (4 nodos) y 3 términos sinápticos. Gobierno y Asamblea sellados.');
