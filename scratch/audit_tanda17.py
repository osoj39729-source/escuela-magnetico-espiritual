import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '2842: Abril 7 de 1911 - Escrita, trincado.',
    '2871: Abril 10 de 1911 - Posesión M.P.',
    '2907: Abril 11 de 1911 - Posesión M.P.',
    '2938: Abril 14 de 1911 (Viernes Santo) - Posesión M. P.',
    '2988: Abril 18 de 1911 - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
