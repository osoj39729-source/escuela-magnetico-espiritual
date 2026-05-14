import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
# Cargamos el archivo existente para no perder los nodos que aún no hemos re-destilado
# Aunque el plan es reescribirlo, lo haremos gradualmente para mantener la estructura JSON válida.
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "8: ESCUELA MAGN%TICO - ESPIRITUAL DE LA COMUNA UNIVERSAL: ESPIRITISMO EN SU ASIENTO": {
        "PilotoDeCoherencia": "Presentación institucional de la obra definitiva que establece el espiritismo en su base inamovible de razón y justicia, bajo la autoría de Joaquín Trincado y la EMECU.",
        "CitaInelutable": "ESPIRITISMO EN SU ASIENTO. JOAQUÍN TRINCADO.",
        "EjemploPedagogico": "El acta de fundación de una nación que define sus leyes supremas e irrevocables. Este libro es el acta constitutiva del espiritismo racional.",
        "IdeasPrincipales": ["Fundamentación Doctrinal", "Autoría de Trincado", "Asiento de Justicia"],
        "PuntosImportantes": [
            "Establece el Espiritismo Luz y Verdad como el régimen definitivo de la Tierra",
            "Define la Escuela Magnético-Espiritual como el vehículo de la Comuna Universal",
            "Marca el fin de la era del crepúsculo y el inicio del reinado del espíritu"
        ],
        "NodosSinapticos": ["EMECU", "Joaquin_Trincado", "Asiento_Doctrinal"],
        "ContextoDiccionario": {
            "Asiento_Doctrinal": "La base firme e inamovible de principios racionales sobre la cual se edifica la doctrina espírita, impidiendo desviaciones místicas."
        }
    },
    "24: PROCLAMA": {
        "PilotoDeCoherencia": "Declaración de principios universales que anuncian el nuevo orden mundial basado en la fraternidad cósmica y la justicia social absoluta.",
        "CitaInelutable": "PROCLAMA. El Universo Solidarizado. El mundo todo Comunizado.",
        "EjemploPedagogico": "Un grito de libertad que resuena en todo el mundo, avisando que las fronteras y las clases sociales han llegado a su fin ante la ley del Padre.",
        "IdeasPrincipales": ["Proclama Espiritual", "Nuevo Orden", "Solidaridad Universal"],
        "PuntosImportantes": [
            "Anuncia la unión de todos los mundos habitados bajo una sola solidaridad",
            "Proclama la abolición de privilegios y la instauración de la comuna",
            "Es el manifiesto político-espiritual de la EMECU para la humanidad"
        ],
        "NodosSinapticos": ["Proclama_Espiritual", "Solidaridad_Universal", "Comunismo_Espiritual"],
        "ContextoDiccionario": {
            "Proclama_Espiritual": "El manifiesto de principios fundamentales que la EMECU presenta a la humanidad para la instauración de la Comuna Universal."
        }
    },
    "26: El Universo Solidarizado.": {
        "PilotoDeCoherencia": "Axioma que describe la estructura interconectada del cosmos, donde cada mundo y espíritu contribuye al progreso del todo bajo leyes de afinidad.",
        "CitaInelutable": "El Universo Solidarizado.",
        "EjemploPedagogico": "Un inmenso archipiélago donde todas las islas están conectadas por puentes invisibles; lo que afecta a una isla, afecta al resto de la nación universal.",
        "IdeasPrincipales": ["Universo Solidarizado", "Fraternidad Cósmica", "Leyes de Afinidad"],
        "PuntosImportantes": [
            "La solidaridad no es un favor, sino una ley mecánica del progreso universal",
            "Los mundos superiores ayudan a los inferiores por deber y amor",
            "Ningún espíritu está solo en la creación; todos somos parte de un sistema único"
        ],
        "NodosSinapticos": ["Universo_Solidarizado", "Fraternidad_Cosmica", "Leyes_de_Afinidad"],
        "ContextoDiccionario": {
            "Universo_Solidarizado": "El estado de interdependencia y ayuda mutua que rige a todos los mundos y espíritus dentro de la creación infinita."
        }
    },
    "28: El mundo todo Comunizado.": {
        "PilotoDeCoherencia": "El objetivo final del Espiritismo en la Tierra: la transformación de la sociedad en una Comuna Universal donde la propiedad privada es abolida en favor del bienestar común.",
        "CitaInelutable": "El mundo todo Comunizado.",
        "EjemploPedagogico": "Una familia unida donde no existe el 'esto es mío', sino que todos los recursos se usan para que ningún hermano pase hambre o necesidad.",
        "IdeasPrincipales": ["Comuna Universal", "Abolición de la Propiedad", "Régimen Comunista"],
        "PuntosImportantes": [
            "La comunización es el reflejo terrestre de la armonía espiritual",
            "Elimina las causas de la guerra, el odio y la competencia desleal",
            "Es el régimen de justicia que Eloí manda instaurar para la felicidad de sus hijos"
        ],
        "NodosSinapticos": ["Comuna_Universal", "Abolicion_de_la_Propiedad", "Regimen_Comunista"],
        "ContextoDiccionario": {
            "Comuna_Universal": "El régimen social y económico donde la tierra y sus frutos pertenecen a todos por igual, bajo la ley del amor y el trabajo."
        }
    },
    "30: LA LEY es una. La sustancia una.": {
        "PilotoDeCoherencia": "Postulado monista que reduce la complejidad de la existencia a un solo Principio (Eloí) y una sola sustancia (Magnetismo/Espíritu).",
        "CitaInelutable": "LA LEY es una. La sustancia una. Uno es el principio. Uno es el fin.",
        "EjemploPedagogico": "Un océano infinito de agua (sustancia) que se mueve bajo una única marea (ley). Todo lo que vemos son solo olas diferentes de la misma agua.",
        "IdeasPrincipales": ["Ley Única", "Sustancia Única", "Principio y Fin"],
        "PuntosImportantes": [
            "Eloí es la Ley y la Sustancia única de la cual todo emana",
            "La materia es solo espíritu/magnetismo condensado bajo leyes de vibración",
            "No existen dualismos reales en el universo; todo vuelve al Uno"
        ],
        "NodosSinapticos": ["Ley_Unica", "Sustancia_Unica", "Principio_y_Fin"],
        "ContextoDiccionario": {
            "Sustancia_Única": "La esencia fundamental e increada (Magnetismo Universal) que constituye todo lo existente en el universo."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 1 aplicado exitosamente.")
