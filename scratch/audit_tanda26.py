import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '4777: Julio 3 de 1911 - Posesión M. P.',
    '4789: Julio 9 de 1911 - Posesión M. P.',
    '4939: Julio 14 de 1911 - Escrita, Trincado',
    '4982: Julio 15 de 1911 - Posesión M. Portillo',
    '5061: Julio 16 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
