import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '5741: Agosto 8 de 1911 - Posesión Pedro Portillo',
    '6883: Septiembre 4 de 1911 - Posesión P. Portillo',
    '7014: Septiembre 4 de 1911 (noche) - Posesión M. P.',
    '7064: Septiembre 5 de 1911 - Posesión M. P.',
    '7076: Septiembre 11 de 1911 - Les digo...aplicar las...limas.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
