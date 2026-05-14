import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "5: ESCUELA MAGNETICO- ESPIRITUAL DE LA COMUNA UNIVERSAL: EL PRIMER RAYO DE LUZ JUICIO CRÍTICO A LA CONTROVERSIA CATÓLICO - ANARQUISTA Primera Edición: Junio de 1922 Segunda Edición: Febrero de 1932": {
        "PilotoDeCoherencia": "Presentación de la obra como un juicio crítico a los extremos dogmático y materialista, proponiendo el Espiritismo Racionalista como solución social.",
        "CitaInelutable": "El Primer Rayo de Luz es el anuncio del día de la libertad y el juicio crítico a la controversia que divide a la humanidad.",
        "EjemploPedagogico": "Un juez imparcial que analiza dos testimonios opuestos para extraer la verdad oculta que ninguno de los dos quiere admitir.",
        "IdeasPrincipales": [
            "Crítica al Catolicismo",
            "Crítica al Anarquismo",
            "Tercera vía espiritual"
        ],
        "PuntosImportantes": [
            "Anuncio de la libertad de conciencia",
            "Superación del dualismo social",
            "El papel de la Escuela como centro de equilibrio"
        ],
        "NodosSinapticos": [
            "Primer_Rayo_de_Luz",
            "Controversia_Social",
            "Juicio_Critico"
        ],
        "ContextoDiccionario": {
            "Juicio_Critico": "Análisis racional y desapasionado de los sistemas sociales y religiosos para identificar sus errores y rescatar sus verdades."
        }
    },
    "22: CONSEJOS Y RECOMENDACIONES DE LA ESCUELA MAGNETICO ESPIRITUAL": {
        "PilotoDeCoherencia": "Axiomas fundamentales para el desarrollo del individuo como ser autónomo y responsable de su progreso espiritual.",
        "CitaInelutable": "¿Quieres triunfar, hermano? hazte ideas propias; conócete en verdad; sé señor de ti mismo y esclavo de tu deber.",
        "EjemploPedagogico": "Un capitán que debe navegar con su propia brújula y conocimiento, sin depender de las órdenes de barcos extraños.",
        "IdeasPrincipales": [
            "Autonomía intelectual",
            "Conocimiento de sí mismo",
            "Primacía del deber sobre el deseo"
        ],
        "PuntosImportantes": [
            "La importancia de las ideas propias",
            "El amor como medida del progreso",
            "La responsabilidad misionera del estudiante"
        ],
        "NodosSinapticos": [
            "Ideas_Propias",
            "Conocete_a_ti_mismo",
            "Deber_Misionero"
        ],
        "ContextoDiccionario": {
            "Deber": "Obligación moral del espíritu de trabajar por su propio progreso y el de sus hermanos, basada en la ley de amor."
        }
    },
    "23: DE LA COMUNA UNIVERSAL": {
        "PilotoDeCoherencia": "Definición de la Escuela como el órgano terrestre de la Comuna Universal, cuyo objetivo es la unificación de la familia humana.",
        "CitaInelutable": "La Escuela es de la Comuna Universal; su mandato es amar al hermano y buscar el consuelo en la verdad.",
        "EjemploPedagogico": "Una oficina de enlace de una gran confederación que viene a mediar en una región en conflicto para traer orden y justicia.",
        "IdeasPrincipales": [
            "Universalismo",
            "Fraternidad obligatoria",
            "Consuelo en la verdad"
        ],
        "PuntosImportantes": [
            "La Escuela como puente entre mundos",
            "El mandato de amor al hermano",
            "La búsqueda de la verdad racional"
        ],
        "NodosSinapticos": [
            "Comuna_Universal",
            "Fraternidad_Humana",
            "Escuela_Magnetico_Espiritual"
        ],
        "ContextoDiccionario": {
            "Comuna_Universal": "Régimen de vida basado en la justicia, la igualdad y el amor que rige en los mundos superiores y al cual debe aspirar la Tierra."
        }
    },
    "63: PROCLAMA:": {
        "PilotoDeCoherencia": "Declaración de principios que anuncia la caída de los viejos regímenes y la implantación de la ley única de amor.",
        "CitaInelutable": "¡Proclama! El universo está solidarizado; el mundo debe ser comunizado; la ley es una y la sustancia una.",
        "EjemploPedagogico": "El bando oficial que se lee en la plaza pública tras el derrocamiento de un tirano, anunciando la nueva constitución de libertad.",
        "IdeasPrincipales": [
            "Solidaridad universal",
            "Comunismo espiritual",
            "Unidad de la ley"
        ],
        "PuntosImportantes": [
            "Caída de los ídolos religiosos y políticos",
            "Solidaridad entre todos los seres del cosmos",
            "Llamado a la unificación de la humanidad"
        ],
        "NodosSinapticos": [
            "Proclama_de_Libertad",
            "Ley_Unica",
            "Solidaridad_Universal"
        ],
        "ContextoDiccionario": {
            "Solidaridad_Universal": "Principio metafísico que une a todos los seres y mundos en una interdependencia armónica bajo la misma ley."
        }
    },
    "65: El Universo Solidarizado: El Mundo todo Comunizado: La LEY es una. La substancia una": {
        "PilotoDeCoherencia": "Axioma ontológico que fundamenta la fraternidad en la unidad material y espiritual del universo.",
        "CitaInelutable": "La ley es una. La sustancia una. Uno es el principio. Uno es el fin.",
        "EjemploPedagogico": "Todas las olas del océano que, aunque parezcan separadas, son el mismo océano movido por la misma fuerza gravitatoria.",
        "IdeasPrincipales": [
            "Unidad de la Sustancia",
            "Monismo Espiritual",
            "Identidad de Origen y Fin"
        ],
        "PuntosImportantes": [
            "No existen dos leyes, solo la ley de Eloí",
            "La materia es una sola sustancia en diversos grados de vibración",
            "La fraternidad es una necesidad científica del ser"
        ],
        "NodosSinapticos": [
            "Unidad_de_Sustancia",
            "Cosmos_Solidarizado",
            "Principio_y_Fin"
        ],
        "ContextoDiccionario": {
            "Sustancia_Unica": "Elemento primordial del cual está hecho todo lo que existe, desde la materia más densa hasta el espíritu más puro."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 1 aplicado exitosamente.")
