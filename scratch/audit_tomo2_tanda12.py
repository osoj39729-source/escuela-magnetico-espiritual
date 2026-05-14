import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '5469: Febrero 18 de 1912 (Portillo) Hora 20 - Teresa de Jesús.',
    '5562: Febrero 19 de 1912 (Posesión Portillo) - Joaquín  Trincado',
    '5694: Febrero 20 de 1912  (Portillo) - Joaquín  Trincado',
    '5818: Febrero 25 de 1912  (Portillo) - Calvino  y  Lutero',
    '6024: |Hosanna!     Alegríos en el Señor    Estamos rehabilitados al trabajo es la orden ¿Eh? Si para nuestros jueces, todo - No hago comentario, dejemos al tiempo su acción.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
