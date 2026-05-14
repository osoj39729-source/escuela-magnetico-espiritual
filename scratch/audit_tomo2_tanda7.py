import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '3290: Enero 14 de 1912 (Portillo) - Antonio Rufo.',
    '3402: En este momento desdobló todo mi yo y acompañado por el espíritu del vidente dije ahora llega un niño que pide al rey - Juan Rux',
    '3453: Enero 14 Hora 21 (Portillo) - El Crítico',
    '3502: Enero 21 de 1912 (Portillo) - Che Auffer En autos de Fiscal.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
