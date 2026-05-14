import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '3663: Desdoblamiento y visión - Trincado.',
    '3720: Enero 22 de 1912 (Portillo) - Evist Evist',
    '3850: Enero 26 de 1912 - Joaquín Trincado',
    '3871: Enero 28 de 1912 (Posesión Portillo) - Che Auffer'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
