import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '3986: Junio 11 de 1911 - Posesión M. P.',
    '4058: Junio 11 de 1911 - Posesión M. P.',
    '4108: Junio 14 de 1911 - Que estoy como siempreviva.',
    '4170: Junio 15 de 1911 (Día del Corpus) - Posesión M. P.',
    '4202: Junio 16 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
