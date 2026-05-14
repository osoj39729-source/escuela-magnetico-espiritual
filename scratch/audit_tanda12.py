import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '1880: Enero 16 de 1911 - Obrar vosotros, porque lo quiero yo.',
    '1918: Enero 15 de 1911 - Escrita, Trincado',
    '1957: Enero 24 de 1911 - Su bendita bendicin.',
    '2005: Enero 24 de 1911 - Escrita, Trincado',
    '2087: Enero 27 de 1911 - Posesin de M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
