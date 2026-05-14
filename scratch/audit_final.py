import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '10213: Noviembre 21 de 1911 - Posesión M. P.',
    '10272: Noviembre 24 de 1911 - Posesión M. Portillo',
    '10317: Noviembre 26 de 1911 - FIN DEL TOMO I'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
