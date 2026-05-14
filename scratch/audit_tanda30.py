import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '7153: Septiembre 8 de 1911 (hora 12 del día) - Posesión M. P.',
    '7210: Septiembre 8 (noche) - Posesión P. Portillo',
    '7240: Septiembre 10 de 1911 - Posesión P. Portillo',
    '7352: Septiembre 10 de 1911 (Hora 21) - Posesión M. P.',
    '7429: Septiembre 13 de 1911 - Posesión Portillo'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
