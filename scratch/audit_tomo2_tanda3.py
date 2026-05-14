import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '1295: Diciembre 8 de 1911 (Portillo) - Trincado.',
    '1518: Diciembre 17 de 1911 (Portillo) - Francisco Xavier',
    '1807: Durante esta discusion, se posesiono el medium Portillo anunciandosenos la viajera le d permiso y dijo - Con el espiritualismo  infiel.',
    '1946: Diciembre 17  de 1911 Hora 21 Portillo - bolo.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
