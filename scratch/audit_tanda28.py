import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '5494: Julio 28 de 1911 - Posesión M. P.',
    '5512: Julio 31 de 1911 - Posesión M. P.',
    '5584: Agosto 1 de 1911 - Posesión M. P.',
    '5631: Agosto 4 de 1911 - Posesión P. Portillo',
    '5641: Agosto 6 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
