/**
 * INYECTOR COMBINADO: Estatutos, Laudo de Rigor y Reglamento Interno
 * Propósito: Insertar nodos sinapticos en diccionario_sinapsis.json
 * Estándar: Juez Amoroso por Sabiduría - Anti-Dogmático
 */

const fs = require('fs');
const path = require('path');
const DICCIONARIO_PATH = path.resolve('F:/trincado/public/data/diccionario_sinapsis.json');

const NUEVOS_NODOS = {

  // === ESTATUTOS Y REGLAMENTO ===
  "EMECU_Carta_Organica": {
    "palabras_clave": [
      "estatutos", "carta orgánica", "EMECU fundación", "sin credo político",
      "trabajo en común usufructo en común", "bienes comunales",
      "maestro nato propietario", "asamblea comunal"
    ],
    "nodos_sinapticos": [
      "estatutos-y-reglamentos_esencia.json#Declaracion_de_Principios_EMECU",
      "estatutos-y-reglamentos_esencia.json#Bienes_y_Estructura_Legal"
    ],
    "contexto_real": "Fundada el 6 de enero de 1919 en Buenos Aires. Art. 2: Sin credo político, religioso ni supremacías internas. Art. 5: Los bienes son comunales; 'El que nada sacrifica, a nada tiene derecho.' Art. 6: Los bienes son propiedad del maestro nato. Art. 8: El poder ejecutivo reside invariablemente en el maestro nato."
  },
  "Asamblea_Comunal_EMECU": {
    "palabras_clave": [
      "asamblea comunal", "10 titulares 10 suplentes", "sin presidente",
      "obligacionistas", "representación civil EMECU", "investigación adherentes"
    ],
    "nodos_sinapticos": [
      "estatutos-y-reglamentos_esencia.json#Asamblea_Comunal"
    ],
    "contexto_real": "Art. 9: La Asamblea Comunal (10 titulares + 10 suplentes) representa civilmente a la EMECU ante leyes nacionales. No tiene presidente. Sus incumbencias: investigación, procuración de medios, examen de adherentes. Se reúne semanalmente bajo dirección de miembro del consejo asesor."
  },

  // === LAUDO DE RIGOR ===
  "Laudo_Rigor_1930": {
    "palabras_clave": [
      "laudo de rigor", "decreto 1930", "suspensión facultades",
      "superchería automática fuera reglamento", "moisés paralelo",
      "36 siglos kábala", "gran catorce"
    ],
    "nodos_sinapticos": [
      "laudode-rigor_esencia.json#Decretos_del_Laudo",
      "laudode-rigor_esencia.json#Paralelo_Moises_Laudo"
    ],
    "contexto_real": "Promulgado el 27/12/1930. Suspende todas las facultades medianímicas fuera de los horarios reglamentados (Martes/Viernes 20-22, Domingos 15-17). Toda posesión fuera de esas horas es automáticamente superchería. Paralelo directo con la prohibición de Moisés a los 36 siglos. Debe leerse en voz alta una vez por mes en todas las cátedras."
  },
  "Gran_Catorce_Secreto": {
    "palabras_clave": [
      "gran 14", "gran catorce", "kábala moisés", "secreto esotérico",
      "espiritismo es todo", "nada es vacío todo está lleno", "números ocultos"
    ],
    "nodos_sinapticos": [
      "laudode-rigor_esencia.json#Gran_Catorce"
    ],
    "contexto_real": "El 'Gran 14' es el secreto guardado por Moisés en la Kábala. Solo el espíritu progresado puede penetrarlo. Al descubrirse: 'LO QUE LA IGNORANCIA LLAMÓ VACÍO Y LA NADA, ESTÁ LLENO Y ES EL TODO Y, TODO ELLO ES ESPIRITISMO Y EL ESPIRITISMO LO ES TODO.'"
  },
  "Escuela_Esenica": {
    "palabras_clave": [
      "escuela esénica", "escuela de moisés", "moisés ancianos",
      "antecesora EMECU", "36 siglos", "puerta cerrada puerta abierta"
    ],
    "nodos_sinapticos": [
      "laudode-rigor_esencia.json#Paralelo_Moises_Laudo",
      "filosofia-enciclopedica-universal-tomo-2_esencia.json#Prologo_del_Juez"
    ],
    "contexto_real": "Fundada por Moisés con los ancianos que le siguieron, tras prohibir las mediumnidades a los levitas. Existió por 36 siglos (puerta cerrada). El Juicio de Mayoría de 1912 abrió la nueva era: la EMECU es la continuación de la Escuela Esénica con puerta abierta para todos."
  },

  // === REGLAMENTO INTERNO ===
  "Escalera_Admision_EMECU": {
    "palabras_clave": [
      "entráticos", "novatos", "simpatizantes", "adherentes obligacionistas",
      "credencial", "comisariado investigación", "solicitud-promesa"
    ],
    "nodos_sinapticos": [
      "reglamento-interno_esencia.json#Escalera_de_Admision"
    ],
    "contexto_real": "4 grados de admisión: 1) Entráticos (4 visitas dominicales), 2) Novatos (credencial + 3 composiciones escritas), 3) Simpatizantes, 4) Adherentes/Obligacionistas (Credencial + Solicitud-Promesa + contribución voluntaria). El Comisariado investiga a cada visitante antes de la 4ª visita."
  },
  "Tres_Pascuas_EMECU": {
    "palabras_clave": [
      "pascua máxima", "pascua grande", "pascua de libertad",
      "juicio de mayoría aniversario", "maría y joaquín viejo",
      "natalicio jesús diciembre", "fiesta universal 12 octubre"
    ],
    "nodos_sinapticos": [
      "reglamento-interno_esencia.json#Fiestas_Fijas_EMECU"
    ],
    "contexto_real": "PASCUA MÁXIMA: 1-7 abril (aniversario Juicio de Mayoría). PASCUA GRANDE: 15-19 agosto (desencarnación de María y Joaquín el Viejo). PASCUA DE LIBERTAD: 3-5 diciembre (natalicio de Jesús y desencarnación de Xavier). FIESTA UNIVERSAL: 12 octubre (fraternidad universal). FIESTAS DE CONSEJOS: 18-19 marzo."
  },
  "Presentacion_Ninos_Juramentados": {
    "palabras_clave": [
      "presentación niños", "niños juramentados", "después del 5 abril 1912",
      "promesa antes de reencarnar", "guía y protector testimonio",
      "prontuario espirita-racionalista"
    ],
    "nodos_sinapticos": [
      "reglamento-interno_esencia.json#Presentacion_de_Ninos"
    ],
    "contexto_real": "Los niños nacidos después del 5/4/1912 (Juicio) vienen con promesa espiritual. La EMECU les emite un Testimonio con sus guías espirituales. Obligación sagrada de los padres presentarlos. El Prontuario Espírita-Racionalista les recuerda su juramento al reencarnar."
  },
  "Siempre_Mas_Alla": {
    "palabras_clave": [
      "siempre más allá", "lema EMECU", "progreso eterno",
      "ningún logro es el fin", "espíritu avanza", "señores de sí mismos"
    ],
    "nodos_sinapticos": [
      "reglamento-interno_esencia.json#Declaracion_de_Identidad_Reglamento"
    ],
    "contexto_real": "Lema de acción y progreso de la EMECU. Clausura todos los reglamentos, laudos y comunicaciones del Maestro. 'SEÑORES DE VOSOTROS MISMOS Y ESCLAVOS DE VUESTRO DEBER.' El espíritu no tiene fin; avanza eternamente. 'SIEMPRE MÁS ALLÁ.'"
  },
  "Canon_27_Libros_EMECU": {
    "palabras_clave": [
      "27 libros canon", "lista de libros obligatorios", "orden de estudio",
      "tarjeta novato simpatizante", "biblioteca completa", "extracto libros"
    ],
    "nodos_sinapticos": [
      "reglamento-interno_esencia.json#Escalera_de_Admision"
    ],
    "contexto_real": "El Reglamento Interno (3ª Ed.) contiene la lista canónica oficial y comentada de los 27 libros de la EMECU que todo adherente debe tener y estudiar por orden. Se inicia con el Discurso de Strossmayer y el Buscando a Dios y culmina con el Conócete a Ti Mismo y el Alfaquí Vademécum. Esta es la lista que anula las anteriores."
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
  console.log(`\n✅ Estatutos + Laudo de Rigor + Reglamento Interno inyectados.`);
  console.log(`   Nodos insertados: ${insertados} | Omitidos (ya existían): ${omitidos}`);
} catch (e) { console.error('❌ ERROR:', e.message); process.exit(1); }
