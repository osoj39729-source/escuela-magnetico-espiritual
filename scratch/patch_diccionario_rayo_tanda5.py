import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Misterio_vs_Luz": {
        "palabras_clave": ["ignorancia", "razón", "ley", "ocultamiento", "claridad"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#2241: Mis observaciones"],
        "contexto_real": "Oposición entre el dogma que oculta la verdad bajo el término 'misterio' y el racionalismo que ilumina las leyes naturales."
    },
    "Evolucionismo_Racional": {
        "palabras_clave": ["darwin", "progreso", "ley", "biología", "espíritu"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#2654: Exposicin 2. De C. Montemayor: CONTROVERSIA CON LOS CATLICOS Con Moiss o con Darwin?"],
        "contexto_real": "Postura que acepta la evolución biológica como parte de un plan inteligente y progresivo, superando el azar materialista."
    },
    "Dios_Fantasma": {
        "palabras_clave": ["ídolo", "castigo", "venganza", "dogma", "antropomorfismo"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#2997: Mis Observaciones"],
        "contexto_real": "Imagen deformada y terrorífica de la divinidad creada por las religiones para someter a la humanidad mediante el miedo."
    },
    "Milagro_vs_Ley": {
        "palabras_clave": ["sobrenatural", "naturaleza", "inmutable", "engaño", "razón"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#3542: 2. Rplica del Sr. Podest.: Catlico"],
        "contexto_real": "Conflicto entre la creencia en la suspensión mágica de las leyes naturales y la certeza de su inmutabilidad científica."
    },
    "Sarcasmo_Dogmatico": {
        "palabras_clave": ["chanza", "mofa", "impotencia", "burla", "fanatismo"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#3567: Introduccin en chanza"],
        "contexto_real": "Estrategia eclesiástica de descalificación mediante la burla cuando no se poseen argumentos lógicos para sostener el dogma."
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

print("Diccionario sináptico Rayo Tanda 5 actualizado.")
