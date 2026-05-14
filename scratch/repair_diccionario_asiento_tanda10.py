import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Religión_Universal": {
        "palabras_clave": ["religión", "universal", "espiritismo", "unión", "creador", "ley"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#4298: CAPITULO III: No se puede ir ms all del espiritismo"],
        "contexto_real": "El concepto de que el Espiritismo es la única forma de relación directa y racional entre todos los seres del universo y el Creador."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 10 (Reparación) actualizado.")
