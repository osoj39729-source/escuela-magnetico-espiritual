import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '1579: Julio 26 de 1910 - Posesión de M. P.',
    '1645: Julio 29 de 1910 - Advertencia',
    '1705: Diciembre 31 de 1910 - Escrita',
    '1731: Enero 1 de 1911 (Hora 0) - Joaquín.',
    '1745: Enero 1 de 1911 (Hora 010) - Silvestre'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
