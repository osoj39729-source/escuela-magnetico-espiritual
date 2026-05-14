import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Eternidad_de_la_Materia": {
        "palabras_clave": ["lavoisier", "indestructible", "sustancia", "transformación", "cosmos"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#6199: 4. Exposicin de C. Montemayor", "primer-rayo-de-luz_esencia.json#7454: Mis Observaciones"],
        "contexto_real": "Axioma científico que establece que la sustancia universal no puede ser creada ni destruida, solo transformada."
    },
    "Materia_Condensada": {
        "palabras_clave": ["espíritu", "vibración", "sustancia única", "estado", "fluido"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#6441: Mis observaciones"],
        "contexto_real": "Definición doctrinal de la materia como espíritu en un estado de baja vibración, manteniendo la unidad de la sustancia."
    },
    "Inexistencia_del_Dios_Religioso": {
        "palabras_clave": ["creacionismo", "fantasma", "dogma", "indestructibilidad", "átomo"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#7454: Mis Observaciones"],
        "contexto_real": "Conclusión racional que anula la idea de un Dios creador externo ante la evidencia de la eternidad y autogestión de la sustancia."
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

print("Diccionario sináptico Rayo Tanda 9 actualizado.")
