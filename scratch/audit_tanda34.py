import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '8786: Octubre 28 de 1911 - Posesión Portillo',
    '8933: Octubre 28 de 1911 (hora 21) - Posesión M. P.',
    '9016: Octubre 31 de 1911 - Posesión M. P.',
    '9102: Noviembre 3 de 1911 - Posesión Portillo',
    '9132: Noviembre 5 de 1911 - Posesión Portillo'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
