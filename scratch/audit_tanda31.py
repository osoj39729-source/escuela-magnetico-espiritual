import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '7609: Septiembre 24 de 1911 - ------',
    '7691: Septiembre 24 de 1911 (hora 21) - Posesión P. Portillo',
    '7725: Septiembre 31 de 1911 - Posesión P. Portillo',
    '7792: Octubre 1º de 1911 - Posesión P. Portillo',
    '7870: Octubre 1º de 1911 (Hora 21) - Posesión M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
