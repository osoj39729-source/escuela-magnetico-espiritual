import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '4706: Febrero 6 de 1912 - Cleopatra',
    '4721: Febrero 9 de 1912 - El hombre Juez',
    '4752: Febrero 11 de 1912 (Portillo) - Monje de Mont -Blanc',
    '5026: Febrero 11 de 1912 Hora 21 (Portillo) - Chuilid de Lid Marte',
    '5223: Febrero 17 de 1912 (Portillo) - María Box de Foch'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
