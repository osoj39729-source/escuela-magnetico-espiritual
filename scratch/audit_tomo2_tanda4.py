import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

keys = [
    '2187: Posesión Portillo - Posesión Portillo',
    '2506: Diciembre 31 de 1911 Hora 24 a 01 de Enero de 1912 - Sé que no estoy sólo ni perdido.',
    '2523: Paz y amor  os traigo y la felicitación de la universalidad, para que toméis aliento en las luchas que os esperan en el nuevo - y ánimo y no es malo.',
    '2539: Qué  hermosa  armonía  hermanos  Esta  sí  es  la  paz  que  da  alegría  y  felicidad;  no  podría  faltaros  el  saludo  de  la  viajera  y - Fuera tan cumplida y llana.'
]

results = {}
for k in keys:
    if k in d:
        results[k] = all(field in d[k] for field in ['Piloto', 'Idea', 'Ejemplo', 'Cita', 'Sinapsis'])
    else:
        results[k] = "MISSING"

print(json.dumps(results, indent=2))
