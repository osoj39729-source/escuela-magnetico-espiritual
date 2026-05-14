import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "2820: CAPTULO III: El descubrimiento de la eterna verdad": {
        "PilotoDeCoherencia": "La verdad eterna no es una revelación mística, sino el hallazgo racional del espíritu en su propio archivo eterno tras vencer la resistencia de la materia.",
        "CitaInelutable": "El descubrimiento de la eterna verdad... rasgar el crepúsculo.",
        "EjemploPedagogico": "Restaurar una pintura antigua. Quitas las capas de polvo y barniz oscuro (errores) para descubrir la imagen original y luminosa que siempre estuvo allí.",
        "IdeasPrincipales": ["Eterna Verdad", "Descubrimiento Espiritual", "Archivo del Espíritu"],
        "PuntosImportantes": [
            "La verdad es inmutable; lo que cambia es la capacidad del hombre de verla",
            "Descubrir la verdad es descubrir la propia filiación divina",
            "El archivo del espíritu guarda el saber de todas las existencias pasadas"
        ],
        "NodosSinapticos": ["Eterna_Verdad", "Descubrimiento_Espiritual", "Archivo_del_Espiritu"],
        "ContextoDiccionario": {
            "Eterna_Verdad": "El conjunto de leyes y realidades del universo que permanecen inalterables ante el tiempo y el espacio."
        }
    },
    "2917: CAPTULO IV: La comuna es el rmen nico del espiritismo": {
        "PilotoDeCoherencia": "La Comuna es el estado social natural de los espíritus de luz; un régimen de justicia absoluta donde la propiedad privada se disuelve en el bienestar colectivo.",
        "CitaInelutable": "La comuna llega, porque es decreto absoluto del creador... régimen único del espiritismo.",
        "EjemploPedagogico": "Una orquesta sinfónica. Nadie es dueño de la música; todos aportan su talento y todos disfrutan del resultado final en perfecta armonía.",
        "IdeasPrincipales": ["Comuna de Amor y Ley", "Decreto Divino", "Justicia Social Espiritual"],
        "PuntosImportantes": [
            "La Comuna es el reflejo terrestre de la organización de los mundos de luz",
            "No es un sistema político humano, sino una ley biológica del espíritu",
            "Su implantación es inevitable tras el juicio de mayoría"
        ],
        "NodosSinapticos": ["Comuna_de_Amor_y_Ley", "Decreto_Divino", "Justicia_Social_Espiritual"],
        "ContextoDiccionario": {
            "Comuna_de_Amor_y_Ley": "El régimen social definitivo de la Tierra regenerada donde impera la fraternidad absoluta y la propiedad común."
        }
    },
    "2988: resistira a su mandato?": {
        "PilotoDeCoherencia": "Reflexión sobre la soberanía de la Ley de Progreso: cualquier oposición a la evolución es vana y solo genera dolor innecesario al detractor.",
        "CitaInelutable": "¿Quién resistiría a su mandato? Meditad.",
        "EjemploPedagogico": "Intentar nadar contra una catarata. La fuerza del agua (progreso) te llevará de todos modos; resistir solo te agota y te lastima.",
        "IdeasPrincipales": ["Mandato Inexorable", "Futilidad de la Resistencia", "Ley de Progreso"],
        "PuntosImportantes": [
            "El mandato de Eloí es que todos sus hijos lleguen a la luz",
            "Los detractores son 'microbios' que serán barridos por el soplo de la verdad",
            "La resistencia al progreso es la causa de todo el sufrimiento humano"
        ],
        "NodosSinapticos": ["Mandato_Inexorable", "Futilidad_de_la_Resistencia", "Ley_de_Progreso"],
        "ContextoDiccionario": {
            "Mandato_Inexorable": "La voluntad suprema del Creador que garantiza el progreso de todos los seres hacia la perfección."
        }
    },
    "3119: CAPITULO V: La creacin es eterna por el espiritismo": {
        "PilotoDeCoherencia": "Ontología de la creación continua: el universo es el pensamiento de Eloí (Éter) cobrando forma tangible mediante la voluntad del espíritu actor.",
        "CitaInelutable": "La creación es eterna por el espiritismo... el hombre es todo el universo infinito.",
        "EjemploPedagogico": "Un escultor (espíritu) con una masa infinita de arcilla (Éter). Nunca deja de modelar; cada estatua es un mundo o un cuerpo en eterna renovación.",
        "IdeasPrincipales": ["Creación Eterna", "Éter Universal", "Trinidad Humana"],
        "PuntosImportantes": [
            "El hombre es la corona de la creación porque resume en sí todo el infinito",
            "El Éter es la sustancia-pensamiento; el Espíritu es la voluntad-forma",
            "No hubo un 'comienzo' de la nada; todo es transformación eterna"
        ],
        "NodosSinapticos": ["Creacion_Eterna", "Eter_Universal", "Trinidad_Humana"],
        "ContextoDiccionario": {
            "Creación_Eterna": "Axioma que define al universo como un proceso infinito de manifestación de la vida sin principio ni fin."
        }
    },
    "3198: tus misioneros, conforme a tu mandato.": {
        "PilotoDeCoherencia": "Cierre magistral y rendición de cuentas: el cumplimiento de la misión de los 29 misioneros de Adán para regenerar la Tierra y entregar la ley escrita.",
        "CitaInelutable": "Padre! Rasgué el velo de la verdad eterna... mi conciencia está satisfecha. Consumatum est.",
        "EjemploPedagogico": "El arquitecto que entrega las llaves del edificio terminado. La obra ya no le pertenece a él, sino a quienes la habitarán en justicia.",
        "IdeasPrincipales": ["Misioneros de Luz", "Satisfacción del Deber", "Consumatum Est"],
        "PuntosImportantes": [
            "La regeneración de la Tierra es un hecho consumado en espíritu y verdad",
            "Los misioneros han cumplido su contrato de 57 siglos desde Adán",
            "La justicia ahora recae en los que trabajan en la 'viña' del Padre"
        ],
        "NodosSinapticos": ["Misioneros_de_Luz", "Satisfaccion_del_Deber", "Consumatum_Est"],
        "ContextoDiccionario": {
            "Consumatum_Est": "Sentencia que marca la finalización exitosa de una misión espiritual o de un ciclo de justicia universal."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 8 aplicado exitosamente.")
