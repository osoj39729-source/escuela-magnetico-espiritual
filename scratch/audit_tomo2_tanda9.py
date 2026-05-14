import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '4039: Sin perder posesión el medium dijo - María de Nazaret.',
    '4126: Enero 28 Hora 21 (Portillo) - ¿Está también demente, Virret de Abus Amet?',
    '4286: Febrero 4 de 1912 (Portillo) - hay en disidencia?',
    '4428: Se retiró el espíritu y nos elevamos  desdoblados, el medium, el vidente González y yo, formamos un triángulo, viendo las - desmayar.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
