import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '328: Diciembre 3 de 1911 - Un enviado',
    '608: Diciembre  3 de 1911, hora 21 Portillo - que lo es, por cierto, para el malvado.',
    '820: Como tenía que hacer una pregunta de gran interés, pero que al aparecer era prematuro, se retiró sin la demostración - Del dios de la iniquidad.',
    '869: Diciembre 8 de 1911 Portillo - los atrapa, la serena águila real.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
