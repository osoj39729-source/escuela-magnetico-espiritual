import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '7752: Marzo 24 de 1912  (Portillo) - El  Juez.',
    '7813: A  continuación  se  presento  en  Juicio  la  fracción  de  disidentes  mahometanos  del  Juicio  celebrado  a  ellos  el  3  de  Marzo  y - y partieron a Sión.',
    '7878: Marzo 24 de 1912  (Hora 20)  (Portillo) - Cuarta nebulosa.  Cantemos a Eloi.',
    '8036: Marzo  26  de  1912  (Portillo) - Jesús  de  Nazaret.',
    '8195: Pidió entrada el Espíritu de una mujer; venia con otras muchas, que habían sido disidentes en el Juicio Monjil  Posesionado - Adelaida  Suxter  Austria'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = 'MISSING'

print(json.dumps(results, indent=2, ensure_ascii=False))
