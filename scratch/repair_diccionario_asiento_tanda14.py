import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Consuelo_Espiritual": {
        "palabras_clave": ["consuelo", "espiritual", "aliento", "paz", "amor", "guía"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6547: Acotaciones:"],
        "contexto_real": "La acción de los espíritus de luz de enviar vibraciones de paz y fortaleza a los encarnados en momentos de prueba."
    },
    "Solidaridad_Planetaria": {
        "palabras_clave": ["solidaridad", "planetaria", "unión", "mundos", "tierra", "cosmos"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#6547: Acotaciones:"],
        "contexto_real": "El reconocimiento de que la Tierra forma parte de una familia de mundos que se apoyan mutuamente en su evolución."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 14 (Reparación) actualizado.")
