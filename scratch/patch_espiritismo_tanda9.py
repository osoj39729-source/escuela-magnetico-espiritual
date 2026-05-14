import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "6294: CAPTULO DIEZ: EL RGIMEN DEL ESPIRITISMO": {
        "PilotoDeCoherencia": "Establecimiento del Comunismo de Amor y Ley como el sistema socioeconómico y político ineludible que impone el Espiritismo Racional para garantizar la fraternidad humana.",
        "CitaInelutable": "El Comunismo es el régimen del gobierno del espiritismo. Si en diez años el comunismo invadió las mentes, ¿quién resistirá al espiritismo?",
        "EjemploPedagogico": "Una familia sana donde todos los hijos trabajan según su capacidad y comen de la misma mesa según su necesidad, sin cobrarse renta unos a otros. A esa escala familiar debe llegar el régimen mundial.",
        "IdeasPrincipales": ["Régimen del Espiritismo", "Comunismo de Amor", "Fin del Egoísmo Económico"],
        "PuntosImportantes": [
            "El comunismo no es un invento político, es la ejecución social de la ley espiritual",
            "La caridad degradante de las religiones es sustituida por la justicia equitativa",
            "La propiedad de la tierra vuelve a su único dueño: el Creador, para el usufructo de todos"
        ],
        "NodosSinapticos": ["Regimen_del_Espiritismo", "Comunismo_Espiritual", "Justicia_vs_Caridad"],
        "ContextoDiccionario": {
            "Comunismo_Espiritual": "El régimen socioeconómico ineludible dictado por el espiritismo (El Mundo Todo Comunizado) fundamentado en la justicia, el amor y la abolición de la propiedad exclusiva de la tierra."
        }
    },
    "6318: en El Espiritismo en su Asiento": {
        "PilotoDeCoherencia": "Reafirmación de la inevitabilidad del régimen comunal que, aunque parezca riguroso para quienes viven del abuso, trae en realidad la verdadera libertad, destruyendo el libertinaje.",
        "CitaInelutable": "¿Os quejaréis del rigor del régimen del espiritismo? Suave es su yugo. Mata el libertinaje para dar Paz y Pan.",
        "EjemploPedagogico": "Un semáforo que prohíbe el 'libertinaje' de cruzar a toda velocidad en cualquier momento, garantizando así la verdadera 'libertad' de que todos puedan circular sin morir en accidentes.",
        "IdeasPrincipales": ["Muerte del Libertinaje", "Verdadera Libertad", "Paz y Pan"],
        "PuntosImportantes": [
            "El régimen espiritual no negocia con los vicios ni con la explotación",
            "Garantiza lo esencial (Paz y Pan) para que el espíritu pueda dedicarse al progreso",
            "Su implantación es resistida pero absolutamente imparable"
        ],
        "NodosSinapticos": ["Paz_y_Pan", "Fin_del_Libertinaje", "Triunfo_Inevitable"],
        "ContextoDiccionario": {
            "Paz_y_Pan": "La promesa básica y fundamental del régimen del Espiritismo: asegurar la subsistencia material (Pan) y la armonía social (Paz) para permitir la educación espiritual de todos los hombres."
        }
    },
    "6546: TERCERA PARTE: FACULTADES MEDIANMICAS": {
        "PilotoDeCoherencia": "Transición de la ontología filosófica a la ciencia práctica y operativa del espiritismo: el estudio técnico de las herramientas de comunicación e intervención espiritual.",
        "CitaInelutable": "TERCERA PARTE: FACULTADES MEDIANÍMICAS.",
        "EjemploPedagogico": "El paso en una carrera de ingeniería desde la física teórica (el aula) hacia el taller de máquinas (el laboratorio). Aquí se enseña cómo operar los instrumentos del espíritu.",
        "IdeasPrincipales": ["Ciencia Práctica", "Operativa Espiritual", "Laboratorio del Espíritu"],
        "PuntosImportantes": [
            "Las facultades son herramientas de trabajo, no gracias divinas",
            "Requieren estudio sistemático, higiene y método para no degenerar",
            "Son el puente físico comprobable entre la materia y la causa inteligente"
        ],
        "NodosSinapticos": ["Facultades_Medianimicas", "Mecanica_Espiritual", "Practica_Racional"],
        "ContextoDiccionario": {
            "Facultades_Medianímicas": "El conjunto de herramientas orgánicas y fluídicas que el espíritu desarrolla para interactuar de forma sensible e inteligente entre los diferentes planos vibratorios de la materia."
        }
    },
    "6550: CAPTULO PRIMERO: QUE SON FACULTADES MEDIANMICAS Y FORMA RACIONAL DE PRACTICAR EL": {
        "PilotoDeCoherencia": "Exigencia radical de purificar la práctica mediúmnica de todo misticismo: el verdadero espiritismo opera como un laboratorio científico y rechaza absolutamente oraciones, cristos y rituales.",
        "CitaInelutable": "Exigimos que se anulen todos los formulismos, rituales y oraciones... porque todo eso es del espiritualismo: una garrulería para mezquinos.",
        "EjemploPedagogico": "Un químico que entra a su laboratorio y empieza a quemar incienso y rezar para que el oxígeno y el hidrógeno formen agua. Trincado exige comportarse como científicos, no como chamanes.",
        "IdeasPrincipales": ["Abolición de Ritos", "Condena del Espiritualismo Místico", "Ciencia Pura"],
        "PuntosImportantes": [
            "La mezcla de espiritismo con religión o curanderismo es una falsificación imperdonable",
            "Se prohíbe el uso de términos como 'Jesucristo', 'Dios castigador' o 'milagros'",
            "La Escuela Magnética se reserva el derecho de denunciar a los falsificadores"
        ],
        "NodosSinapticos": ["Abolicion_de_Ritos", "Falsedad_del_Espiritualismo", "Ciencia_Pura"],
        "ContextoDiccionario": {
            "Abolición_de_Ritos": "El mandato higiénico y racional de la Escuela que prohíbe tajantemente el uso de oraciones, altares, persignaciones y nombres místicos en las prácticas medianímicas."
        }
    },
    "6646: PRRAFO II: CARTA ORGNICA Autorizado como maestro fundador de la Escuela Magntico-Espiritual de la": {
        "PilotoDeCoherencia": "Introducción de la jurisprudencia del Espiritismo: la 'Carta Orgánica' (Ley de Mediumnidades) dictada en 1911 como el código técnico y moral inalterable para regir a todos los estudiantes y médiums del mundo.",
        "CitaInelutable": "Autorizado como maestro fundador... copio algunos artículos de la Ley primordial o carta orgánica, promulgada por el Espíritu de Verdad.",
        "EjemploPedagogico": "Un manual de regulaciones de bioseguridad internacional obligatorio para todos los laboratorios médicos del planeta. La Carta Orgánica garantiza que nadie manipule fuerzas espirituales sin protección ni método.",
        "IdeasPrincipales": ["Jurisprudencia Espiritual", "Ley de Mediumnidades", "Regulación Internacional"],
        "PuntosImportantes": [
            "El espiritismo tiene leyes administrativas y técnicas precisas dadas por el Gobierno Espiritual",
            "Protege al médium de abusos obsesivos y protege al estudiante del fraude",
            "Establece a Joaquín Trincado como el codificador autorizado y fundador de la Escuela"
        ],
        "NodosSinapticos": ["Carta_Organica", "Ley_de_Mediumnidades", "Regulacion_Practica"],
        "ContextoDiccionario": {
            "Carta_Orgánica_del_Espiritismo": "El conjunto de leyes y estatutos dictados por los Consejos Supremos en 1911, que regula el funcionamiento de las cátedras, la práctica de las mediumnidades y la disciplina de los estudiantes."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 9 aplicado exitosamente.")
