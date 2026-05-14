import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Energia_Vital": {
        "palabras_clave": ["energía", "vital", "vida", "magnetismo", "fluido"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#34: Todo es Magnetismo Espiritual."],
        "contexto_real": "La manifestación dinámica del magnetismo espiritual que anima la materia orgánica y sostiene la vida biológica."
    },
    "Lazo_Fluidico": {
        "palabras_clave": ["lazo", "fluídico", "cordón", "unión", "espíritu", "materia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#34: Todo es Magnetismo Espiritual."],
        "contexto_real": "El vínculo de naturaleza magnética que une el espíritu al cuerpo físico durante la encarnación."
    },
    "Verdades_Eternas": {
        "palabras_clave": ["verdades", "eternas", "ley", "inmutable", "absoluto"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#36: APOTEGMAS ADOPTADOS"],
        "contexto_real": "Principios universales que no cambian con el tiempo ni el espacio, regidos por la ley del Creador."
    },
    "Justicia_de_Hechos": {
        "palabras_clave": ["justicia", "hechos", "obras", "realidad", "mérito"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#38: MXIMA: Por el Fruto conocers el rbol."],
        "contexto_real": "La forma de justicia que solo reconoce las acciones tangibles y sus consecuencias, descartando las meras palabras."
    },
    "Inteligencia_Divina": {
        "palabras_clave": ["inteligencia", "divina", "razón", "conciencia", "luz"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#44: AXIOMA: En l estaba la vida, y la vida es la luz de los hombres."],
        "contexto_real": "La capacidad de comprender, razonar y crear, que es una chispa de la sabiduría del Creador presente en cada espíritu."
    },
    "Emanacion_del_Creador": {
        "palabras_clave": ["emanación", "creador", "eloi", "origen", "fuente"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#44: AXIOMA: En l estaba la vida, y la vida es la luz de los hombres."],
        "contexto_real": "El proceso por el cual todo lo existente surge de la esencia única de Eloí, manteniendo su naturaleza espiritual."
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

print("Diccionario Tanda 2 (Reparación) actualizado.")
