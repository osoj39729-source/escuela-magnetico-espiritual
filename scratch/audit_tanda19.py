import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '3183: Mayo 2 de 1911 - Posesión M. P.',
    '3211: Mayo 7 de 1911 - Posesión M.P.',
    '3228: Mayo 9 de 1911 - Posesión M. P.',
    '3241: Mayo 12 de 1911 - Posesión Pedro Portillo',
    '3278: Mayo 14 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
