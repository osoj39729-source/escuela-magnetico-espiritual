import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Inspiracion_Cientifica": {
        "palabras_clave": ["inspiración", "científica", "descubrimiento", "espíritu", "invención"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10482: CAPTULO QUINTO: FENMENO DE AUDICIN, INTUICIN E INSPIRACIN"],
        "contexto_real": "La transmisión de conocimientos técnicos o científicos avanzados por parte de espíritus especialistas a mentes encarnadas preparadas para recibirlos."
    },
    "Quimica_del_Eter": {
        "palabras_clave": ["química", "éter", "materia", "átomo", "desmaterialización"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10735: CAPTULO SPTIMO: EL FENMENO DE APORTE Y MATERIALIZACIN"],
        "contexto_real": "La ciencia espiritual que estudia la manipulación de los átomos en su estado fluido o etéreo para realizar aportes y materializaciones."
    },
    "Progreso_Solidario": {
        "palabras_clave": ["progreso", "solidario", "humanidad", "comuna", "fraternidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#11256: CAPTULO NOVENO: LA PARTICIPACIN DE LOS ESPRITUS EN LOS HECHOS DE LOS HOMBRES"],
        "contexto_real": "El avance conjunto de encarnados y desencarnados hacia la Comuna Universal, reconociendo que todos somos parte de la misma familia espiritual."
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

print("Diccionario Tanda 14 (Reparación) actualizado.")
