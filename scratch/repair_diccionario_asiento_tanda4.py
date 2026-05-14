import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Fundamentos": {
        "palabras_clave": ["fundamentos", "base", "asiento", "principios", "doctrina"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#584: LIBRO PRIMERO  PARTE PRIMERA"],
        "contexto_real": "Los pilares inamovibles de razón y justicia sobre los cuales se asienta el edificio del Espiritismo Luz y Verdad."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 4 (Reparación) actualizado.")
