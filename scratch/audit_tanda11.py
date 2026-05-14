import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '1760: Enero 1 (Hora, 030) - Escrita, Trincado',
    '1785: Enero 1 de 1911 (Hora 7) - Francisco Xavier',
    '1813: Enero 3 de 1911 - por haberla arrancado de sus malos caminos.',
    '1833: Enero 3 de 1911 - slo con tan gran ayuda pudo ser salvado.',
    '1850: Enero 10 de 1911 - Escrita, Trincado'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
