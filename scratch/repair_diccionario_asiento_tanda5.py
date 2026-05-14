import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Solidaridad_Cosmica": {
        "palabras_clave": ["solidaridad", "cósmica", "universo", "mundos", "ayuda", "unión"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#1187: CAPTULO V: Todo el universo es el espiritismo y su maestro, Elo"],
        "contexto_real": "La ley de interdependencia y apoyo mutuo que vincula a todas las humanidades del universo en un solo cuerpo espiritual."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 5 (Reparación) actualizado.")
