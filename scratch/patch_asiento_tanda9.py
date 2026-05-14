import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "3209: FIN DEL LIBRO PRIMERO": {
        "PilotoDeCoherencia": "Culminación de la estructura ontológica: los cimientos racionales de la doctrina han sido sentados, preparando el terreno para el estudio de las leyes fenomenológicas.",
        "CitaInelutable": "FIN DEL LIBRO PRIMERO.",
        "EjemploPedagogico": "Finalizar la lectura de los planos de un arquitecto. Ya sabemos qué vamos a construir; ahora toca empezar a mover las piezas reales.",
        "IdeasPrincipales": ["Fundamentación Ontológica", "Cierre de Ciclo", "Arquitectura Doctrinal"],
        "PuntosImportantes": [
            "Establece la base inamovible de la existencia del espíritu",
            "Resume la cosmogonía y la justicia universal",
            "Sirve de prefacio para el estudio técnico de la mediumnidad"
        ],
        "NodosSinapticos": ["Fundamentacion_Ontologica", "Cierre_de_Ciclo", "Arquitectura_Doctrinal"],
        "ContextoDiccionario": {
            "Fundamentación_Ontológica": "El establecimiento de los principios sobre el ser y la realidad que sustentan toda la doctrina espiritista."
        }
    },
    "3217: LIBRO SEGUNDO: LEYES, PRUEBAS Y MANIFESTACIONES": {
        "PilotoDeCoherencia": "Apertura del tratado técnico: se inicia el estudio de cómo el mundo espiritual interactúa con el físico a través de leyes naturales y demostrables.",
        "CitaInelutable": "LIBRO SEGUNDO: LEYES, PRUEBAS Y MANIFESTACIONES.",
        "EjemploPedagogico": "El manual de usuario de un equipo de alta tecnología. El Libro Segundo enseña a manejar la 'tecnología' de la comunicación entre mundos.",
        "IdeasPrincipales": ["Leyes Fenoménicas", "Pruebas Espirituales", "Método Experimental"],
        "PuntosImportantes": [
            "Define la mediumnidad como una facultad biológica y espiritual",
            "Analiza las diferentes formas de manifestación de los espíritus",
            "Establece el método de control para evitar el misticismo"
        ],
        "NodosSinapticos": ["Leyes_Fenomenicas", "Pruebas_Espirituales", "Metodo_Experimental"],
        "ContextoDiccionario": {
            "Leyes_Fenoménicas": "El conjunto de reglas naturales que rigen los fenómenos físicos y psíquicos producidos por la acción de los espíritus."
        }
    },
    "3225: CAPITULO I: Ley de las mediumnidades en general(1)": {
        "PilotoDeCoherencia": "La mediumnidad como facultad universal: es una propiedad del espíritu que utiliza el alma y el cuerpo como instrumentos de emisión y recepción vibratoria.",
        "CitaInelutable": "El médium es cera blanda donde se puede imprimir cualquier molde; pero tiene el diamante por armadura.",
        "EjemploPedagogico": "Un instrumento musical. El espíritu es el músico; el alma es la cuerda y el cuerpo es la caja de resonancia. La música depende de la armonía de los tres.",
        "IdeasPrincipales": ["Mediumnidad Universal", "Poder Psíquico", "Vibración Espiritual"],
        "PuntosImportantes": [
            "La mediumnidad es natural y común a todos los seres en mayor o menor grado",
            "Exige un estado dinámico para repeler influencias extrañas",
            "El médium debe desarrollar su voluntad para ser dueño de su facultad"
        ],
        "NodosSinapticos": ["Mediumnidad_Universal", "Poder_Psiquico", "Vibracion_Espiritual"],
        "ContextoDiccionario": {
            "Poder_Psíquico": "La fuerza dinámica del alma, dirigida por el espíritu, capaz de influir sobre la materia y comunicarse con otros seres."
        }
    },
    "3233: PREFACIO": {
        "PilotoDeCoherencia": "Protocolo de higiene mediúnica: advertencia sobre los peligros de la ignorancia de los educadores de médiums y el riesgo de ser instrumentos de detractores.",
        "CitaInelutable": "Qué lejos han estado los educadores de los médiums, de estos conocimientos! Por esto hay tantos malos médiums.",
        "EjemploPedagogico": "Un laboratorio que requiere esterilidad absoluta. Cualquier falta de limpieza (ignorancia o misticismo) contamina el experimento (comunicación).",
        "IdeasPrincipales": ["Rigor Científico Mediúnico", "Higiene Facultativa", "Control de Calidad"],
        "PuntosImportantes": [
            "La ignorancia de las leyes psíquicas es la madre del fraude",
            "Se requiere un estudio previo exhaustivo antes de practicar la mediumnidad",
            "El médium debe ser un 'soldado avisado' y no un instrumento ciego"
        ],
        "NodosSinapticos": ["Rigor_Cientifico_Mediunico", "Higiene_Facultativa", "Control_de_Calidad"],
        "ContextoDiccionario": {
            "Higiene_Facultativa": "El conjunto de prácticas morales y mentales necesarias para mantener limpia y pura la facultad mediúnica."
        }
    },
    "3267: todas direcciones?": {
        "PilotoDeCoherencia": "Definición de la Psiquis: no es una entidad separada, sino la propiedad del alma cuando el espíritu la domina y proyecta su sabiduría en todas direcciones.",
        "CitaInelutable": "La Psiquis, es propiedad exclusiva del alma cuando el espíritu la ha dominado... emite en todas direcciones.",
        "EjemploPedagogico": "Una linterna de alta potencia. El espíritu es la batería; el alma es el foco y la psiquis es el haz de luz que ilumina todo a su alrededor.",
        "IdeasPrincipales": ["Psiquis Espiritual", "Expansión de la Facultad", "Dominio del Alma"],
        "PuntosImportantes": [
            "La psiquis procede de la sabiduría ganada por el trabajo del espíritu",
            "Permite comprender los efectos a través de sus causas reales",
            "Es el arma definitiva para anular la supremacía del error"
        ],
        "NodosSinapticos": ["Psiquis_Espiritual", "Expansion_de_la_Facultad", "Dominio_del_Alma"],
        "ContextoDiccionario": {
            "Psiquis_Espiritual": "La manifestación de la inteligencia y voluntad del espíritu a través del periespíritu o alma."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 9 aplicado exitosamente.")
