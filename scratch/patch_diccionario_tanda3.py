import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Boato_Eclesiastico": {
        "palabras_clave": ["lujo", "ostentación", "riqueza", "templos", "púrpura"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2923: Párrafo I: EL BOATO PROVOCADOR"],
        "contexto_real": "Exhibición de opulencia material por parte de las jerarquías religiosas, financiada con el sacrificio de los pueblos ignorantes."
    },
    "Matematica_Espiritual": {
        "palabras_clave": ["lógica", "geometría", "unidad", "razón", "ley exacta"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3027: Párrafo II: VERDADES MATEMÁTICAS"],
        "contexto_real": "Ciencia exacta de las leyes del espíritu que desmantela los dogmas mediante la aplicación de la lógica universal de Eloí."
    },
    "Antropofagia_Simbolica": {
        "palabras_clave": ["eucaristía", "hostia", "comer dios", "transubstanciación", "crimen"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3108: Párrafo III: EL CRIMEN DEL SACRAMENTO DE LA EUCARISTIA"],
        "contexto_real": "Práctica ritual que simula la ingesta de la carne y sangre de la divinidad, considerada por el autor como un insulto a la razón."
    },
    "Pio_IX_Antagonista": {
        "palabras_clave": ["infalibilidad", "papa", "1870", "sangre", "soberbia"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3146: Párrafo IV: PIO IX INFALIBLEMENTE FALIBLE"],
        "contexto_real": "Figura histórica que decretó la infalibilidad papal, personificando el antagonismo final contra la soberanía de Eloí."
    },
    "Condena_Final_Catolicismo": {
        "palabras_clave": ["olvido", "destrucción", "fin", "libertad", "sentencia"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3194: Párrafo V: TRISTE FIN DE LA RELIGIÓN CATÓLICA"],
        "contexto_real": "Decreto moral del autor cerrando el ciclo de dominio religioso para dar paso a la era de la libertad y el espiritismo racional."
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

print("Diccionario sináptico Tanda 3 actualizado.")
