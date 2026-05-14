import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Filosofia_Austera_Racional": {
        "palabras_clave": ["espiritismo", "luz", "verdad", "nueva era", "trincado"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#19: <<FILOSOFA AUSTERA RACIONAL>>: POR ____________ BUENOS AIRES, ENERO DE 1922"],
        "contexto_real": "Sistema de pensamiento riguroso que estudia las leyes del universo sin concesiones al dogma ni al sentimentalismo religioso."
    },
    "Espiritismo_Austero": {
        "palabras_clave": ["principios", "verdad", "dificultad", "misión", "ley"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#42: PROLOGO: Engorrosa es mi situacin."],
        "contexto_real": "El estudio científico y filosófico de la existencia eterna y la reencarnación, despojado de supercherías y ritos."
    },
    "Solidaridad_Universal": {
        "palabras_clave": ["universo", "solidarizado", "conexión", "afinidad", "fraternidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#50: El Universo solidarizado."],
        "contexto_real": "Ley cósmica que establece la mutua dependencia y responsabilidad entre todos los espíritus y mundos del universo."
    },
    "Comunismo_Espiritual": {
        "palabras_clave": ["mundo", "comunizado", "fronteras", "equidad", "justicia social"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#52: El mundo todo Comunizado."],
        "contexto_real": "Sistema social y económico postulado por el Espiritismo Racional, basado en la fraternidad, donde la tierra es patria única y la propiedad es usufructo universal."
    },
    "Monismo_Fulico": {
        "palabras_clave": ["ley", "sustancia", "unidad", "principio", "creador"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#54: La Ley es una y la Substancia una."],
        "contexto_real": "La comprensión ontológica de que todas las cosas, materiales y espirituales, emanan de la misma materia prima universal (Éter/Élite) y están regidas por una sola Causa."
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

print("Diccionario sináptico Espiritismo Estudiado Tanda 1 actualizado.")
