import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '6067: Febrero 25 de 1912 Hora 20  (Portillo) - El  Espíritu  de  Verdad',
    '6320: Marzo 1 de 1912  (Portillo) - Xeim  Xeim',
    '6487: Marzo 3 de 1912  (Portillo) - Mahoma',
    '6693: Marzo 3 de 1912 (Portillo) - Sholis Sholis del mundo Eg Eg.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
