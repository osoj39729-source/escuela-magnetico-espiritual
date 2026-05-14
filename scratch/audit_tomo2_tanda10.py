import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '4458: Hora 20 y 30 (Posesión Portillo) - Manuel Papa del siglo XII',
    '4577: El medium continuó sin perder posesión y dijo - Jesús de Nazaret.',
    '4688: Las  comunicaciones  y  trabajos  de  desdoblamiento,  contenidos  en  este  libro  como  en  los  anteriores,  han  sido  escrupulosamente - Doy fe yo.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
