import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
try:
    with open(esencia_path, 'r', encoding='utf-8') as f:
        esencia = json.load(f)
except json.JSONDecodeError:
    esencia = {} # handle empty file just in case

nuevos_nodos = {
    "19: <<FILOSOFA AUSTERA RACIONAL>>: POR ____________ BUENOS AIRES, ENERO DE 1922": {
        "PilotoDeCoherencia": "Presentación formal de la obra bajo la doctrina de la Filosofía Austera Racional, marcando su cronología en la Nueva Era.",
        "CitaInelutable": "<<FILOSOFÍA AUSTERA RACIONAL>> POR JOAQUÍN TRINCADO.",
        "EjemploPedagogico": "La placa en la entrada de una universidad que define la corriente de pensamiento estricto y científico que se enseña en sus aulas.",
        "IdeasPrincipales": [
            "Identidad Doctrinal",
            "Cronología de la Nueva Era",
            "Autoría de la Escuela"
        ],
        "PuntosImportantes": [
            "La obra se enmarca en la austeridad racional, rechazando el misticismo",
            "Inicio formal del estudio sistemático del espiritismo",
            "Referencia al año 11 de la Nueva Era"
        ],
        "NodosSinapticos": [
            "Filosofia_Austera_Racional",
            "Nueva_Era",
            "Fundacion_Doctrinal"
        ],
        "ContextoDiccionario": {
            "Filosofía_Austera_Racional": "Sistema de pensamiento riguroso que estudia las leyes del universo sin concesiones al dogma ni al sentimentalismo religioso."
        }
    },
    "42: PROLOGO: Engorrosa es mi situacin.": {
        "PilotoDeCoherencia": "Declaración del autor sobre la dificultad de sostener el verdadero Espiritismo (Luz y Verdad) frente a las falsificaciones místicas y el rechazo social.",
        "CitaInelutable": "Sostengo los principios austeros del Espiritismo en su Luz y Verdad como es; porque no puede ser de otro modo.",
        "EjemploPedagogico": "El cirujano que asume la responsabilidad de extirpar un tumor (la ignorancia), sabiendo que la operación será dolorosa y criticada por quienes temen a la sangre.",
        "IdeasPrincipales": [
            "Deber del Maestro",
            "Defensa de la Verdad",
            "Austeridad del Espiritismo"
        ],
        "PuntosImportantes": [
            "El Espiritismo genuino es austero, no un juego de adivinación",
            "La incomodidad de enfrentarse al dogma y al materialismo simultáneamente",
            "Compromiso inquebrantable con la ley revelada hace 11 años"
        ],
        "NodosSinapticos": [
            "Espiritismo_Austero",
            "Verdad_vs_Prejuicio",
            "Deber_Misionero"
        ],
        "ContextoDiccionario": {
            "Espiritismo_Luz_y_Verdad": "El estudio científico y filosófico de la existencia eterna y la reencarnación, despojado de supercherías y ritos."
        }
    },
    "50: El Universo solidarizado.": {
        "PilotoDeCoherencia": "Proclamación de la interconexión absoluta entre todos los mundos y seres, regidos por la ley universal de afinidad.",
        "CitaInelutable": "El Universo solidarizado.",
        "EjemploPedagogico": "Las células de un cuerpo humano: aunque tienen funciones distintas, el bienestar de una afecta a todas y trabajan en conjunto para sostener la vida.",
        "IdeasPrincipales": [
            "Solidaridad Cósmica",
            "Interconexión",
            "Unidad Evolutiva"
        ],
        "PuntosImportantes": [
            "La Tierra no está aislada, es parte de una familia planetaria",
            "Las acciones individuales repercuten en el equilibrio del cosmos",
            "La fraternidad no es una opción moral, es una ley física y espiritual"
        ],
        "NodosSinapticos": [
            "Solidaridad_Universal",
            "Conexion_Cosmica",
            "Afinidad_Espiritual"
        ],
        "ContextoDiccionario": {
            "Solidaridad_Universal": "Ley cósmica que establece la mutua dependencia y responsabilidad entre todos los espíritus y mundos del universo."
        }
    },
    "52: El mundo todo Comunizado.": {
        "PilotoDeCoherencia": "Anuncio del régimen social perfecto basado en la ley natural: la eliminación de fronteras y la administración equitativa de la Tierra.",
        "CitaInelutable": "El mundo todo Comunizado.",
        "EjemploPedagogico": "Una gran familia donde la herencia (el planeta) no se parcela ni se cerca con muros, sino que se administra conjuntamente para el bienestar de todos los hermanos.",
        "IdeasPrincipales": [
            "Ideal Social de la Escuela",
            "Eliminación de Fronteras",
            "Justicia Equitativa"
        ],
        "PuntosImportantes": [
            "El Comunismo Espiritual como meta política de la humanidad",
            "Superación de los nacionalismos y la propiedad excluyente",
            "La comuna basada en el amor, no en la imposición"
        ],
        "NodosSinapticos": [
            "Comunismo_Espiritual",
            "Mundo_sin_Fronteras",
            "Justicia_Social_Racional"
        ],
        "ContextoDiccionario": {
            "Comunismo_Espiritual": "Sistema social y económico postulado por el Espiritismo Racional, basado en la fraternidad, donde la tierra es patria única y la propiedad es usufructo universal."
        }
    },
    "54: La Ley es una y la Substancia una.": {
        "PilotoDeCoherencia": "Establecimiento del monismo cósmico: todo emana de una única causa inteligente y se manifiesta a través de una única materia prima universal.",
        "CitaInelutable": "La Ley es una y la Substancia una. Uno es el principio, uno es el fin.",
        "EjemploPedagogico": "El agua que puede manifestarse como hielo duro, vapor invisible o líquido, pero siempre conserva su misma fórmula fundamental (H2O).",
        "IdeasPrincipales": [
            "Unidad de Origen",
            "Sustancia Universal",
            "Ley Inmutable"
        ],
        "PuntosImportantes": [
            "Rechazo al dualismo y al politeísmo filosófico",
            "La materia y el espíritu son polos de una misma realidad",
            "Todos los seres comparten el mismo origen y destino"
        ],
        "NodosSinapticos": [
            "Unidad_de_Sustancia",
            "Monismo_Fulico",
            "Principio_Unico"
        ],
        "ContextoDiccionario": {
            "Sustancia_Única": "La materia prima universal (Éter/Élite) de la cual se componen todas las cosas, variando únicamente en su grado de vibración o condensación."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Estudiado Tanda 1 aplicado exitosamente.")
