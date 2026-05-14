import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Fueros_Clericales": {
        "palabras_clave": ["inmunidad", "estado", "tribunal", "derecho civil", "privilegio"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11695: PARRAFO VII: Sea excomulgado el que diga:"],
        "contexto_real": "Privilegios legales exigidos por el Vaticano para que sus miembros no sean juzgados por tribunales civiles ordinarios."
    },
    "Moral_Dogmatica": {
        "palabras_clave": ["ética laica", "sanción divina", "filosofía", "condena", "imposición"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11715: PARRAFO VIII: Errores concernientes a la moral natural y cristiana..."],
        "contexto_real": "Sistema donde la ética no se basa en la razón ni en la ley natural, sino en el monopolio de la aprobación eclesiástica."
    },
    "Monopolio_Matrimonial_Catolico": {
        "palabras_clave": ["jurisdicción civil", "matrimonio", "sacramento", "esponsales", "estado"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11739: PARRAFO IX: Errores concernientes al matrimonio cristiano..."],
        "contexto_real": "Control dogmático sobre las uniones conyugales para mantener el poder civil y recaudatorio sobre las familias, rechazando el matrimonio civil."
    },
    "Defensa_del_Poder_Temporal": {
        "palabras_clave": ["principado papal", "abrogación", "santa sede", "política", "terrenal"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11764: PARRAFO X: Errores sobre el principado civil del Pontífice Romano..."],
        "contexto_real": "La postura oficial del papado de defender su condición de Jefe de Estado terrenal como un dogma necesario para la existencia de la Iglesia."
    },
    "Condena_del_Progreso": {
        "palabras_clave": ["civilización moderna", "liberalismo", "reconciliación", "retroceso", "oscurantismo"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11776: PARRAFO XI: Errores que se refieren al liberalismo moderno..."],
        "contexto_real": "Declaración final del Syllabus que establece la incompatibilidad absoluta entre la Iglesia Católica y la evolución científica, social y política."
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

print("Diccionario sináptico Rayo Tanda 13 actualizado.")
