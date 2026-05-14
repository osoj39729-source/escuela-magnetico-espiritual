const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "9822 y 9925: La Alquimia de los Senses y la Belleza": {
    "PilotoDeCoherencia": "Define los sentidos como las herramientas que el espíritu utiliza para percibir lo 'heterogéneo' del mundo exterior y transformarlo en ideas armónicas que luego devuelve a la materia convertidas en obras de belleza. Sostiene que los nervios no son simples conductores pasivos, sino que consumen energía nerviosa en un circuito cerrado que mantiene la vida.",
    "IdeasSecundarias": [
      "La perfección de los sentidos externos está directamente ligada a la finura de los sentidos internos (el espíritu).",
      "Vivir es gozar o sufrir; sin los sentidos, el espíritu no podría apreciar ni elevar la vida corporal.",
      "El sistema nervioso opera con un poder electro-motor constante, necesario para la presencia de la vida en todo el organismo."
    ],
    "CitasIneludibles": [
      "lo que no se goza o se sufre, no se vive",
      "transforman en ideas, que luego devuelve al exterior, hechas obras de belleza",
      "conduce la corriente a expensas de un gasto de su resistencia (energía nerviosa)"
    ]
  },
  "9959 al 10142: El Gusto, el Tacto y el Olfato 'Civilizado'": {
    "PilotoDeCoherencia": "Describe el gusto (el laboratorio) y el olfato (la chimenea) como sentidos complementarios para la nutrición y la defensa. Denuncia que el hombre 'civilizado' ha perdido la sutileza del olfato (capacidad de reconocer amigos y enemigos) por la falta de uso y su sustitución por estructuras de control social como la policía.",
    "IdeasSecundarias": [
      "El tacto proporciona tres impresiones fundamentales: geométricas (forma), termométricas (calor) y dinamométricas (peso).",
      "La lengua, con sus papilas y corpúsculos de Krause, es el centro de la sensibilidad sápida que no genera dolor en lo dulce.",
      "La piel, con sus cinco capas, es la frontera que comunica las vibraciones del medio ambiente con el interior del ser."
    ],
    "CitasIneludibles": [
      "la boca es el laboratorio y la nariz la chimenea",
      "en el hombre (que llamamos salvaje), el olfato le sirve también como al perro... lo ha sustituido por el cuerpo de policía",
      "tacto... impresiones: geométricas, termométricas y dinamométricas"
    ]
  },
  "10311: El Oído y la Vibración de la Inspiración": {
    "PilotoDeCoherencia": "Define el oído no solo como el receptor de vibraciones acústicas del aire o el agua, sino también como el canal para la 'inspiración' (vibraciones espirituales). Establece que el oído es el principal motor del desarrollo intelectual y social al permitir la captación de la armonía universal.",
    "IdeasSecundarias": [
      "Las vibraciones acústicas requieren un complejo proceso fisiológico antes de llegar al octavo par craneal.",
      "Distingue las impresiones por contacto (tacto/gusto) de las impresiones por vibración pura (oído/inspiración).",
      "El desarrollo intelectual depende de la capacidad del oído para filtrar y organizar las ondas del universo."
    ],
    "CitasIneludibles": [
      "apreciar las vibraciones acústicas del universo... y también por la inspiración",
      "principal de nuestro desarrollo intelectual y social",
      "vibraciones... por contactos de cuerpo sólidos, líquidos, gaseosos y espirituales"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 7) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Alquimia_de_los_Sentidos": {
    "palabras_clave": ["alquimia sensorial", "transformación ideas", "sensación a belleza", "heterogéneo a armónico", "obra de belleza"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#9822 y 9925: La Alquimia de los Senses y la Belleza"],
    "contexto_real": "Proceso mediante el cual el espíritu procesa los datos crudos de la materia para generar pensamiento creativo y armonía social."
  },
  "Olfato_Perdido": {
    "palabras_clave": ["olfato", "husmear", "pérdida de sutileza", "civilización vs salvaje", "reconocimiento amigo-enemigo"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#9959 al 10142: El Gusto, el Tacto y el Olfato 'Civilizado'"],
    "contexto_real": "Atrofia de un sentido biológico-defensivo en el hombre moderno debido a la dependencia de sistemas de seguridad externos."
  },
  "Inspiracion_Acustica": {
    "palabras_clave": ["inspiración", "vibración espiritual", "oído", "armonía universal", "ondas del universo"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#10311: El Oído y la Vibración de la Inspiración"],
    "contexto_real": "Capacidad del ser para captar verdades y conocimientos que no viajan por el aire, sino por la vibración fluídica del espíritu."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 7) para Filosofía Austera Racional.');
