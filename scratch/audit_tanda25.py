import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '4435: Junio 23 de 1911 - Posesión M. P.',
    '4453: Junio 25 de 1911 - Posesión M. P.',
    '4531: Junio 27 de 1911 - Escrita, Trincado',
    '4643: Junio 29 de 1911 - Posesión M. P.',
    '4730: Julio 2 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
