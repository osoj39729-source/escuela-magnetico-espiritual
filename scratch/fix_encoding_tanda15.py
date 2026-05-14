import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

# Sincronizar nombres de conceptos (con y sin acento para evitar brechas por encoding)
if "Error_Teologico" in dic["CONCEPTOS"]:
    dic["CONCEPTOS"]["Error_Teológico"] = dic["CONCEPTOS"].pop("Error_Teologico")

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 15 (Corrección Encoding) actualizado.")
