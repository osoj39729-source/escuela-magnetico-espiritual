import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Ley_de_Progreso": {
        "palabras_clave": ["ley", "progreso", "evolución", "ascenso", "continuo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#2988: resistira a su mandato?"],
        "contexto_real": "La ley universal e inmutable que obliga a todos los seres y mundos a una evolución constante hacia grados superiores de sabiduría y amor."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 8 (Reparación) actualizado.")
