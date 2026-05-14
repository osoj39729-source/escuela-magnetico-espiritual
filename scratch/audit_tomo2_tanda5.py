import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '2557: Hermano aún voy con mi botiquín para el espíritu enfermo hoy no es día pero lo llevo por si acaso; en esta hora, no os había - para correr siempre dónde hay dolor.',
    '2584: Enero 1 de 1912 Hora 12 - del que por justicia lucha.',
    '2617: Enero 2 de 1912 - Yo, pues, usé de esta llave.',
    '2689: POSESION LL - Catalina'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
