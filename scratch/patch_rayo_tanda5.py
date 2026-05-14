import json

esencia_path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "2241: Mis observaciones": {
        "PilotoDeCoherencia": "Crítica al concepto de 'misterio' religioso como refugio de la ignorancia frente a la luz de las leyes naturales.",
        "CitaInelutable": "El misterio es la confesión de la ignorancia; la Escuela no admite misterios porque la ley de Eloí es luz para quien sabe buscarla.",
        "EjemploPedagogico": "Una habitación oscura que el miedo llama 'misterio', pero que la razón ilumina revelando que solo contiene objetos naturales y comprensibles.",
        "IdeasPrincipales": [
            "Inexistencia del misterio espiritual",
            "Luz de la razón",
            "Comprensión de las leyes de Eloí"
        ],
        "PuntosImportantes": [
            "El misterio como herramienta de control sacerdotal",
            "La accesibilidad del conocimiento universal para el espíritu libre",
            "La ley natural no tiene secretos para el sabio"
        ],
        "NodosSinapticos": [
            "Misterio_vs_Luz",
            "Ley_de_Eloí",
            "Fin_de_la_Ignorancia"
        ],
        "ContextoDiccionario": {
            "Misterio_Religioso": "Término usado por las religiones para ocultar su incapacidad de explicar racionalmente los fenómenos naturales y espirituales."
        }
    },
    "2654: Exposicin 2. De C. Montemayor: CONTROVERSIA CON LOS CATLICOS Con Moiss o con Darwin?": {
        "PilotoDeCoherencia": "Análisis del dilema entre el mito creacionista y la evolución biológica, señalando el error materialista de negar la causa espiritual.",
        "CitaInelutable": "¿Con Moisés o con Darwin? El dilema del mundo es elegir entre la fábula religiosa y la observación científica, aunque la ciencia materialista olvida el alma.",
        "EjemploPedagogico": "Elegir entre creer que una casa fue hecha por un mago en un segundo o que se construyó sola por accidente; la Escuela enseña que hubo un arquitecto y un proceso de obra racional.",
        "IdeasPrincipales": [
            "Evolucionismo vs Creacionismo",
            "Límites de la ciencia materialista",
            "Fábula bíblica vs Realidad biológica"
        ],
        "PuntosImportantes": [
            "Defensa de Darwin frente al dogma de Moisés",
            "Crítica al ateísmo que niega el principio inteligente de la vida",
            "La evolución como ley de progreso universal"
        ],
        "NodosSinapticos": [
            "Moises_vs_Darwin",
            "Evolucionismo_Racional",
            "Materialismo_Ateo_Error"
        ],
        "ContextoDiccionario": {
            "Evolucionismo_Racional": "Doctrina que acepta la evolución biológica y espiritual como un proceso ordenado por leyes inteligentes, no por azar material."
        }
    },
    "2997: Mis Observaciones": {
        "PilotoDeCoherencia": "Crítica al materialismo que destruye la imagen falsa de Dios pero queda huérfano ante la vida misma y su origen inteligente.",
        "CitaInelutable": "Montemayor mata al Dios de palo de los curas, pero no puede matar al Padre de amor que es la vida misma del universo.",
        "EjemploPedagogico": "Un niño que rompe un juguete creyendo que así destruye la idea de juego; destruye el objeto, pero no la esencia que le daba sentido.",
        "IdeasPrincipales": [
            "Destrucción del Dios-Ídolo",
            "Subsistencia del Padre de Amor",
            "Vacío existencial del ateísmo radical"
        ],
        "PuntosImportantes": [
            "Diferencia entre el Dios antropomórfico y el Creador Universal",
            "El error de confundir la religión con la espiritualidad",
            "La vida como prueba irrefutable de la inteligencia creadora"
        ],
        "NodosSinapticos": [
            "Dios_Fantasma",
            "Padre_de_Amor",
            "Critica_al_Materialismo"
        ],
        "ContextoDiccionario": {
            "Dios_Fantasma": "La imagen deformada, colérica y antropomórfica de la divinidad creada por las religiones para dominar a las masas."
        }
    },
    "3542: 2. Rplica del Sr. Podest.: Catlico": {
        "PilotoDeCoherencia": "Denuncia de la manipulación dogmática de la ciencia por parte del catolicismo para justificar el concepto de 'milagro' sobrenatural.",
        "CitaInelutable": "El catolicismo intenta bautizar a la ciencia para que sirva al dogma, llamando milagro a lo que la razón aún no ha explicado.",
        "EjemploPedagogico": "Un prestidigitador que usa leyes físicas conocidas pero las presenta como magia para mantener su poder y el asombro del público ignorante.",
        "IdeasPrincipales": [
            "Secuestro del discurso científico",
            "Milagro como excusa de la ignorancia",
            "Apropiación de figuras como Lavoisier"
        ],
        "PuntosImportantes": [
            "La materia no necesita impulsos sobrenaturales, se mueve por ley propia",
            "El catolicismo intenta conciliar lo inconciliable: dogma y ciencia",
            "Lavoisier como ejemplo de científico distorsionado por la Iglesia"
        ],
        "NodosSinapticos": [
            "Manipulacion_Dogmatica_de_la_Ciencia",
            "Milagro_vs_Ley",
            "Lavoisier_y_el_Dogma"
        ],
        "ContextoDiccionario": {
            "Milagro_Religioso": "Supuesta suspensión de las leyes naturales por voluntad divina, concepto rechazado por la Escuela por ser la ley inmutable."
        }
    },
    "3567: Introduccin en chanza": {
        "PilotoDeCoherencia": "Análisis del uso del sarcasmo y la mofa por parte del clero como síntoma de su impotencia intelectual ante la verdad.",
        "CitaInelutable": "Cuando la razón falta, el dogma recurre a la chanza; la risa del fanático es el llanto de su impotencia intelectual.",
        "EjemploPedagogico": "Un deudor que, al serle presentadas sus facturas impagables, empieza a hacer chistes sobre el acreedor para evitar la realidad de su quiebra.",
        "IdeasPrincipales": [
            "Sarcasmo dogmático",
            "Falta de argumentos lógicos",
            "Estrategia de distracción eclesiástica"
        ],
        "PuntosImportantes": [
            "La burla como último recurso de la fe derrotada",
            "Desprecio por la seriedad del debate social",
            "La mofa no anula la verdad, solo retrasa su reconocimiento"
        ],
        "NodosSinapticos": [
            "Sarcasmo_Dogmatico",
            "Impotencia_Intelectual",
            "Mofas_Religiosas"
        ],
        "ContextoDiccionario": {
            "Impotencia_Intelectual": "Estado de incapacidad de un sistema de pensamiento para responder a las objeciones de la razón, recurriendo a la descalificación personal."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Rayo Tanda 5 aplicado exitosamente.")
