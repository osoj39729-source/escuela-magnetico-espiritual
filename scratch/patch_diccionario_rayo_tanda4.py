import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Sinceridad_Misionera": {
        "palabras_clave": ["verdad", "crudeza", "deber", "rectitud", "transparencia"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#238: UNICAMENTE."],
        "contexto_real": "Obligación del espíritu de expresar la verdad sin adornos ni ocultamientos, aun cuando sea amarga para los oyentes."
    },
    "Evasion_Dogmatica": {
        "palabras_clave": ["sofismas", "huida", "misterio", "falacia", "catolicismo"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#615: Mis Observaciones"],
        "contexto_real": "Táctica eclesiástica para evitar el debate racional mediante el uso de términos ambiguos o la negación de la prueba científica."
    },
    "Prueba_Cientifica_vs_Fe": {
        "palabras_clave": ["ciencia", "fe", "dogma", "demostración", "evidencia"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#615: Mis Observaciones"],
        "contexto_real": "Conflicto fundamental donde el racionalismo exige evidencias naturales mientras la religión impone creencias sin fundamento demostrable."
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

print("Diccionario sináptico Rayo Tanda 4 actualizado.")
