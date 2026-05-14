import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
esencia_path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json'

with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

dic_conceptos = set(dic['CONCEPTOS'].keys())

# Recolectar todas las brechas con su nodo fuente
brechas = {}
for k_e, nodo in esencia.items():
    for s in nodo.get('NodosSinapticos', []):
        if s not in dic_conceptos and s not in brechas:
            brechas[s] = k_e

# Inyectar cada brecha con definicion minima doctrinal
for concepto, fuente in brechas.items():
    # Generar palabras clave desde el nombre del concepto
    palabras = [p.lower() for p in concepto.replace('_', ' ').split()]
    dic['CONCEPTOS'][concepto] = {
        "palabras_clave": palabras,
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#" + fuente[:60]],
        "contexto_real": "Concepto doctrinal de 'Profilaxis de la Vida' de Joaquín Trincado. Requiere contextualización en re-destilación FAR-5."
    }

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Brechas inyectadas: " + str(len(brechas)))
print("Total conceptos diccionario: " + str(len(dic['CONCEPTOS'])))
