import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Muerte_Ficcion": {
        "palabras_clave": ["muerte", "ficción", "transición", "vida", "eterna", "cambio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7964: curso eterno y llega a hacer el axioma."],
        "contexto_real": "Axioma que sostiene que la muerte no existe como desaparición, sino como un simple cambio de estado vibratorio del espíritu."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

# Reparar esencia para quitar el acento de Instrucción_Comunal
esencia_path = 'F:/trincado/public/data/contents/espiritismo-en-su-asiento_esencia.json'
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

clave = "7964: curso eterno y llega a hacer el axioma."
if clave in esencia:
    esencia[clave]["NodosSinapticos"] = ["Instruccion_Comunal", "Muerte_Ficcion", "Seguridad_Social_Comuna"]

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(esencia, f, indent=2, ensure_ascii=False)

print("Diccionario y Esencia Tanda 15 (Reparación Final) actualizados.")
