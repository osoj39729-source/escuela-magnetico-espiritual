import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '4246: Junio 16 de 1911 - Escrita, Trincado',
    '4262: Junio 18 de 1911 - Posesión M. P.',
    '4305: Junio 20 de 1911 - Escrita, Trincado',
    '4361: Junio 20 de 1911 - Posesión M. P.',
    '4397: Junio 21 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
