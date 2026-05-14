import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Joaquin_Trincado": {
        "palabras_clave": ["Joaquín", "Trincado", "Maestro", "Fundador", "EMECU"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8: ESCUELA MAGN%TICO - ESPIRITUAL DE LA COMUNA UNIVERSAL: ESPIRITISMO EN SU ASIENTO"],
        "contexto_real": "El Maestro Fundador de la Escuela Magnético-Espiritual de la Comuna Universal y autor del cuerpo de doctrinas del Espiritismo Luz y Verdad."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 1 (Reparación) actualizado.")
