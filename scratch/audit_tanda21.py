import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '3618: Mayo 31 de 1911 - Posesión M. P.',
    '3637: Junio 1 de 1911 - Posesión M. P.',
    '3665: Junio 2 de 1911 - Posesión M. P.',
    '3691: Junio 2 de 1911 - Posesión M. P.',
    '3743: Junio 3 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
