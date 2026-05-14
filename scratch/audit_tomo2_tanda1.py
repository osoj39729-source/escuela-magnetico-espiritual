import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '26: Al lector - Espiritismo Luz y Verdad.',
    '77: Noviembre 26 de 1911 (hora 20) Portillo - Posesión  M. P.',
    '232: Diciembre 1 de 1911 - que al hombre lo hace temer.',
    '274: Diciembre 3 de 1911   (Escrita Trincado) - como mandado me queda.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
