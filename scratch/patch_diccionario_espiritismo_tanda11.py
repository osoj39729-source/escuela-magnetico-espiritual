import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Que_son_los_Mediums": {
        "palabras_clave": ["qué son", "médiums", "pararrayos", "instrumentos", "percepción"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#7652: CAPITULO SEGUNDO: QU SON LOS MDIUMS"],
        "contexto_real": "La definición científica del médium como un instrumento biológico y sensitivo, no como un elegido divino, que actúa como puente entre los planos material e inmaterial."
    },
    "Pararrayos_Fluidico": {
        "palabras_clave": ["pararrayos", "fluídico", "médium", "absorción", "ambiente"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#7652: CAPITULO SEGUNDO: QU SON LOS MDIUMS"],
        "contexto_real": "La función natural del cuerpo y periespíritu del médium de absorber y descargar las energías (fluidos) de las personas y espíritus que le rodean, protegiendo así el entorno."
    },
    "Sensibilidad_Espiritual": {
        "palabras_clave": ["sensibilidad", "espiritual", "percepción", "fisiología", "mediumnidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#7652: CAPITULO SEGUNDO: QU SON LOS MDIUMS"],
        "contexto_real": "El estado avanzado del sistema nervioso y del periespíritu que permite al individuo captar conscientemente las vibraciones del plano espiritual."
    },
    "Cualidades_del_Medium": {
        "palabras_clave": ["cualidades", "médium", "moral", "abnegación", "higiene"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#7804: CAPITULO TERCERO: CUALIDADES DEL MDIUM"],
        "contexto_real": "El conjunto de virtudes morales (abnegación, estudio, humildad) que garantizan que la facultad mediúmnica sea un canal limpio para los espíritus de luz y no un nido de obsesores."
    },
    "Misionero_del_Espiritu": {
        "palabras_clave": ["misionero", "espíritu", "médium", "sacrificio", "servicio"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#7804: CAPITULO TERCERO: CUALIDADES DEL MDIUM"],
        "contexto_real": "El concepto de que el médium desarrollado es un trabajador al servicio de la Comuna Universal y no el dueño absoluto de su propia facultad."
    },
    "Higiene_Moral": {
        "palabras_clave": ["higiene", "moral", "pureza", "soberbia", "fanatismo"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#7804: CAPITULO TERCERO: CUALIDADES DEL MDIUM"],
        "contexto_real": "La obligación del médium de mantener una conducta recta y desprovista de fanatismo para evitar la intromisión de entidades burlonas o detractoras."
    },
    "Mediumnidad_Poliglota": {
        "palabras_clave": ["mediumnidad", "políglota", "xenoglosia", "idioma", "traducción"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8103: PARRAFO II: CUALIDADES POLIGLOTAS Hacemos este prrafito especial porque bien merece comprender el por qu un"],
        "contexto_real": "La facultad de expresar ideas espirituales en idiomas desconocidos para el médium en su vida actual, utilizando la traducción telepática y los archivos de sus existencias anteriores."
    },
    "Traduccion_Telepatica": {
        "palabras_clave": ["traducción", "telepática", "idea", "vibración", "idioma"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8103: PARRAFO II: CUALIDADES POLIGLOTAS Hacemos este prrafito especial porque bien merece comprender el por qu un"],
        "contexto_real": "El proceso mediante el cual el espíritu transmite conceptos puros (sin palabras sonoras) que el cerebro del médium convierte automáticamente al lenguaje que posee en su archivo."
    },
    "Idioma_del_Espiritu": {
        "palabras_clave": ["idioma", "espíritu", "telepatía", "universal", "vibración"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8103: PARRAFO II: CUALIDADES POLIGLOTAS Hacemos este prrafito especial porque bien merece comprender el por qu un"],
        "contexto_real": "La comunicación mediante la transmisión directa del pensamiento y el sentimiento, superando las barreras lingüísticas que solo existen en la materia densa."
    },
    "Curanderismo_Mistico": {
        "palabras_clave": ["curanderismo", "místico", "engaño", "adivinanza", "superchería"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8254: CAPITULO CUARTO: LOS MDIUMS MDICOS"],
        "contexto_real": "La falsificación del espiritismo mediante prácticas de adivinanza, hechicería, rezos y 'bajadas' de santos, ejecutadas por médiums mercenarios bajo la influencia de espíritus bajos."
    },
    "Medium_Medico": {
        "palabras_clave": ["médium", "médico", "curación", "verdad", "luz"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8254: CAPITULO CUARTO: LOS MDIUMS MDICOS"],
        "contexto_real": "El instrumento a través del cual los espíritus de luz especializados en medicina aplican leyes magnéticas para sanar el periespíritu y el cuerpo, sin recurrir a rituales ni cobros."
    },
    "Curacion_Magnetica": {
        "palabras_clave": ["curación", "magnética", "magnetismo", "espíritu", "fisiología"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8254: CAPITULO CUARTO: LOS MDIUMS MDICOS"],
        "contexto_real": "La restitución de la salud mediante el reequilibrio de los fluidos del periespíritu, operada por inteligencias superiores a través de médiums limpios."
    },
    "Videncia": {
        "palabras_clave": ["videncia", "vidente", "visión", "espíritu", "periespíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8553: CAPITULO QUINTO: LOS MDIUMS VIDENTES"],
        "contexto_real": "La facultad sensorial del espíritu, apoyada en el desdoblamiento del periespíritu, que le permite ver realidades, fluidos y entidades en planos invisibles a la vista física."
    },
    "Centinela_Espiritual": {
        "palabras_clave": ["centinela", "espiritual", "vidente", "defensa", "ataque"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8553: CAPITULO QUINTO: LOS MDIUMS VIDENTES"],
        "contexto_real": "La función protectora del vidente dentro de una cátedra, actuando como radar para detectar y advertir sobre los ataques fluídicos de los espíritus detractores."
    },
    "Vision_de_Mundos": {
        "palabras_clave": ["visión", "mundos", "progreso", "estudio", "desdoblamiento"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8553: CAPITULO QUINTO: LOS MDIUMS VIDENTES"],
        "contexto_real": "La capacidad del vidente de proyectarse hacia mundos superiores (como Neptuno o Venus) para estudiar su sociedad y traer conocimientos que impulsen el progreso de la Tierra."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v
    else:
        for node in v["nodos_sinapticos"]:
            if node not in dic["CONCEPTOS"][k]["nodos_sinapticos"]:
                dic["CONCEPTOS"][k]["nodos_sinapticos"].append(node)

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 11 actualizado.")
