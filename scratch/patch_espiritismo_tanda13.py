import json

esencia_path = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

nuevos_nodos = {
    "9682: CUARTA PARTE: FENMENOS ESPIRITUALES:": {
        "PilotoDeCoherencia": "Introducción a la vertiente experimental y técnica del Espiritismo: el estudio de los fenómenos no como espectáculo, sino como evidencia empírica de leyes naturales que rigen el universo.",
        "CitaInelutable": "CUARTA PARTE: FENÓMENOS ESPIRITUALES.",
        "EjemploPedagogico": "El estudio de la gravedad no se hace para ver cosas caer, sino para entender la mecánica celeste. Los fenómenos espirituales son la 'gravedad' del mundo invisible.",
        "IdeasPrincipales": ["Fenomenología Espiritual", "Leyes Naturales", "Evidencia Empírica"],
        "PuntosImportantes": [
            "El fenómeno es un medio de comprobación, nunca un fin en sí mismo",
            "El Espiritismo Luz y Verdad rechaza el milagro; todo tiene una causa científica",
            "Esta sección codifica la mecánica operativa de las facultades"
        ],
        "NodosSinapticos": ["Fenomenologia_Espiritual", "Leyes_Naturales", "Estudio_Tecnico"],
        "ContextoDiccionario": {
            "Fenomenología_Espiritual": "El estudio científico y racional de las manifestaciones del espíritu sobre la materia, despojado de interpretaciones místicas o religiosas."
        }
    },
    "9688: CAPITULO PRIMERO: FENMENOS DE VIDENCIA": {
        "PilotoDeCoherencia": "Análisis técnico de la videncia como la capacidad del espíritu de usar la 'vista del alma' para percibir realidades en planos vibratorios superiores y advertir peligros.",
        "CitaInelutable": "La videncia es la facultad más defensiva del espiritismo... por ella vienen también los mayores progresos.",
        "EjemploPedagogico": "Un radar de alta precisión que no solo detecta aviones, sino que puede ver la composición del aire y tormentas lejanas invisibles al ojo humano.",
        "IdeasPrincipales": ["Videncia Espiritual", "Centinela de Luz", "Progreso Visual"],
        "PuntosImportantes": [
            "Permite advertir maniobras de detractores antes de que se materialicen",
            "A través de ella se han estudiado sociedades en mundos como Venus y Marte",
            "Es inseparable del desdoblamiento para visiones a larga distancia"
        ],
        "NodosSinapticos": ["Videncia_Espiritual", "Centinela_de_Luz", "Percepcion_Extrasensorial"],
        "ContextoDiccionario": {
            "Videncia_Espiritual": "La facultad de percepción visual del espíritu que trasciende la luz física, permitiendo ver entidades, fluidos y eventos en el Éter."
        }
    },
    "10077: CAPITULO SEGUNDO: FENMENO DE LA POSESIN PARLANTE": {
        "PilotoDeCoherencia": "Descripción de la mecánica de posesión: la sustitución temporal del control del sistema nervioso del médium por la voluntad de un espíritu comunicante bajo leyes de afinidad.",
        "CitaInelutable": "El médium parlante pasa por muchas alternativas en una misma posesión... debe estar hablando y defendiéndose para no ser suplantado.",
        "EjemploPedagogico": "Un sistema de control remoto. El operador (espíritu) toma los mandos del robot (cuerpo del médium). Si hay interferencia (detractores), el robot puede fallar o ser hackeado.",
        "IdeasPrincipales": ["Posesión Parlante", "Afinidad Fluídica", "Control Medianímico"],
        "PuntosImportantes": [
            "La afinidad de pensamientos facilita una posesión clara y sin fatiga",
            "El médium debe estar ilustrado para que el espíritu tenga un 'archivo' rico del cual traducir",
            "En la posesión de luz, el espíritu del médium se retira a estudiar a otros planos"
        ],
        "NodosSinapticos": ["Posesion_Parlante", "Afinidad_Fluidica", "Control_Medianimico"],
        "ContextoDiccionario": {
            "Posesión_Parlante": "Fenómeno en el cual un espíritu utiliza los órganos de fonación de un médium para transmitir mensajes inteligentes de forma verbal."
        }
    },
    "10278: CAPTULO TERCERO: FENMENOS DE LA ESCRITURA, PINTURA Y DIBUJO": {
        "PilotoDeCoherencia": "Estudio de las facultades mecánicas donde el espíritu proyecta su arte y ciencia a través de la mano del médium, superando las habilidades del encarnado.",
        "CitaInelutable": "FENÓMENOS DE LA ESCRITURA, PINTURA Y DIBUJO.",
        "EjemploPedagogico": "Un artista que utiliza un brazo robótico programado desde otro país. La mano del médium es el brazo, y el programa es la voluntad del espíritu artista.",
        "IdeasPrincipales": ["Psicografía", "Arte Espiritual", "Mecánica Medianímica"],
        "PuntosImportantes": [
            "La escritura mecánica permite dictados de alta complejidad científica",
            "El arte mediúmnico es prueba de la supervivencia y la identidad del espíritu",
            "Requiere una educación técnica del brazo y la mano para evitar la fatiga"
        ],
        "NodosSinapticos": ["Psicografia", "Arte_Espiritual", "Escritura_Mecanica"],
        "ContextoDiccionario": {
            "Psicografía": "La facultad mediúmnica de escribir bajo la influencia directa de un espíritu, ya sea de forma mecánica (sin conciencia) o intuitiva."
        }
    },
    "10347: CAPTULO CUARTO: FENMENO DEL DESDOBLAMIENTO": {
        "PilotoDeCoherencia": "Explicación de la elasticidad del periespíritu: el fenómeno por el cual el espíritu se aleja del cuerpo físico mientras permanece unido por un hilo de luz (hebra de plata).",
        "CitaInelutable": "El desdoblamiento es un acto de la potencia del espíritu... la elasticidad del alma que en una distancia tan grande... el espíritu la veía aún como una faja de luz.",
        "EjemploPedagogico": "Un astronauta realizando una caminata espacial. El traje y el astronauta (periespíritu/espíritu) salen de la nave (cuerpo), unidos siempre por una línea de vida.",
        "IdeasPrincipales": ["Elasticidad del Alma", "Hebra de Plata", "Ubicuidad Espiritual"],
        "PuntosImportantes": [
            "El alma tiene una elasticidad infinita que permite viajes interestelares instantáneos",
            "Se produce por amor, deber o misión; o por odio en espíritus bajos",
            "Es la base técnica que permite la videncia a distancia y la comunicación entre mundos"
        ],
        "NodosSinapticos": ["Desdoblamiento_Consciente", "Elasticidad_del_Alma", "Hebra_de_Plata"],
        "ContextoDiccionario": {
            "Elasticidad_del_Alma": "La propiedad del periespíritu de estirarse indefinidamente, permitiendo al espíritu alejarse del cuerpo físico sin romper el vínculo vital."
        }
    }
}

esencia.update(nuevos_nodos)

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Parche Espiritismo Tanda 13 aplicado exitosamente.")
