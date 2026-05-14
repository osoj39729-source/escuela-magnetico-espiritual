import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Prohibicion_Pedagogica_de_Moises": {
        "palabras_clave": ["moisés", "prohibición", "pedagogía", "pueblo", "superstición"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#2018: PRRAFO II: POR QU MOISS PROHIBI EL USO DEL ESPIRITISMO"],
        "contexto_real": "La suspensión temporal de una práctica espiritual avanzada hasta que el pueblo alcance el grado de comprensión necesario para no degenerar en superstición."
    },
    "Codificacion_en_el_Levitico": {
        "palabras_clave": ["levítico", "código", "moisés", "ley", "condición"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#2547: PRRAFO III: CMO MOISS PROHIBI EL ESPIRITISMO..."],
        "contexto_real": "El conjunto de leyes mosaicas que, bajo apariencia de prohibiciones religiosas, contienen las condiciones técnicas para el correcto uso del espiritismo."
    },
    "Siete_Facultades_del_Espiritu": {
        "palabras_clave": ["facultades", "voluntad", "inteligencia", "amor", "conciencia", "memoria"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#2693: CAPTULO SPTIMO: CUANDO EL HOMBRE PUEDE COMPRENDER EL ESPIRITISMO"],
        "contexto_real": "Las siete capacidades superiores del espíritu humano que, cuando se desarrollan plenamente, permiten al hombre comprender y practicar el espiritismo racional."
    },
    "Espiritismo_como_Vida": {
        "palabras_clave": ["vida", "imposible", "ley", "ineludible", "naturaleza"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#2992: CAPITULO OCTAVO: CMO ES IMPOSIBLE SALIRSE DEL ESPIRITISMO"],
        "contexto_real": "El axioma de que el Espiritismo no es una opción filosófica sino la naturaleza misma de la existencia: todo ser que vive, respira bajo la ley espiritual."
    },
    "Eter_Pantogeno": {
        "palabras_clave": ["éter", "electricidad", "pantógeno", "materia prima", "creación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#3141: CAPTULO NOVENO: LA CREACIN EXISTE POR EL ESPIRITISMO"],
        "contexto_real": "La sustancia primordial e impalpable (electricidad en su forma más pura) que el Creador pone a disposición del espíritu como materia prima infinita para construir mundos."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 5 actualizado.")
