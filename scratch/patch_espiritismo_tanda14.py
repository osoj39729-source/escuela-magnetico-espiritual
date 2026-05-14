import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "10482: CAPTULO QUINTO: FENMENO DE AUDICIN, INTUICIN E INSPIRACIN": {
        "PilotoDeCoherencia": "Análisis de la comunicación interna: el espíritu no emite ondas sonoras físicas, sino vibraciones de pensamiento que el cerebro del médium decodifica como voces (audición) o ideas propias (intuición).",
        "CitaInelutable": "FENÓMENO DE AUDICIÓN, INTUICIÓN E INSPIRACIÓN.",
        "EjemploPedagogico": "Recibir un mensaje de texto. No oyes a la persona hablar, pero lees sus palabras y 'oyes' su voz en tu mente. La intuición es ese mensaje llegando directo al procesador central.",
        "IdeasPrincipales": ["Audición Espiritual", "Intuición Racional", "Inspiración"],
        "PuntosImportantes": [
            "La audición real ocurre en los centros cerebrales, no en el tímpano físico",
            "La inspiración científica es a menudo un dictado de espíritus especialistas",
            "Es la forma más sutil y constante de guía espiritual en la vida diaria"
        ],
        "NodosSinapticos": ["Audicion_Espiritual", "Intuicion_Racional", "Inspiracion_Cientifica"],
        "ContextoDiccionario": {
            "Audición_Espiritual": "La percepción de sonidos o voces articuladas por espíritus directamente en los centros sensoriales del cerebro, sin intervención del oído físico."
        }
    },
    "10573: CAPTULO SEXTO: FENMENOS DE LEVITACIN Y TRASLACIN": {
        "PilotoDeCoherencia": "Explicación de la superación de la gravedad mediante el magnetismo: el uso del fluido vital del médium por parte del espíritu para mover objetos pesados o elevar cuerpos humanos.",
        "CitaInelutable": "Nada hay que no sea un fenómeno del espiritismo... hasta los mismos negadores, médiums son.",
        "EjemploPedagogico": "Un tren Maglev que levita sobre las vías usando imanes. El fluido del médium es el campo magnético y la voluntad del espíritu es la energía que lo genera.",
        "IdeasPrincipales": ["Levitación Magnética", "Traslación de Objetos", "Fuerza del Espíritu"],
        "PuntosImportantes": [
            "Se requiere una gran cantidad de fluido animalizado del médium y los asistentes",
            "La fe no es necesaria para el fenómeno, pero sí una voluntad completa",
            "Incluso los actos de 'milagros' religiosos son en realidad levitaciones espíritas"
        ],
        "NodosSinapticos": ["Levitacion_Magnetica", "Traslacion_de_Objetos", "Fisica_Espiritual"],
        "ContextoDiccionario": {
            "Levitación_Magnética": "Fenómeno físico donde un objeto o persona se eleva y sostiene en el aire mediante la aplicación de fluidos magnéticos dirigidos por el espíritu."
        }
    },
    "10735: CAPTULO SPTIMO: EL FENMENO DE APORTE Y MATERIALIZACIN": {
        "PilotoDeCoherencia": "Estudio de la química del éter: el proceso de desmaterializar un objeto sólido para transportarlo y volverlo a materializar, o condensar fluidos para crear formas visibles.",
        "CitaInelutable": "EL FENÓMENO DE APORTE Y MATERIALIZACIÓN.",
        "EjemploPedagogico": "Convertir un bloque de hielo en vapor para pasarlo por una tubería estrecha y luego volverlo a congelar en el otro extremo. El espíritu hace esto con la materia atómica.",
        "IdeasPrincipales": ["Aporte Material", "Materialización Fluídica", "Química del Éter"],
        "PuntosImportantes": [
            "El aporte consume inmensas cantidades de fósforo cerebral del médium",
            "La materialización de espíritus es el grado más complejo de este fenómeno",
            "Requiere condiciones de absoluta seriedad y un 'laboratorio' fluídico limpio"
        ],
        "NodosSinapticos": ["Aporte_Material", "Materializacion_Fluidica", "Quimica_del_Eter"],
        "ContextoDiccionario": {
            "Materialización_Fluídica": "La condensación de fluidos periespirituales hasta el grado de visibilidad y tangibilidad física temporal."
        }
    },
    "11106: CAPTULO OCTAVO: LA INFLUENCIA DE LOS ESPRITUS": {
        "PilotoDeCoherencia": "La ley de afinidad en acción: cómo los pensamientos y deseos de los espíritus actúan sobre los encarnados, influyendo en sus decisiones sin anular su libertad.",
        "CitaInelutable": "LA INFLUENCIA DE LOS ESPÍRITUS.",
        "EjemploPedagogico": "Vivir en una casa donde todos gritan; terminarás irritado por la influencia del ambiente. Los espíritus son ese 'ambiente' invisible que nos rodea.",
        "IdeasPrincipales": ["Influencia Espiritual", "Afinidad Vibratoria", "Ambiente Fluídico"],
        "PuntosImportantes": [
            "Atraemos lo que vibramos; el pensamiento es un imán",
            "Los espíritus bajos buscan influir en los vicios; los de luz en el progreso",
            "El conocimiento de esta ley es la única defensa contra la obsesión"
        ],
        "NodosSinapticos": ["Influencia_Espiritual", "Afinidad_Vibratoria", "Libre_Albedrio"],
        "ContextoDiccionario": {
            "Influencia_Espiritual": "La acción persistente de los pensamientos y fluidos de los espíritus sobre la voluntad y el estado emocional de los encarnados."
        }
    },
    "11256: CAPTULO NOVENO: LA PARTICIPACIN DE LOS ESPRITUS EN LOS HECHOS DE LOS HOMBRES": {
        "PilotoDeCoherencia": "Justificación de la intervención espiritual en la historia: el espíritu trabaja en el presente de la humanidad porque es el campo donde sembrará su propia vida futura mediante la reencarnación.",
        "CitaInelutable": "La reencarnación es el primer deber... por deber los espíritus toman parte activa en los hechos de los hombres.",
        "EjemploPedagogico": "Un ciudadano que trabaja hoy para mejorar las leyes de su país, sabiendo que sus hijos y él mismo vivirán bajo esas leyes. El espíritu es ese ciudadano eterno.",
        "IdeasPrincipales": ["Reencarnación como Deber", "Intervención Histórica", "Progreso Solidario"],
        "PuntosImportantes": [
            "El espíritu tiene derecho a intervenir porque la tierra es su morada eterna",
            "La participación se da por amor, odio o deber",
            "Solo a través de la reencarnación se comprende la justicia de la vida y el progreso"
        ],
        "NodosSinapticos": ["Reencarnacion_como_Deber", "Intervencion_Historica", "Progreso_Solidario"],
        "ContextoDiccionario": {
            "Reencarnación_como_Deber": "El principio que establece la vuelta del espíritu a la materia como una obligación ineludible para su educación y para el progreso del planeta."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 14 aplicado exitosamente.")
