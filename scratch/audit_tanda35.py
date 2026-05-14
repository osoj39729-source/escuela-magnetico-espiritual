import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '9290: Noviembre 5 de 1911, noche - Posesión M. P.',
    '9406: Noviembre 7 de 1911 - Posesión M. P.',
    '9483: Noviembre 10 de 1911 - Posesión Portillo',
    '9546: Noviembre 12 de 1911 - Posesión Portillo',
    '9595: Noviembre 12 de 1911 - Posesión Portillo'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
