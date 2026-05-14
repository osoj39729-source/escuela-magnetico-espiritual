import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '5126: Julio 18 de 1911 - Posesión M. P.',
    '5152: Julio 21 de 1911 - Posesión M. Portillo',
    '5213: Julio 23 de 1911 - Posesión M. P.',
    '5304: Julio 25 de 1911 - Posesión M. P.',
    '5337: Julio 28 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
