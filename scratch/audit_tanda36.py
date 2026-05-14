import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '9719: Noviembre 12 de 1911 (hora 20) - Posesión M. P.',
    '9757: Noviembre 14 de 1911 - Posesión M. P.',
    '9796: Noviembre 16 de 1911 - Posesión Portillo',
    '9868: Noviembre 19 de 1911 - Posesión Portillo',
    '9997: Noviembre 19 de 1911 (hora 21) - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
