import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '8234: Octubre 17 de 1911 - Posesión M. P.',
    '8277: Octubre 20 de 1911 - POSESIÓN PORTILLO',
    '8345: Octubre 22 - Portillo',
    '8572: Octubre 29 de 1911 (noche), hora 21, sobremesa - Posesión M. P.',
    '8702: Octubre 23 de 1911 - Posesión Portillo'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
