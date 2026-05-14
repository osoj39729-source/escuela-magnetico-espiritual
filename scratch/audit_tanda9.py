import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '1429: Julio 18 de 1910 (hora 12 del día) - hecho, al que no usó de misericordia”.',
    '1472: Julio 19 de 1910 - Escrita, Trincado',
    '1501: Julio 21 de 1910 - Posesión de M.P.',
    '1524: Julio 22 de 1910 - María de Nazaret',
    '1548: Julio 24 de 1910 - Francisco Xavier'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
