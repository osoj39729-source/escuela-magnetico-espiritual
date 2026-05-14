import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Programa_Perpetuo": {
        "palabras_clave": ["programa", "perpetuo", "estudio", "infinito", "evolución"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#46: PROGRAMA PERPETUO DE ESTUDIOS: LA VIDA ETERNA Y CONTINUADA"],
        "contexto_real": "El plan de evolución intelectual y moral que el espíritu sigue a través de sus infinitas existencias, sin límites de tiempo ni espacio."
    },
    "Vida_Eterna": {
        "palabras_clave": ["vida", "eterna", "continuada", "inmortalidad", "espíritu"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#46: PROGRAMA PERPETUO DE ESTUDIOS: LA VIDA ETERNA Y CONTINUADA"],
        "contexto_real": "La realidad fundamental de la existencia del espíritu, que sobrevive a la muerte del cuerpo físico y continúa su progreso infinitamente."
    },
    "Estudio_Continuado": {
        "palabras_clave": ["estudio", "continuado", "aprendizaje", "progreso", "sabiduría"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#46: PROGRAMA PERPETUO DE ESTUDIOS: LA VIDA ETERNA Y CONTINUADA"],
        "contexto_real": "La necesidad del espíritu de adquirir conocimientos constantemente para elevar su nivel vibratorio y comprender las leyes del Creador."
    },
    "Conferencias_Verbales": {
        "palabras_clave": ["conferencias", "verbales", "enseñanza", "razón", "palabra"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#50: DISTRIBUCIN: CONFERENCIAS VERBALES Y MEDIANMICAS"],
        "contexto_real": "El componente humano y racional de la enseñanza en la Escuela, basado en la exposición lógica de la doctrina por parte de los maestros encarnados."
    },
    "Comunicaciones_Medianimicas": {
        "palabras_clave": ["comunicaciones", "medianímicas", "espíritus", "dictado", "luz"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#50: DISTRIBUCIN: CONFERENCIAS VERBALES Y MEDIANMICAS"],
        "contexto_real": "Los mensajes recibidos de espíritus de luz a través de médiums, utilizados como complemento ilustrativo de la enseñanza verbal."
    },
    "Metodo_Pedagogico": {
        "palabras_clave": ["método", "pedagógico", "escuela", "enseñanza", "razón"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#50: DISTRIBUCIN: CONFERENCIAS VERBALES Y MEDIANMICAS"],
        "contexto_real": "El sistema de enseñanza de la EMECU basado en el estudio racional de textos y la experimentación mediúnica controlada."
    },
    "Draga_Doctrinal": {
        "palabras_clave": ["draga", "doctrinal", "limpieza", "dogma", "error"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#74: Prlogo de la 2. Edicin"],
        "contexto_real": "Metáfora que describe la acción de la doctrina de remover los errores profundos y sedimentados de la mente humana."
    },
    "Aplanadora_de_Errores": {
        "palabras_clave": ["aplanadora", "errores", "allanar", "camino", "verdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#74: Prlogo de la 2. Edicin"],
        "contexto_real": "Función de la doctrina de nivelar el terreno de la conciencia, eliminando los obstáculos del prejuicio para facilitar el progreso."
    },
    "Luz_en_el_Camino": {
        "palabras_clave": ["luz", "camino", "guía", "sabiduría", "verdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#74: Prlogo de la 2. Edicin"],
        "contexto_real": "La función iluminadora de la verdad que permite al hombre transitar su existencia con seguridad y discernimiento."
    },
    "Athanasia": {
        "palabras_clave": ["athanasia", "inmortalidad", "conciencia", "eterno", "luz"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#95: llevar a sus lectores a las mansiones de ATHANASIA (inmortalidad) seguro de conseguir su"],
        "contexto_real": "Término griego que significa inmortalidad, utilizado por Trincado para designar el estado de conciencia plena de la vida eterna."
    },
    "Inmortalidad_Consciente": {
        "palabras_clave": ["inmortalidad", "consciente", "conciencia", "muerte", "vida"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#95: llevar a sus lectores a las mansiones de ATHANASIA (inmortalidad) seguro de conseguir su"],
        "contexto_real": "El estado del espíritu que, habiendo alcanzado la sabiduría, ya no pierde el hilo de su existencia durante los procesos de reencarnación o desencarnación."
    },
    "Mansiones_Espirituales": {
        "palabras_clave": ["mansiones", "espirituales", "moradas", "mundos", "elevación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#95: llevar a sus lectores a las mansiones de ATHANASIA (inmortalidad) seguro de conseguir su"],
        "contexto_real": "Los estados de conciencia o lugares de habituación del espíritu en el mundo astral, acordes a su grado de progreso."
    },
    "Catedras_de_Sabiduria": {
        "palabras_clave": ["cátedras", "sabiduría", "centros", "estudio", "escuela"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#99: ilustrado a los hombres en los axiomas de la verdad suprema, en ms de CIEN CTEDRAS,"],
        "contexto_real": "Centros de estudio y fraternidad de la EMECU donde se imparte la doctrina del Espiritismo Luz y Verdad."
    },
    "Verdad_Suprema": {
        "palabras_clave": ["verdad", "suprema", "axioma", "eloi", "justicia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#99: ilustrado a los hombres en los axiomas de la verdad suprema, en ms de CIEN CTEDRAS,"],
        "contexto_real": "El conocimiento absoluto de las leyes universales que emanan de la sabiduría suprema del Creador."
    },
    "Elevacion_del_Espiritu": {
        "palabras_clave": ["elevación", "espíritu", "progreso", "luz", "sabiduría"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#99: ilustrado a los hombres en los axiomas de la verdad suprema, en ms de CIEN CTEDRAS,"],
        "contexto_real": "El proceso de ascenso vibratorio y moral del espíritu a través del cumplimiento de su deber y la adquisición de saber."
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

print("Diccionario Tanda 3 (Asiento) actualizado.")
