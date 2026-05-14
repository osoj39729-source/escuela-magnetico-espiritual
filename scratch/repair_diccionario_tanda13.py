import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Estudio_Tecnico": {
        "palabras_clave": ["estudio", "técnico", "fenómeno", "espiritismo", "método"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9682: CUARTA PARTE: FENMENOS ESPIRITUALES:"],
        "contexto_real": "El análisis pormenorizado de las causas y efectos de las manifestaciones espirituales, alejándose de la mera observación curiosa para establecer leyes científicas."
    },
    "Percepcion_Extrasensorial": {
        "palabras_clave": ["percepción", "extrasensorial", "videncia", "sentido", "espíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#9688: CAPITULO PRIMERO: FENMENOS DE VIDENCIA"],
        "contexto_real": "La capacidad del espíritu para captar estímulos y realidades que los sentidos físicos son incapaces de registrar."
    },
    "Afinidad_Fluidica": {
        "palabras_clave": ["afinidad", "fluídica", "vibración", "médium", "espíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10077: CAPITULO SEGUNDO: FENMENO DE LA POSESIN PARLANTE"],
        "contexto_real": "La sintonía o correspondencia vibratoria entre el periespíritu del médium y el del espíritu comunicante, indispensable para una manifestación clara."
    },
    "Arte_Espiritual": {
        "palabras_clave": ["arte", "espiritual", "pintura", "música", "estética", "espíritu"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#10278: CAPTULO TERCERO: FENMENOS DE LA ESCRITURA, PINTURA Y DIBUJO"],
        "contexto_real": "La expresión de la belleza y la armonía del mundo espiritual a través de facultades medianímicas artísticas."
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

print("Diccionario Tanda 13 (Reparación) actualizado.")
