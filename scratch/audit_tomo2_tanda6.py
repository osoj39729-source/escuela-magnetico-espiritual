import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '2738: Enero 7 de 1912 Portillo - El Secretario: Joaquín Trincado',
    '3037: A continuación dijo - merecer ser elegidos.',
    '3212: Enero 7 de 1912 (desarrollo) - Joaquín Trincado.',
    '3242: Enero 12 de 1912 Sesión de pruebas y desarrollo - Joaquín Trincado.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
