import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "34: Todo es Magnetismo Espiritual.": {
        "PilotoDeCoherencia": "Definición del magnetismo como la fuerza omnipotente que anima el universo, siendo la sustancia misma del espíritu y el motor de la vida.",
        "CitaInelutable": "Todo es Magnetismo Espiritual.",
        "EjemploPedagogico": "El sistema operativo de una computadora. No es la pantalla ni las teclas, sino la energía lógica invisible que hace que todo funcione. El magnetismo es el sistema operativo del universo.",
        "IdeasPrincipales": ["Magnetismo Espiritual", "Energía Vital", "Lazo Fluídico"],
        "PuntosImportantes": [
            "El magnetismo une al espíritu con la materia",
            "Es la fuerza que permite la comunicación entre mundos",
            "Toda curación y fenómeno físico es una aplicación del magnetismo"
        ],
        "NodosSinapticos": ["Magnetismo_Espiritual", "Energia_Vital", "Lazo_Fluidico"],
        "ContextoDiccionario": {
            "Magnetismo_Espiritual": "La fuerza primordial y consciente que emana del espíritu para actuar sobre la materia y otros espíritus."
        }
    },
    "36: APOTEGMAS ADOPTADOS": {
        "PilotoDeCoherencia": "Introducción a la estructura axiomática de la Escuela: el uso de sentencias breves y profundas para codificar la ley universal sin ambigüedades.",
        "CitaInelutable": "APOTEGMAS ADOPTADOS.",
        "EjemploPedagogico": "Las leyes de la física condensadas en fórmulas como E=mc². Los apotegmas son las 'fórmulas' de la ética y la espiritualidad racional.",
        "IdeasPrincipales": ["Apotegmas Doctrinales", "Síntesis Pedagógica", "Verdades Eternas"],
        "PuntosImportantes": [
            "Facilitan la memorización y práctica de la doctrina",
            "Eliminan la interpretación subjetiva o mística",
            "Son la base del razonamiento austero de la Escuela"
        ],
        "NodosSinapticos": ["Apotegmas_Doctrinales", "Sintesis_Pedagogica", "Verdades_Eternas"],
        "ContextoDiccionario": {
            "Apotegmas_Doctrinales": "Sentencias breves y categóricas que expresan verdades fundamentales de la doctrina espírita."
        }
    },
    "38: MXIMA: Por el Fruto conocers el rbol.": {
        "PilotoDeCoherencia": "El principio de validación por obras: la única forma de juzgar la elevación de un espíritu o la veracidad de una idea es a través de sus resultados prácticos.",
        "CitaInelutable": "MÁXIMA: Por el Fruto conocerás el árbol.",
        "EjemploPedagogico": "Probar una manzana para saber si el árbol está sano. No importa cuánto brille la cáscara; si el sabor es amargo, el árbol tiene un problema. Las obras son el sabor del espíritu.",
        "IdeasPrincipales": ["Ley de Obras", "Validación por Frutos", "Justicia de Hechos"],
        "PuntosImportantes": [
            "Las palabras no valen nada sin hechos que las respalden",
            "Es la defensa contra los falsos maestros y mixtificadores",
            "La justicia universal premia frutos, no intenciones ni rezos"
        ],
        "NodosSinapticos": ["Ley_de_Obras", "Validacion_por_Frutos", "Justicia_de_Hechos"],
        "ContextoDiccionario": {
            "Ley_de_Obras": "El principio de justicia que establece que el valor de un ser se determina exclusivamente por sus acciones y producciones."
        }
    },
    "40: Consejo: Busca el consuelo en la verdad.": {
        "PilotoDeCoherencia": "El imperativo ético de la Escuela: la paz del espíritu solo se alcanza enfrentando la realidad cruda y mediante el autoconocimiento y el amor fraternal activo.",
        "CitaInelutable": "Busca el consuelo en la verdad. Mandatos: Conócete a ti mismo. Ama a tu hermano.",
        "EjemploPedagogico": "Encender la luz en una habitación a oscuras para dejar de tener miedo a las sombras. La verdad es la luz que elimina los fantasmas del error religioso.",
        "IdeasPrincipales": ["Consuelo en la Verdad", "Conócete a ti mismo", "Amor Fraternal"],
        "PuntosImportantes": [
            "El consuelo religioso es un sedante; la verdad es la curación",
            "El autoconocimiento es el primer paso para la libertad espiritual",
            "El amor al hermano es el cumplimiento práctico de la ley de solidaridad"
        ],
        "NodosSinapticos": ["Consuelo_en_la_Verdad", "Conocete_a_ti_mismo", "Amor_Fraternal"],
        "ContextoDiccionario": {
            "Consuelo_en_la_Verdad": "El estado de serenidad que deviene de comprender las leyes de justicia y progreso, en oposición al consuelo ficticio de los dogmas."
        }
    },
    "44: AXIOMA: En l estaba la vida, y la vida es la luz de los hombres.": {
        "PilotoDeCoherencia": "Identificación de la inteligencia humana como una emanación de la vida divina, estableciendo que razonar es el acto más sagrado del hombre.",
        "CitaInelutable": "En Él estaba la vida, y la vida es la luz de los hombres.",
        "EjemploPedagogico": "Una bombilla que brilla gracias a la electricidad de la central. Nosotros somos la bombilla y la 'Vida' es la central eléctrica que nos permite dar luz (razón).",
        "IdeasPrincipales": ["Vida como Luz", "Inteligencia Divina", "Emanación del Creador"],
        "PuntosImportantes": [
            "La vida no es un accidente biológico, sino una luz espiritual",
            "La luz de los hombres es su capacidad de comprender y crear",
            "No hay separación entre el Creador (Vida) y el hombre (Luz)"
        ],
        "NodosSinapticos": ["Vida_como_Luz", "Inteligencia_Divina", "Emanacion_del_Creador"],
        "ContextoDiccionario": {
            "Vida_como_Luz": "Concepto que define a la inteligencia y la conciencia como la manifestación luminosa de la energía vital del Creador."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 2 aplicado exitosamente.")
