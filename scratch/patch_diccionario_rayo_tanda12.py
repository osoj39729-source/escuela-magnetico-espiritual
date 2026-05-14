import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Racionalismo_Condenado": {
        "palabras_clave": ["razón", "filosofía", "excomunión", "lógica", "pensamiento libre"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11583: PARRAFO II: Racionalismo moderno..."],
        "contexto_real": "El ejercicio del pensamiento lógico y crítico que la Iglesia prohíbe mediante el Syllabus para proteger sus doctrinas infundadas."
    },
    "Monopolio_de_Salvacion": {
        "palabras_clave": ["intolerancia", "libertad de culto", "salvación", "exclusividad", "vaticano"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11605: PARRAFO III: Indiferentismo. Tolerancia..."],
        "contexto_real": "Pretensión dogmática de la Iglesia Católica de ser el único administrador del progreso espiritual, condenando cualquier otra vía."
    },
    "Pestes_Modernas_Dogmaticas": {
        "palabras_clave": ["socialismo", "comunismo", "sociedades bíblicas", "peste", "pío ix"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11618: PARRAFO IV: Sociedades clérigo-liberales..."],
        "contexto_real": "Término despectivo usado en el Syllabus para referirse a movimientos sociales o de pensamiento que promueven igualdad y libertad."
    },
    "Poder_Temporal_Absoluto": {
        "palabras_clave": ["fuerza", "poder temporal", "estado", "inquisición", "tiranía"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11630: PARRAFO V: Errores relativos a la iglesia y a sus derechos..."],
        "contexto_real": "Doctrina eclesiástica que exige la sumisión de todos los gobiernos civiles a la voluntad y fuerza armada del Vaticano."
    },
    "Monopolio_Educativo_Clerical": {
        "palabras_clave": ["educación", "enseñanza", "estado laico", "escuelas", "control"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11667: PARRAFO VI: Errores relativos a la sociedad civil..."],
        "contexto_real": "Exigencia de la Iglesia de ser la única administradora de la instrucción pública para perpetuar la ignorancia científica."
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

print("Diccionario sináptico Rayo Tanda 12 actualizado.")
