import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '2483: Febrero 23 de 1911 - Antonio de Padua',
    '2512: Marzo 19 de 1911 - Posesión de M. P.',
    '2601: Marzo 19 de 1911 - scrita, Trincado',
    '2634: Marzo 25 de 1911 - Escrita, Trincado',
    '2663: Marzo 26 de 1911 - Posesión de M. P.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
