import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Fatalidad_Eclesiastica": {
        "palabras_clave": ["justicia", "causa y efecto", "colapso", "inevitable", "castigo"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#5440: Párrafo X: LA FATALIDAD LOS PERSIGUE"],
        "contexto_real": "Ley de justicia que se manifiesta como destino adverso e ineludible para las instituciones que han prevaricado contra la ley de amor."
    },
    "Mentira_Piadosa_Error": {
        "palabras_clave": ["engaño", "hipocresía", "manipulación", "falsedad", "vaticano"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#5577: Párrafo XI: UNA MENTIRA PIADOSA LOS PIERDEATODOS"],
        "contexto_real": "Justificación religiosa de la mentira para mantener el control de los fieles, considerada por el autor como la perdición de las religiones."
    },
    "Pusilanimidad_Real": {
        "palabras_clave": ["monarcas", "cobardía", "sometimiento", "dogma", "esclavitud"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#5888: Párrafo XIII: PUSILANIMIDAD DE LOS REYES ESCLAVOS DE LA RELIGION"],
        "contexto_real": "Falta de valor moral de los gobernantes civiles que se arrodillan ante la jerarquía religiosa, traicionando la libertad de sus pueblos."
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

print("Diccionario sináptico Tanda 6 actualizado.")
