import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Obediencia_Ciega": {
        "palabras_clave": ["esclavitud", "dogma", "teólogo", "casta", "sumisión"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#5758: Opiniones de teálogo?"],
        "contexto_real": "Estado de anulación del libre albedrío intelectual exigido por las religiones a sus miembros para mantener la unidad del dogma."
    },
    "Corrupción_Clerical": {
        "palabras_clave": ["robo", "saqueo", "viuda", "herencia", "dinero"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#5839: Mis observaciones"],
        "contexto_real": "Uso del poder religioso para despojar a los débiles de sus bienes materiales en beneficio de la institución."
    },
    "Táctica_Jesuita": {
        "palabras_clave": ["imitación", "confusión", "desvío", "copia", "sombra"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#6185: Conclusión"],
        "contexto_real": "Estrategia de mimetismo verbal y conceptual utilizada por el clero para neutralizar mensajes racionalistas peligrosos."
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

print("Diccionario sináptico Rayo Tanda 8 actualizado.")
