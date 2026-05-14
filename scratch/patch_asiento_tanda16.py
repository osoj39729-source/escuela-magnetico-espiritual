import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "8317: I (CAPTULO V: Explicacin del espiritismo)": {
        "PilotoDeCoherencia": "Supremacía de la inteligencia: el espiritismo demuestra que el espíritu es el motor único y la materia el instrumento temporal para su progreso.",
        "CitaInelutable": "El espíritu es el único ser inteligente... la materia es su instrumento.",
        "EjemploPedagogico": "El conductor (espíritu) y el automóvil (cuerpo). El coche permite al conductor desplazarse y cumplir misiones, pero el coche no tiene voluntad propia ni inteligencia.",
        "IdeasPrincipales": ["Preexistencia del Espíritu", "Instrumentalidad de la Materia", "Error como Ignorancia"],
        "PuntosImportantes": [
            "La materia por sí misma es inerte y solo obedece al impulso espiritual",
            "El mal no existe como entidad, sino como la ausencia de luz y sabiduría",
            "La vida física es el taller donde el espíritu pule sus facultades"
        ],
        "NodosSinapticos": ["Preexistencia_del_Espiritu", "Instrumentalidad_de_la_Materia", "Error_como_Ignorancia"],
        "ContextoDiccionario": {
            "Preexistencia_del_Espíritu": "La realidad ontológica de que el ser inteligente existe antes de tomar cualquier forma material."
        }
    },
    "8466: II (CAPTULO V: Explicacin del espiritismo)": {
        "PilotoDeCoherencia": "Comunicación intermundos: la mediumnidad es una facultad orgánica y natural de la humanidad que permite el diálogo constante con el mundo espiritual.",
        "CitaInelutable": "La mediumnidad es la herramienta universal... derecho natural que no requiere ritos.",
        "EjemploPedagogico": "El lenguaje. Así como aprendemos a hablar para comunicarnos con otros hombres, desarrollamos la mediumnidad para hablar con nuestros hermanos invisibles.",
        "IdeasPrincipales": ["Mediumnidad Universal", "Comunicación Intermundos", "Ausencia de Ritos"],
        "PuntosImportantes": [
            "No se necesitan fórmulas mágicas ni ceremonias para contactar con los espíritus",
            "La mediumnidad es una responsabilidad moral que exige estudio y ética",
            "El mundo invisible es tan real y estructurado como el mundo físico"
        ],
        "NodosSinapticos": ["Mediumnidad_Universal", "Comunicacion_Intermundos", "Ausencia_de_Ritos"],
        "ContextoDiccionario": {
            "Mediumnidad_Universal": "El principio de que todo ser humano posee la capacidad latente de percibir y transmitir vibraciones espirituales."
        }
    },
    "8651: MACTHEUIX.": {
        "PilotoDeCoherencia": "Responsabilidad parental: la educación del espíritu comienza desde la gestación y se consolida en los primeros siete años mediante el ejemplo y la vibración amorosa.",
        "CitaInelutable": "La educación del niño... comienza en el pecho de la madre... hasta los 7 años el espíritu no se encierra del todo.",
        "EjemploPedagogico": "Cimentar un edificio. Si la base (primeros 7 años) es débil o está mal hecha, por más que se intente arreglar después, el edificio siempre correrá peligro de caer.",
        "IdeasPrincipales": ["Educación desde el Pecho", "Uso de la Razón", "Vibración Parental"],
        "PuntosImportantes": [
            "El niño absorbe las desavenencias de los padres como veneno para su futuro carácter",
            "La corrompida sociedad actual descuida la base moral de los siete primeros años",
            "Muchos espíritus misioneros cortan su existencia prematuramente al ver su materia corrompida por el entorno"
        ],
        "NodosSinapticos": ["Educacion_desde_el_Pecho", "Uso_de_la_Razon", "Vibracion_Parental"],
        "ContextoDiccionario": {
            "Educación_desde_el_Pecho": "La fase crítica de formación moral donde el lactante recibe no solo leche, sino la vibración afectiva de sus progenitores."
        }
    },
    "8668: III (CAPTULO V: Explicacin del espiritismo)": {
        "PilotoDeCoherencia": "Justicia de retorno: la reencarnación es el mecanismo de reparación por el cual el espíritu vuelve a los escenarios de sus errores para transformarlos en triunfos.",
        "CitaInelutable": "La ley de justicia exige reparar en el mismo lugar... la reencarnación es necesaria.",
        "EjemploPedagogico": "Un trabajador que comete un error en una línea de montaje. La mejor forma de aprender es que él mismo repare la pieza que dañó antes de seguir con la siguiente.",
        "IdeasPrincipales": ["Ley de Reparación", "Reencarnación Necesaria", "Plan de Progreso"],
        "PuntosImportantes": [
            "Nadie paga por los errores de otro; cada uno es responsable de su propio destino",
            "La reencarnación no es un castigo, sino la oportunidad de saldar deudas y crecer",
            "El olvido del pasado es una necesidad biológica para no verse abrumado por el remordimiento"
        ],
        "NodosSinapticos": ["Ley_de_Reparacion", "Reencarnacion_Necesaria", "Plan_de_Progreso"],
        "ContextoDiccionario": {
            "Ley_de_Reparación": "Principio universal que establece que todo daño causado debe ser compensado por el mismo ser mediante el trabajo útil."
        }
    },
    "8867: IV (CAPTULO V: Explicacin del espiritismo)": {
        "PilotoDeCoherencia": "El fin supremo: el espiritismo no busca crear adeptos, sino ciudadanos del universo que vivan en fraternidad y en el régimen de la Comuna.",
        "CitaInelutable": "El fin del espiritismo es la fraternidad universal... la verdad es un bien común.",
        "EjemploPedagogico": "Un río que desemboca en el mar. El espiritismo es el río y la Comuna es el mar inmenso donde todas las aguas se mezclan en unidad.",
        "IdeasPrincipales": ["Fraternidad Universal", "Gratuidad de la Verdad", "Meta Comunal"],
        "PuntosImportantes": [
            "La verdad espiritual no debe ser objeto de lucro ni de exclusividad",
            "La fraternidad no es un sentimiento vago, sino una organización social justa",
            "El espiritismo racional es la base científica para la paz definitiva en la Tierra"
        ],
        "NodosSinapticos": ["Fraternidad_Universal", "Gratuidad_de_la_Verdad", "Meta_Comunal"],
        "ContextoDiccionario": {
            "Fraternidad_Universal": "El estado de convivencia humana basado en el reconocimiento del origen común y la solidaridad absoluta."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 16 aplicado exitosamente.")
