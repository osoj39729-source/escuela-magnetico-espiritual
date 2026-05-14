import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Sentencia_Racional": {
        "palabras_clave": ["fallo", "juez", "syllabus", "condena", "dogma"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11795: SENTENCIA"],
        "contexto_real": "Juicio inapelable emitido por la Escuela Magnética que condena la falsedad dogmática basándose en la evidencia de los hechos y leyes naturales."
    },
    "Unidad_Universal": {
        "palabras_clave": ["creador", "humanidad", "sustancia", "doce principios", "escuela"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11965: DUODECIMO"],
        "contexto_real": "Axioma filosófico que reconoce una sola causa inteligente (Eloí), una sola sustancia (Materia-Espíritu) y una sola familia humana."
    },
    "Vigencia_Doctrinal": {
        "palabras_clave": ["trincado", "confirmación", "historia", "fanatismo", "tiempo"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#12060: JOAQUIN TRINCADO"],
        "contexto_real": "La capacidad de las enseñanzas de la Escuela para mantenerse precisas y verdaderas a lo largo del tiempo, confirmadas por los acontecimientos históricos."
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

print("Diccionario sináptico Rayo Tanda 14 actualizado.")
