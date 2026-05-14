import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Justicia_del_Pensamiento": {
        "palabras_clave": ["justicia", "pensamiento", "intenciones", "deseos", "ley"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4546: Acotaciones:"],
        "contexto_real": "El principio de que la ley de responsabilidad abarca no solo las obras físicas, sino también las intenciones y deseos del espíritu."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 11 (Reparación) actualizado.")
