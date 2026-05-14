import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Apotegmas_Doctrinales": {
        "palabras_clave": ["apotegmas", "sentencias", "principios", "máximas", "síntesis"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#36: APOTEGMAS ADOPTADOS"],
        "contexto_real": "Sentencias breves y categóricas que expresan verdades fundamentales de la doctrina espírita."
    },
    "Sintesis_Pedagogica": {
        "palabras_clave": ["síntesis", "pedagógica", "estudio", "enseñanza", "simplicidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#36: APOTEGMAS ADOPTADOS"],
        "contexto_real": "El método de la Escuela de resumir conocimientos complejos en formas simples y directas para facilitar la evolución del espíritu."
    },
    "Ley_de_Obras": {
        "palabras_clave": ["ley", "obras", "fruto", "justicia", "hechos"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#38: MXIMA: Por el Fruto conocers el rbol."],
        "contexto_real": "El principio de justicia que establece que el valor de un ser se determina exclusivamente por sus acciones y producciones."
    },
    "Validacion_por_Frutos": {
        "palabras_clave": ["validación", "frutos", "árbol", "resultado", "verdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#38: MXIMA: Por el Fruto conocers el rbol."],
        "contexto_real": "Criterio racional para juzgar la calidad de una doctrina o individuo basándose en sus efectos prácticos y morales."
    },
    "Consuelo_en_la_Verdad": {
        "palabras_clave": ["consuelo", "verdad", "paz", "justicia", "realidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#40: Consejo: Busca el consuelo en la verdad."],
        "contexto_real": "El estado de serenidad que deviene de comprender las leyes de justicia y progreso, en oposición al consuelo ficticio de los dogmas."
    },
    "Vida_como_Luz": {
        "palabras_clave": ["vida", "luz", "inteligencia", "emanación", "creador"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#44: AXIOMA: En l estaba la vida, y la vida es la luz de los hombres."],
        "contexto_real": "Concepto que define a la inteligencia y la conciencia como la manifestación luminosa de la energía vital del Creador."
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

print("Diccionario Tanda 2 (Asiento) actualizado.")
