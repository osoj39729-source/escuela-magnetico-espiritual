const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "10527: CAPÍTULO OCTAVO: Un solo Idioma y una sola Raza": {
    "PilotoDeCoherencia": "La estabilidad de la paz mundial depende de la unificación lingüística y racial de la humanidad. Trincado sostiene que el amor de raza impulsa la inteligencia para lograr que la raza Adámica (Hispana) absorba las demás etapas evolutivas, creando una unidad fisiológica y espiritual bajo un solo idioma universal.",
    "IdeasSecundarias": [
      "El cruce etnicista es la herramienta científica para disolver las diferencias de casta y raza.",
      "La ley de las fuerzas establece que 'el más domina al menos', guiando la evolución hacia la perfección racial.",
      "La inteligencia se aguza mediante el deseo de triunfo de la propia raza sobre los obstáculos del progreso."
    ],
    "CitasIneludibles": [
      "Un solo idioma hará una sola raza",
      "La Paz del mundo no será estable sino en la unidad de una raza",
      "El más domina al menos... ley de las fuerzas"
    ]
  },
  "11223: CAPÍTULO DIEZ y 11475: CAPITULO PRIMERO: Disolución de Naciones y Fronteras": {
    "PilotoDeCoherencia": "El amor rompe todas las vallas y obstáculos a la libre marcha del espíritu. Al consolidarse una sola raza, las naciones desaparecen para dar paso a regiones climáticas bajo una sola ley común. Trincado aboga por la abolición total de las fronteras y de la moneda metálica, estableciendo al hombre como el único valor de intercambio.",
    "IdeasSecundarias": [
      "La educación igualitaria en grados y materias unificará el sentimiento humano en todo el planeta.",
      "Las vallas impuestas por ejércitos y religiones deben ser quemadas por el fuego del querer del obrero.",
      "El caso de José en Egipto demuestra que el amor, incluso con egoísmo, puede abrir fronteras por necesidad de destino."
    ],
    "CitasIneludibles": [
      "no habiendo ya más que una raza, no hacen falta Naciones",
      "no habiendo más moneda que el hombre",
      "EL AMOR NO TIENE FRONTERAS",
      "Vallas son todo aquello que nos opone un obstáculo a nuestra libre marcha"
    ]
  },
  "11471: QUINTA PARTE y 11870: La Revolución como Necesidad de Vida": {
    "PilotoDeCoherencia": "El Amor Universal es la perfección relativa de un mundo. Justifica la acción destructiva de los movimientos revolucionarios como una obligación para garantizar el derecho a vivir frente a las vallas del privilegio. La Comuna es el destino final donde la solidaridad universal se materializa en la unidad absoluta del pensamiento y la acción.",
    "IdeasSecundarias": [
      "Los ejércitos revolucionarios actúan movidos por la necesidad de supervivencia y la justicia racional.",
      "La Ética-Comunista es el grado máximo de la moral nacional que trasciende hacia lo universal.",
      "El juramento de sociedades secretas (como los Caballeros de Colón) representa la oposición reaccionaria que debe ser vencida."
    ],
    "CitasIneludibles": [
      "EL AMOR UNIVERSAL DEL MUNDO ES LA PERFECCIÓN RELATIVA",
      "los ejércitos llamados rojos... se ven obligados a destruir y matar, por la obligación y el derecho de vivir",
      "el obrero... quemará [las vallas] y será con y por Amor"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 10) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Un_solo_Idioma_una_Raza": {
    "palabras_clave": ["idioma universal", "raza única", "unificación", "paz mundial", "adámica", "hispana"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#10527: CAPÍTULO OCTAVO: Un solo Idioma y una sola Raza"],
    "contexto_real": "Principio de unidad humana que elimina las barreras lingüísticas y genéticas para establecer la armonía planetaria."
  },
  "Hombre_como_unica_Moneda": {
    "palabras_clave": ["moneda", "hombre", "valor humano", "comuna", "economía", "abolición dinero"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#11223: CAPÍTULO DIEZ y 11475: CAPITULO PRIMERO: Disolución de Naciones y Fronteras"],
    "contexto_real": "Transformación del sistema económico donde el valor sagrado es el individuo y su trabajo, no el metal o el papel moneda."
  },
  "Amor_Universal_Perfeccion_Relativa": {
    "palabras_clave": ["amor universal", "perfección relativa", "comuna universal", "fin de naciones", "regiones"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#11471: QUINTA PARTE y 11870: La Revolución como Necesidad de Vida"],
    "contexto_real": "Estado final de evolución social en un mundo donde la fraternidad rige todas las relaciones humanas sin exclusiones."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');
