import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '2698: Marzo 28 de 1911 - Posesión de M. P`.',
    '2718: Marzo 31 de 1911 - Escrita, Trincado',
    '2724: Abril 1 de 1911 - Escrita, Trincado',
    '2770: Abril 4 de 1911 - Natalicio de Francisco Xavier',
    '2811: Abril 7 de 1911 - El regalo del día'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
