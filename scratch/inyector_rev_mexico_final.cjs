const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/la-revolucion-de-mexico_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - La Revolución de México (Batch 4 - FINAL - Capítulos 17 a 20)
const nuevosNodos = {
  "011: Capítulo 17: La Causa Única de las Guerras": {
    "PilotoDeCoherencia": "Raíz del Conflicto. Despojándose de prejuicios, se revela que el odio infundido por las religiones (al dividir a los hombres en salvos y condenados) es la causa real de todas las guerras.",
    "CitaInelutable": "De las dos causas aparentes que causan las guerras, sólo es una... el usurpador [religión] le infunde el odio a los que no pertenecen a su dogma.",
    "EjemploPedagogico": "Un maestro que enseña a la mitad de su clase a odiar a la otra mitad porque no leen el mismo libro; el conflicto no nace de los niños, sino de la semilla de división plantada por el maestro.",
    "ConexionDoctrinal": ["Odio Religioso (Causa)", "Justicia Universal"],
    "NodosSimapticos": ["Odio Religioso (Causa)"]
  },
  "012: Capítulo 18: El Crimen de Norteamérica": {
    "PilotoDeCoherencia": "Crítica al Intervencionismo. Se denuncia la frialdad y el egoísmo de la política norteamericana que, por intereses materiales, obstaculiza la soberanía y el progreso de las Américas.",
    "CitaInelutable": "¿Qué podrán decir los norteamericanos y otros fríos?... las Américas van despacio pero van seguras y con la mirada fija en el cumplimiento de su deber.",
    "EjemploPedagogico": "Un vecino rico que presta dinero a una familia humilde para luego quitarles su casa y decirles cómo deben criar a sus hijos, ignorando el derecho y la dignidad de esa familia.",
    "ConexionDoctrinal": ["Crimen de Norteamérica (Contexto)", "Soberanía de los Pueblos"],
    "NodosSimapticos": ["Crimen de Norteamérica (Contexto)"]
  },
  "013: Capítulo 19: Unidad Sudamericana": {
    "PilotoDeCoherencia": "Solidaridad Continental. Las repúblicas del sur (Argentina, Chile, Brasil) no pueden ser indiferentes ante México, pues la causa de la libertad es común a todos los hermanos de raza y espíritu.",
    "CitaInelutable": "Las Repúblicas Sudamericanas no pueden ser indiferentes... su causa es común... la Argentina con Chile llamaron al Brasil y los tres ofrecieron sus buenos oficios.",
    "EjemploPedagogico": "Tres hermanos que corren a ayudar a un cuarto hermano que está siendo atacado; saben que si el cuarto cae, el agresor irá luego por ellos.",
    "ConexionDoctrinal": ["Unidad Sudamericana (Causa Común)", "Fraternidad Hispana"],
    "NodosSimapticos": ["Unidad Sudamericana (Causa Común)"]
  },
  "014: Capítulo 20: El Triunfo de la Paz Verdadera": {
    "PilotoDeCoherencia": "Justicia sobre Carestía. El malestar mundial y la carestía no son falta de producción, sino efecto de la injusticia y la guerra armada; el triunfo de la causa de Villa representa la instauración del gobierno del pueblo para la paz.",
    "CitaInelutable": "La causa es la Ley de Justicia a la que el hombre no puede dominar más que equiparándose a ella... implantar el gobierno del pueblo, por el pueblo y para el pueblo.",
    "EjemploPedagogico": "Un granero lleno de trigo mientras la gente afuera muere de hambre porque los soldados custodian la puerta para una guerra que nadie quiere; la paz solo llega cuando el pueblo abre el granero y comparte el pan.",
    "ConexionDoctrinal": ["Paz Armada (Crítica)", "Régimen Comunal"],
    "NodosSimapticos": ["Paz Armada (Crítica)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Crimen de Norteamérica (Contexto)": {
    "Definición": "Concepto utilizado por Trincado para señalar la responsabilidad moral y política de los Estados Unidos en la desestabilización de los movimientos libertarios en América Latina, motivada por el afán de supremacía económica y territorial.",
    "Contexto": "La Revolución de México (Capítulo Dieciocho).",
    "Conexiones": ["Intervencionismo", "Egoísmo", "Soberanía"],
    "Obras": ["La Revolución de México"]
  },
  "Unidad Sudamericana (Causa Común)": {
    "Definición": "Axioma de fraternidad política que impulsa la unión de las naciones sudamericanas (lideradas históricamente por el bloque ABC: Argentina, Brasil, Chile) para defender la soberanía continental contra influencias extranjeras y mediar en conflictos fratricidas.",
    "Contexto": "La Revolución de México (Capítulo Diecinueve).",
    "Conexiones": ["Fraternidad", "Solidaridad", "Justicia"],
    "Obras": ["La Revolución de México"]
  },
  "Paz Armada (Crítica)": {
    "Definición": "Denuncia trincadista contra el sistema de militarización y armamento de las naciones, el cual consume la riqueza del trabajo humano y genera carestía artificial, siendo una paz falsa que solo sirve para mantener la injusticia y los dogmas.",
    "Contexto": "La Revolución de México (Capítulo Veinte).",
    "Conexiones": ["Guerra", "Injusticia", "Carestía"],
    "Obras": ["La Revolución de México"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectado Batch 4 FINAL de La Revolución de México. Metafísica de la libertad sellada.');
