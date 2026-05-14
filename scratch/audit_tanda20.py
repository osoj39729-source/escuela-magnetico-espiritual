import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '3319: Mayo 16 de 1911 - Posesión M. P.',
    '3401: Mayo 19 de 1911 - Posesión M. P.',
    '3436: Mayo 21 de 1911 - Posesión M. P.',
    '3462: Mayo 23 de 1911 - Posesión M. P.',
    '3538: Mayo 30 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
