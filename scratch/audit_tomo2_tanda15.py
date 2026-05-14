import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '7301: Marzo 11 Hora 20  (Portillo) - Gof Duf.',
    '7493: Marzo 13  de 1912 - El  Juez.',
    '7508: Marzo 15 de 1912  (Portillo) - Joaquín  Trincado.',
    '7691: A continuación del Dell  Dell  Mí, el mismo medium dijo - Los une al suyo vuestra Madre, Maria.',
    '7741: NOTA  DE  INTERES - Joaquín  Trincado'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
