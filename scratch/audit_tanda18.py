import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '3005: Abril 18 de 1911 - Posesión M. P.',
    '3027: Abril 25 de 1911 - Posesión M. P.',
    '3043: Abril 28 de 1911 - Escrita, Trincado',
    '3123: Mayo 1 de 1911 - Posesión M. P.',
    '3162: Mayo 2 de 1911 - Escrita, Trincado'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
