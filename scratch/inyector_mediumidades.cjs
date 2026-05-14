/**
 * INYECTOR: Ley de las Mediumnidades en General
 * Propósito: Insertar nodos sinapticos en diccionario_sinapsis.json
 * Estándar: Juez Amoroso por Sabiduría - Anti-Dogmático
 */

const fs = require('fs');
const path = require('path');
const DICCIONARIO_PATH = path.resolve('F:/trincado/public/data/diccionario_sinapsis.json');

const NUEVOS_NODOS = {
  "Mediumidad_Definicion_Legal": {
    "palabras_clave": [
      "mediumnidad", "poder psíquico", "cera blanda", "diamante armadura",
      "dinamismo", "espíritu sabio", "misionero", "instrumento"
    ],
    "nodos_sinapticos": [
      "ley-de-las-mediumidades-en-general_esencia.json#Naturaleza_Mediumnidad",
      "el-magnetismo-en-su-origen_esencia.json#Siete_Grados_Magnetismo"
    ],
    "contexto_real": "Mediumnidad = Poder Psíquico. Compuesto de: Cera (materia impresionable) + Diamante (constitución facultativa) + Dinamismo (fuente productora). Art. 6: Las mediumnidades solo las poseen espíritus sabios por trabajo. El médium no se pertenece a sí mismo: es misionero."
  },
  "Espiritualismo_Crimen": {
    "palabras_clave": [
      "espiritualismo", "centros dogmáticos", "amalgama religiosa",
      "Kardec traicionado", "fenomenistas", "caridad falsa", "dioses convenientes"
    ],
    "nodos_sinapticos": [
      "ley-de-las-mediumidades-en-general_esencia.json#Espiritismo_vs_Espiritualismo",
      "cuestionario-espirita-racional_esencia.json#Espiritismo_vs_Religión"
    ],
    "contexto_real": "El Espiritismo es Jesús; el Espiritualismo es Jesucristo (fabricación religiosa). Los centros espiritualistas han hecho más daño que todas las religiones juntas. Kardec dijo Espiritismo; los cobardes dijeron Espiritualismo. Ningún espíritu de Luz hoy habla de caridad: solo de amor, justicia y la Comuna."
  },
  "Mediumidad_y_Salud_Mental": {
    "palabras_clave": [
      "enajenación mental", "histerismo médium", "facultad sin desarrollar",
      "ciencia médica incapaz", "curar espíritu cura materia", "razón del médium"
    ],
    "nodos_sinapticos": [
      "ley-de-las-mediumidades-en-general_esencia.json#El_Medico_del_Espiritu"
    ],
    "contexto_real": "Jamás un médium desarrollado ha perdido la razón. La enajenación ocurre en quien NO desarrolló su facultad. La ciencia médica no puede curar esas enfermedades sin reconocer al espíritu. Art. 32: Solo el desarrollo de la facultad cura al espíritu enfermo. Curad al espíritu y curaréis la materia."
  },
  "Videncia_y_Desdoblamiento": {
    "palabras_clave": [
      "videncia", "desdoblamiento consciente", "telegrafo del espíritu de verdad",
      "mundos mayores", "electro-magno", "secretos del padre", "facultad mayor"
    ],
    "nodos_sinapticos": [
      "ley-de-las-mediumidades-en-general_esencia.json#Las_Dos_Facultades_Mayores",
      "el-magnetismo-en-su-origen_esencia.json#Siete_Grados_Magnetismo"
    ],
    "contexto_real": "Art. 18: La videncia + desdoblamiento consciente es la cumbre del ser humano. Registra pensamientos, entrañas de la tierra, mundos del universo. El hombre con desdoblamiento consciente puede transformar un mundo entero dentro de la justicia. Son el telégrafo secreto del Espíritu de Verdad."
  },
  "Mixificadores_y_Caridad": {
    "palabras_clave": [
      "mixtificador", "caridad falsa señal", "espíritu encarnado perturbador",
      "santos desterrados", "charlatanes agoreros", "malversores facultades"
    ],
    "nodos_sinapticos": [
      "ley-de-las-mediumidades-en-general_esencia.json#Reglas_de_Sesion",
      "ley-de-las-mediumidades-en-general_esencia.json#Magnetismo_en_la_Ley"
    ],
    "contexto_real": "Art. 8: Si un comunicante habla de caridad, expulsarlo en nombre de la justicia. Los perturbadores son espíritus encarnados que se desdoblan a las sesiones. Los que comercian con facultades (curanderos, agoreros, adivinos) son malversores. La comisión investigadora puede desposeerlos de sus facultades."
  },
  "Deberes_Eticos_Medium": {
    "palabras_clave": [
      "14 deberes del médium", "coraza fluídica", "vanidad del médium",
      "inspiración del guía", "oír al maestro", "bien por el bien mismo"
    ],
    "nodos_sinapticos": [
      "ley-de-las-mediumidades-en-general_esencia.json#Deberes_del_Medium"
    ],
    "contexto_real": "Art. 10: Los 14 deberes del médium van de la humildad sin servilismo al estudio constante, la coraza fluídica, rechazo de la vanidad y la alegría sensata. El médium representa al guía → al Espíritu de Verdad → al Padre. No hacer evocaciones de curiosidad ni aceptar preguntas sin autorización del maestro."
  },
  "Electro_Magno_Prometido": {
    "palabras_clave": [
      "electro-magno", "descubrimiento prometido", "mundos mayores secretos",
      "fuentes riqueza comuna", "médiums desdoblamiento", "nueva energía"
    ],
    "nodos_sinapticos": [
      "ley-de-las-mediumidades-en-general_esencia.json#Las_Dos_Facultades_Mayores"
    ],
    "contexto_real": "Art. 29: Los mediums de desdoblamiento consciente están destinados a traer secretos de los mundos mayores. El 'Electro-Magno', prometido por la ley del Padre a Trincado, renovará todas las fuentes de riqueza de la Comuna cuando llegue su hora."
  }
};

try {
  const rawData = fs.readFileSync(DICCIONARIO_PATH, 'utf8');
  const diccionario = JSON.parse(rawData);
  let insertados = 0, omitidos = 0;
  for (const [clave, valor] of Object.entries(NUEVOS_NODOS)) {
    if (diccionario.CONCEPTOS[clave]) { console.log(`[OMITIDO] ${clave}`); omitidos++; }
    else { diccionario.CONCEPTOS[clave] = valor; console.log(`[INYECTADO] ${clave}`); insertados++; }
  }
  fs.writeFileSync(DICCIONARIO_PATH, JSON.stringify(diccionario, null, 2), 'utf8');
  console.log(`\n✅ Ley de las Mediumnidades inyectada. Insertados: ${insertados} | Omitidos: ${omitidos}`);
} catch (e) { console.error('❌ ERROR:', e.message); process.exit(1); }
