import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Inteligencia_Universal": {
        "palabras_clave": ["eloí", "causa", "orden", "evolución", "ley"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#8498: Mis Observaciones"],
        "contexto_real": "Principio inteligente que rige el movimiento de la materia y la evolución del espíritu, distinto al Dios personal de las religiones."
    },
    "Ateísmo_Materialista": {
        "palabras_clave": ["materia", "azar", "negación", "montemayor", "mecanismo"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#8333: INEXISTENCIA DE DIOS"],
        "contexto_real": "Postura filosófica que niega la existencia de cualquier principio inteligente espiritual, reduciendo todo a la materia."
    },
    "Falacia_de_Autoridad_Religiosa": {
        "palabras_clave": ["sabios", "prestigio", "tradición", "dogma", "engaño"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#10019: EXISTENCIA DE DIOS"],
        "contexto_real": "Uso de nombres de grandes personajes del pasado para validar dogmas que no pueden sostenerse ante la razón científica actual."
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

print("Diccionario sináptico Rayo Tanda 10 actualizado.")
