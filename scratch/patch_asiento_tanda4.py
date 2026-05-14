import json

esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "137: Siempre ms all": {
        "PilotoDeCoherencia": "La divisa del progreso infinito: el espíritu no tiene límites en su evolución, impulsado por una voluntad que busca la perfección eterna en cada grado de existencia.",
        "CitaInelutable": "¡Siempre más allá!",
        "EjemploPedagogico": "Un telescopio que siempre encuentra una galaxia nueva detrás de la última descubierta. El espíritu es ese lente que nunca deja de enfocar nuevos horizontes de saber.",
        "IdeasPrincipales": ["Progreso Infinito", "Superación Espiritual", "Evolución Eterna"],
        "PuntosImportantes": [
            "El estancamiento es la única muerte real para el espíritu",
            "Cada meta alcanzada es solo el punto de partida para una superior",
            "La ley de progreso obliga a la actividad incesante"
        ],
        "NodosSinapticos": ["Progreso_Infinito", "Superacion_Espiritual", "Evolucion_Eterna"],
        "ContextoDiccionario": {
            "Siempre_Más_Allá": "El lema de la EMECU que resume la ley del progreso infinito y la superación constante del espíritu."
        }
    },
    "148: Premisa": {
        "PilotoDeCoherencia": "Fundamentación lógica de la doctrina: el reconocimiento de que todo efecto inteligente requiere una causa inteligente, situando al espíritu como el motor de la vida física.",
        "CitaInelutable": "Premisa... Noviembre de 1913.",
        "EjemploPedagogico": "Observar el movimiento de las manecillas de un reloj. Aunque no veas los engranajes internos, sabes que existen porque el movimiento es preciso. El espíritu es el engranaje de la vida.",
        "IdeasPrincipales": ["Causa y Efecto", "Lógica Trincadista", "Existencia del Espíritu"],
        "PuntosImportantes": [
            "La vida no puede ser un producto del azar material",
            "El análisis racional de los efectos conduce inevitablemente al Creador",
            "Esta premisa separa al Espiritismo Racional de las supersticiones"
        ],
        "NodosSinapticos": ["Causa_y_Efecto", "Logica_Trincadista", "Existencia_del_Espiritu"],
        "ContextoDiccionario": {
            "Causa_y_Efecto": "La ley universal de justicia que establece que todo acto produce una consecuencia proporcional y que todo efecto revela su origen."
        }
    },
    "334: PREFACIO": {
        "PilotoDeCoherencia": "Declaración de intenciones de la obra: romper el crepúsculo de la ignorancia mediante la exposición de conocimientos guardados en el archivo del espíritu y transmitidos por los misioneros.",
        "CitaInelutable": "Destinado... a rasgar el crepúsculo... como Draga y como Aplanadora.",
        "EjemploPedagogico": "La introducción de un manual de vuelo para alguien que siempre ha vivido en tierra. El prefacio te advierte que el viaje requiere soltar el lastre de los dogmas antiguos.",
        "IdeasPrincipales": ["Inspiración Misionera", "Archivo del Espíritu", "Conocimiento Revelado"],
        "PuntosImportantes": [
            "La verdad no se inventa, se descubre al limpiar la razón",
            "El autor actúa por orden y bajo la dirección del Espíritu de Verdad",
            "Prepara al lector para la 'Pascua Máxima' o juicio de mayoría"
        ],
        "NodosSinapticos": ["Inspiracion_Misionera", "Archivo_del_Espiritu", "Conocimiento_Revelado"],
        "ContextoDiccionario": {
            "Archivo_del_Espíritu": "La memoria eterna e indestructible de cada ser donde se registran todas sus experiencias y conocimientos de vidas pasadas."
        }
    },
    "584: LIBRO PRIMERO  PARTE PRIMERA": {
        "PilotoDeCoherencia": "Inicio de la estructura técnica de la doctrina: el estudio de la metafísica racional y la fenomenología como ciencias del espíritu.",
        "CitaInelutable": "LIBRO PRIMERO – PARTE PRIMERA.",
        "EjemploPedagogico": "El plano fundamental de una catedral. Antes de poner los vitrales, se estudian las columnas y la piedra que sostendrá todo el peso de la sabiduría.",
        "IdeasPrincipales": ["Estructura Doctrinal", "Metafísica Racional", "Fundamentos"],
        "PuntosImportantes": [
            "Organiza el conocimiento en niveles de profundidad lógica",
            "Establece la primacía del espíritu sobre la forma",
            "Es el inicio del 'Asiento' inamovible de la razón"
        ],
        "NodosSinapticos": ["Estructura_Doctrinal", "Metafisica_Racional", "Fundamentos"],
        "ContextoDiccionario": {
            "Metafísica_Racional": "El estudio científico y lógico de las realidades que trascienden la materia densa, basado en la evidencia del espíritu."
        }
    },
    "588: CAPTULO I: Qu es el espiritismo?": {
        "PilotoDeCoherencia": "Definición axiomática y definitiva: el espiritismo es la vida misma, la sabiduría y omnipotencia de todos los espíritus solidarizados bajo la única ley del amor.",
        "CitaInelutable": "El espiritismo es la vida eterna y continuada... no es religión... es el universo solidarizado.",
        "EjemploPedagogico": "La red de internet. No es una página web ni un cable, sino la suma de toda la información y conexión del mundo. El espiritismo es esa 'red' pero de conciencias eternas.",
        "IdeasPrincipales": ["Definición del Espiritismo", "Vida Real", "Omnipotencia Solidarizada"],
        "PuntosImportantes": [
            "No es religión porque no admite dogmas ni ritos",
            "Es la ciencia de las ciencias porque estudia la causa de todo",
            "Es el arma del Padre para destruir todas las religiones y errores"
        ],
        "NodosSinapticos": ["Definicion_del_Espiritismo", "Vida_Real", "Omnipotencia_Solidarizada"],
        "ContextoDiccionario": {
            "Definición_del_Espiritismo": "Axioma que establece al Espiritismo como la vida eterna y continuada, y la sabiduría omnipotente de la creación solidarizada."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Asiento Tanda 4 aplicado exitosamente.")
