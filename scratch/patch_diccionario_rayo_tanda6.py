import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Casta_Teologica": {
        "palabras_clave": ["clero", "dogma", "repetición", "jerarquía", "esclavitud"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#3710: ESTA NO ES OPININ DE NINGUN TEOLOGO."],
        "contexto_real": "Sistema de hombres que anulan su propia razón para servir como repetidores de las consignas de una estructura jerárquica dogmática."
    },
    "Dialectica_Jesuita": {
        "palabras_clave": ["sofismas", "ambigüedad", "confusión", "jesuita", "engaño"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#3837: exposicin que estoy analizando."],
        "contexto_real": "Método de razonamiento que utiliza la sutileza verbal para evadir la verdad y mantener el control sobre la conciencia ajena."
    },
    "Hipocresia_Religiosa": {
        "palabras_clave": ["farsa", "misterio", "seriedad", "sepulcro", "clero"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#3940: CONCLUSIN"],
        "contexto_real": "Doble moral de las instituciones religiosas que exigen virtudes a la humanidad mientras ellas mismas viven del engaño y la opresión."
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

print("Diccionario sináptico Rayo Tanda 6 actualizado.")
