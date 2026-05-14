import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '3752: Junio 4 de 1911 - Posesión M. P.',
    '3795: Junio 7 de 1911 - Posesión M. P.',
    '3838: Junio 8 de 1911 - Posesión M. P.',
    '3891: Junio 9 de 1911 - Escrita, Trincado',
    '3938: Junio 10 de 1911 - Escrita, Trincado'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
