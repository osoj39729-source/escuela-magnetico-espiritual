import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

reparaciones = {
    "Puente_Espiritual": {
        "palabras_clave": ["puente", "espiritual", "conexión", "mundo", "médium"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#7652: CAPITULO SEGUNDO: QU SON LOS MDIUMS"],
        "contexto_real": "La metáfora que describe al médium como la estructura orgánica y fluídica que permite el cruce constante de información entre el plano visible y el invisible."
    },
    "Falso_Curanderismo": {
        "palabras_clave": ["falso", "curanderismo", "engaño", "lucro", "místico"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8254: CAPITULO CUARTO: LOS MDIUMS MDICOS"],
        "contexto_real": "La práctica denigrante de utilizar nombres del Espiritismo para realizar brujerías, limpias y adivinanzas con fines de lucro."
    },
    "Medium_Vidente": {
        "palabras_clave": ["médium", "vidente", "visión", "exploración", "centinela"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#8553: CAPITULO QUINTO: LOS MDIUMS VIDENTES"],
        "contexto_real": "El individuo facultado para observar directamente las realidades del mundo espiritual, actuando como centinela y explorador de mundos avanzados."
    }
}

for k, v in reparaciones.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v
    else:
        for node in v["nodos_sinapticos"]:
            if node not in dic["CONCEPTOS"][k]["nodos_sinapticos"]:
                dic["CONCEPTOS"][k]["nodos_sinapticos"].append(node)

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Brechas de Tanda 11 reparadas exitosamente.")
