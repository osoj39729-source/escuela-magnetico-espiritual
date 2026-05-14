import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '2329: Febrero 13 de 1911 - Posesión de M. P.',
    '2342: Febrero 15 de 1911 - Posesión de M. P.',
    '2373: Febrero 17 de 1911 - Posesión de M. P.',
    '2399: Febrero 19 de 1911 - Posesión de M. P.',
    '2451: Febrero 21 de 1911 - Escrita'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
