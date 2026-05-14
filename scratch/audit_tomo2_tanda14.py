import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '6822: Con  tres satélites y  dos  luminares,  con  forma  ovo-esferoidal    que,  aunque  parezca  contrario,  en  la  ley  que  poco conocéis, - Sholis  Sholis',
    '6869: Marzo 5 de 1912  (Portillo) - Juilis  Juilis  del  Gof Duf.',
    '7009: Marzo 8 de 1912 (Portillo) - Napoleón',
    '7131: Marzo  11  de  1912  (Portillo) - Hombre real.  En Sevilla.',
    '7243: Continúo el  Juicio    Sin  desposesionarse  el  medium,  dijo  Aquí estamos   ¿Por  qué se  nos  llama?    ¿Por  qué la  ley  nos - Cleopatra'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
