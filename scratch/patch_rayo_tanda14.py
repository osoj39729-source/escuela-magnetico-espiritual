import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "11795: SENTENCIA": {
        "PilotoDeCoherencia": "El fallo inapelable del Juez (Trincado) que condena al dogma católico basándose en las propias pruebas aportadas por el Syllabus.",
        "CitaInelutable": "El Syllabus es la confesión de la bestia; con su propia firma sella su condena y abre la puerta a la emancipación racional.",
        "EjemploPedagogico": "Un dictador que firma un documento público donde prohíbe pensar libremente, logrando con ello que el pueblo despierte, comprenda su tiranía y lo destituya.",
        "IdeasPrincipales": [
            "Sentencia Final",
            "Condena del Dogma",
            "Emancipación Racional"
        ],
        "PuntosImportantes": [
            "El Syllabus como prueba irrefutable de la guerra clerical contra el progreso",
            "La Iglesia juzgada por sus propias palabras y excomuniones",
            "Declaración formal de la victoria de la razón sobre el miedo"
        ],
        "NodosSinapticos": [
            "Sentencia_Final",
            "Condena_del_Dogma",
            "Emancipacion_Racional"
        ],
        "ContextoDiccionario": {
            "Sentencia_Racional": "Juicio inapelable emitido por la Escuela Magnética que condena la falsedad dogmática basándose en la evidencia de los hechos y leyes naturales."
        }
    },
    "11965: DUODECIMO": {
        "PilotoDeCoherencia": "Exposición sintética de los principios fundamentales de la Escuela: la unidad de la sustancia, del Creador y de la humanidad frente al divisionismo religioso.",
        "CitaInelutable": "La ley es una, la sustancia es una, la humanidad es una; el universo es la escuela donde el espíritu aprende por la luz de su propio trabajo.",
        "EjemploPedagogico": "El acta constitucional de una nueva era que deroga todas las fronteras y mitos antiguos, estableciendo que todos los hombres son hermanos y estudiantes del mismo universo.",
        "IdeasPrincipales": [
            "Doce Principios Racionales",
            "Unidad Universal",
            "Trabajo Espiritual"
        ],
        "PuntosImportantes": [
            "Reafirmación de Eloí como Padre Universal, no como Dios colérico",
            "La pluralidad de existencias (reencarnación) como medio de progreso",
            "La abolición definitiva del concepto de 'milagro'"
        ],
        "NodosSinapticos": [
            "Doce_Principios_Racionales",
            "Unidad_Universal",
            "Trabajo_Espiritual"
        ],
        "ContextoDiccionario": {
            "Unidad_Universal": "Axioma filosófico que reconoce una sola causa inteligente (Eloí), una sola sustancia (Materia-Espíritu) y una sola familia humana."
        }
    },
    "12060: JOAQUIN TRINCADO": {
        "PilotoDeCoherencia": "Firma del Maestro y ratificación posterior (1931) de la vigencia de la obra, demostrando que la Iglesia continúa siendo la fuente del fanatismo.",
        "CitaInelutable": "JOAQUIN TRINCADO. El tiempo confirma mis juicios; la Iglesia sigue siendo la causa de la ignorancia y del odio humano.",
        "EjemploPedagogico": "La rúbrica de un arquitecto que, años después de advertir que un edificio estaba mal construido, ve cómo este se derrumba exactamente como lo predijo.",
        "IdeasPrincipales": [
            "Firma del Maestro",
            "Confirmación Histórica",
            "Vigencia de la Obra"
        ],
        "PuntosImportantes": [
            "El Primer Rayo de Luz como advertencia cumplida",
            "La naturaleza inmutable del dogma católico que siempre busca el poder temporal",
            "Cierre magistral del volumen fundacional de la Escuela"
        ],
        "NodosSinapticos": [
            "Firma_del_Maestro",
            "Confirmacion_Historica",
            "Vigencia_de_la_Escuela"
        ],
        "ContextoDiccionario": {
            "Vigencia_Doctrinal": "La capacidad de las enseñanzas de la Escuela para mantenerse precisas y verdaderas a lo largo del tiempo, confirmadas por los acontecimientos históricos."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 14 aplicado exitosamente.")
