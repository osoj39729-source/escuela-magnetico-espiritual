import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Solidaridad_Universal": {
        "palabras_clave": ["solidaridad", "universal", "ayuda", "colaboración", "mundos", "unión"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4903: CAPITULO IV: La voz universal solidaria"],
        "contexto_real": "El principio de ayuda mutua y colaboración que rige las relaciones entre todos los mundos habitados del universo."
    },
    "Mision_de_los_Maestros": {
        "palabras_clave": ["misión", "maestros", "guía", "enseñanza", "luz", "mundos"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4903: CAPITULO IV: La voz universal solidaria"],
        "contexto_real": "La tarea de los espíritus superiores de descender a mundos en transición para entregar las leyes de progreso."
    },
    "Plebiscito_Cosmogonico": {
        "palabras_clave": ["plebiscito", "cosmogónico", "voto", "acuerdo", "universal", "ley"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4903: CAPITULO IV: La voz universal solidaria"],
        "contexto_real": "El consenso de todos los espíritus sabios del universo que da origen y validez a las leyes naturales."
    },
    "Redencion_de_la_Mujer": {
        "palabras_clave": ["redención", "mujer", "igualdad", "derechos", "madre", "liberación"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5028: Acotaciones:"],
        "contexto_real": "El proceso de liberación y reconocimiento de la igualdad absoluta de la mujer tras milenios de opresión religiosa y social."
    },
    "Derecho_a_Legislar": {
        "palabras_clave": ["derecho", "legislar", "ley", "participación", "igualdad", "mujer"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5028: Acotaciones:"],
        "contexto_real": "La facultad inalienable de todo espíritu (incluyendo a la mujer) de participar en la creación de las leyes sociales."
    },
    "Igualdad_de_los_Sexos": {
        "palabras_clave": ["igualdad", "sexos", "hombre", "mujer", "misma", "ley"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5028: Acotaciones:"],
        "contexto_real": "Axioma que sostiene que el espíritu no tiene sexo y que las diferencias físicas no otorgan superioridad de derechos."
    },
    "Letra_que_Vivifica": {
        "palabras_clave": ["letra", "vivifica", "espíritu", "vida", "enseñanza", "verdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5286: in dita de esas tradiciones..."],
        "contexto_real": "La enseñanza doctrinal que, a diferencia de los dogmas, despierta y libera la conciencia del espíritu."
    },
    "Leyes_Luminosas": {
        "palabras_clave": ["leyes", "luminosas", "luz", "justicia", "amor", "espíritu"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5286: in dita de esas tradiciones..."],
        "contexto_real": "Las normas de convivencia basadas en la realidad espiritual que reemplazan a las leyes humanas oscuras."
    },
    "Renovacion_Generacional": {
        "palabras_clave": ["renovación", "generacional", "cambio", "generación", "futuro", "progreso"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5286: in dita de esas tradiciones..."],
        "contexto_real": "El proceso de reemplazo de ideas viejas por nuevas mediante la encarnación de espíritus más progresados."
    },
    "Mision_de_Kardec": {
        "palabras_clave": ["misión", "kardec", "allan", "prologuista", "preparador", "fenómeno"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5575: Acotaciones:"],
        "contexto_real": "La tarea encomendada al espíritu Allan Kardec de abrir el camino a la fenomenología mediúnica como preludio a la doctrina racional."
    },
    "Codigo_de_Amor": {
        "palabras_clave": ["código", "amor", "ley", "universal", "trincado", "justicia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5575: Acotaciones:"],
        "contexto_real": "La ley suprema entregada a la Tierra para regir la Comuna de Amor y Ley en los siglos de luz."
    },
    "Juicio_al_Espiritualismo": {
        "palabras_clave": ["juicio", "espiritualismo", "crítica", "amalgama", "error", "misticismo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5575: Acotaciones:"],
        "contexto_real": "La evaluación crítica de las doctrinas que admiten al espíritu pero conservan dogmas religiosos o misticismo."
    },
    "Derecho_del_Espiritu": {
        "palabras_clave": ["derecho", "espíritu", "soberanía", "ley", "natural", "inalienable"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5629: PARTE TERCERA: El derecho de los esp ritos: Alta leccin"],
        "contexto_real": "El principio jurídico-espiritual que reconoce al ser inmortal como el único sujeto de derechos y deberes universales."
    },
    "Soberania_Espiritual": {
        "palabras_clave": ["soberanía", "espiritual", "mando", "poder", "espíritu", "materia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5629: PARTE TERCERA: El derecho de los esp ritos: Alta leccin"],
        "contexto_real": "El predominio absoluto de la voluntad y sabiduría del espíritu sobre cualquier ley o forma material."
    },
    "Alta_Leccion": {
        "palabras_clave": ["alta", "lección", "enseñanza", "profunda", "sabiduría", "superior"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#5629: PARTE TERCERA: El derecho de los esp ritos: Alta leccin"],
        "contexto_real": "Conocimiento de alto nivel vibratorio entregado por los maestros para la regeneración de la humanidad."
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

print("Diccionario Tanda 12 (Asiento) actualizado.")
