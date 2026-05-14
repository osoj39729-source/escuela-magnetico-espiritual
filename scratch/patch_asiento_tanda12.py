import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "4903: CAPITULO IV: La voz universal solidaria": {
        "PilotoDeCoherencia": "El espiritismo es el eco de la solidaridad universal: una corriente de sabiduría que fluye de los mundos de luz hacia la Tierra para instaurar la justicia.",
        "CitaInelutable": "La voz universal solidaria... llegan los maestros de los grandes mundos; depositan la esencia de la ley.",
        "EjemploPedagogico": "Un sistema de riego compartido entre varios pueblos. El agua (sabiduría) viene de las montañas (mundos de luz) para que todos los campos (humanidad) fructifiquen por igual.",
        "IdeasPrincipales": ["Solidaridad Universal", "Misión de los Maestros", "Plebiscito Cosmogónico"],
        "PuntosImportantes": [
            "La Tierra no está aislada; es parte de una federación de mundos solidarios",
            "Los maestros no imponen, sino que depositan la esencia para que el hombre la desarrolle",
            "La ley verdadera nace del plebiscito de todos los espíritus de la creación"
        ],
        "NodosSinapticos": ["Solidaridad_Universal", "Mision_de_los_Maestros", "Plebiscito_Cosmogonico"],
        "ContextoDiccionario": {
            "Solidaridad_Universal": "El principio de ayuda mutua y colaboración que rige las relaciones entre todos los mundos habitados del universo."
        }
    },
    "5028: Acotaciones:": {
        "PilotoDeCoherencia": "Reivindicación metafísica de la mujer: su capacidad intuitiva y su rol de madre la sitúan como legisladora natural indispensable para el equilibrio social.",
        "CitaInelutable": "La mujer es medio pueblo en número y el pueblo entero en percepción de verdad y amor... bendita María.",
        "EjemploPedagogico": "Una casa gobernada solo por el padre sin el consejo de la madre. Le faltaría el corazón y la previsión que solo la sensibilidad femenina puede aportar.",
        "IdeasPrincipales": ["Redención de la Mujer", "Derecho a Legislar", "Igualdad de los Sexos"],
        "PuntosImportantes": [
            "La exclusión de la mujer de las leyes es la causa del libertinaje y la autocracia",
            "La mujer posee una percepción superior de la sabiduría divina por su cualidad creadora",
            "La ley del futuro será sancionada por hombres, mujeres y espíritus en conjunto"
        ],
        "NodosSinapticos": ["Redencion_de_la_Mujer", "Derecho_a_Legislar", "Igualdad_de_los_Sexos"],
        "ContextoDiccionario": {
            "Redención_de_la_Mujer": "El proceso de liberación y reconocimiento de la igualdad absoluta de la mujer tras milenios de opresión religiosa y social."
        }
    },
    "5286: in dita de esas tradiciones...": {
        "PilotoDeCoherencia": "Transición de la ley humana a la espiritual: se nos entrega la 'letra que vivifica' para transformar las leyes oscuras de la materia en normas luminosas del espíritu.",
        "CitaInelutable": "Vuestras leyes, son tinta de la tierra... pero se os da la letra que vivifica.",
        "EjemploPedagogico": "Escribir un libro nuevo sobre las páginas borrosas de uno viejo. El contenido nuevo (espíritu) anula y supera al texto antiguo y confuso (materia).",
        "IdeasPrincipales": ["Letra que Vivifica", "Leyes Luminosas", "Renovación Generacional"],
        "PuntosImportantes": [
            "Las leyes humanas actuales 'matan' el espíritu por su falta de amor",
            "La luz del espíritu convertirá la 'tinta negra' en sabiduría palpable",
            "Las próximas generaciones no necesitarán la letra muerta porque vivirán en la ley"
        ],
        "NodosSinapticos": ["Letra_que_Vivifica", "Leyes_Luminosas", "Renovacion_Generacional"],
        "ContextoDiccionario": {
            "Letra_que_Vivifica": "La enseñanza doctrinal que, a diferencia de los dogmas, despierta y libera la conciencia del espíritu."
        }
    },
    "5575: Acotaciones:": {
        "PilotoDeCoherencia": "Validación de la cadena misionera: confirmación de Kardec como el preparador y de Trincado como el ejecutor del Código de Amor Universal.",
        "CitaInelutable": "Kardec... es justificado por el juez... el Espíritu de Verdad vigila el prólogo y en su día dicta el código.",
        "EjemploPedagogico": "Juan el Bautista preparando el camino para el Maestro. Kardec preparó el 'prólogo' mental de la humanidad para recibir la ley definitiva.",
        "IdeasPrincipales": ["Misión de Kardec", "Código de Amor", "Juicio al Espiritualismo"],
        "PuntosImportantes": [
            "El espiritualismo es criticado por ser una mezcla vaga que no define ni sanciona",
            "El espiritismo racional es la continuación lógica y perfeccionada de la obra de Kardec",
            "El Espíritu de Verdad es el único autor real de toda la doctrina de luz"
        ],
        "NodosSinapticos": ["Mision_de_Kardec", "Codigo_de_Amor", "Juicio_al_Espiritualismo"],
        "ContextoDiccionario": {
            "Misión_de_Kardec": "La tarea encomendada al espíritu Allan Kardec de abrir el camino a la fenomenología mediúnica como preludio a la doctrina racional."
        }
    },
    "5629: PARTE TERCERA: El derecho de los esp ritus: Alta leccin": {
        "PilotoDeCoherencia": "Soberanía del mundo invisible: el espíritu tiene el derecho natural e inalienable de participar en el gobierno de los mundos que él mismo ayuda a crear.",
        "CitaInelutable": "El derecho de los espíritus: Alta lección.",
        "EjemploPedagogico": "El arquitecto que tiene derecho a decidir cómo se usa el edificio que diseñó. El espíritu es el arquitecto de la vida y tiene voz en su legislación.",
        "IdeasPrincipales": ["Derecho del Espíritu", "Soberanía Espiritual", "Alta Lección"],
        "PuntosImportantes": [
            "La ley no puede ser solo física; debe incluir la realidad del espíritu",
            "El derecho del espíritu se basa en su preexistencia y supervivencia",
            "Ignorar el derecho del espíritu es gobernar a ciegas un mundo de ciegos"
        ],
        "NodosSinapticos": ["Derecho_del_Espiritu", "Soberania_Espiritual", "Alta_Leccion"],
        "ContextoDiccionario": {
            "Derecho_del_Espíritu": "El principio jurídico-espiritual que reconoce al ser inmortal como el único sujeto de derechos y deberes universales."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 12 aplicado exitosamente.")
