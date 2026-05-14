import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '2115: Enero 31 de 1911 - Posesión de M. P.',
    '2171: Febrero 1 de 1911 - Posesión se M.P.',
    '2196: Febrero 3 de 1911 - Posesión de M.P.',
    '2229: Febrero 7 de 1911 - Posesión de M.P.',
    '2261: Febrero 10 de 1911 - Posesión de M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
