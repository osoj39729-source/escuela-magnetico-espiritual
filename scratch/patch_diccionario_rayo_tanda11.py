import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Dominio_Temporal_Religioso": {
        "palabras_clave": ["poder", "política", "ambición", "terrenal", "clero"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#10334: Mis Observaciones"],
        "contexto_real": "Aspiración del clero a gobernar los asuntos políticos y materiales de la humanidad utilizando el pretexto de la salvación espiritual."
    },
    "Intransigencia_Papal": {
        "palabras_clave": ["vaticano", "libertad", "derecho divino", "ley civil", "soberanía"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#10570: CONTESTACION PONTIFICIA A UN DISCURSO DEL DOCTOR JUAN GIURIATI..."],
        "contexto_real": "Postura absolutista del papado que rechaza la libertad de conciencia y pretende imponer su autoridad por encima de las leyes civiles."
    },
    "Syllabus_Errorum": {
        "palabras_clave": ["pío ix", "condena", "modernidad", "progreso", "racionalismo"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#11552: EL SYLLABUS DE PIO IX", "primer-rayo-de-luz_esencia.json#11564: PARRAFO I: Panteismo, naturalismo y racionalismo absoluto..."],
        "contexto_real": "Documento eclesiástico que condena oficialmente la ciencia, el racionalismo y la libertad de pensamiento como errores contra la fe."
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

print("Diccionario sináptico Rayo Tanda 11 actualizado.")
