import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    "7920: Octubre 3 de 1911 - Posesión M. P.",
    "7948: Octubre 6 de 1911 - Posesión M. P.",
    "7986: Septiembre 10 de 1911 - Posesión M. P.",
    "8011: Octubre 13 de 1911 - Posesión P. Portillo",
    "8030: Octubre 15 de 1911 - Posesión M. P."
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
