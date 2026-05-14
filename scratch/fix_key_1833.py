import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

# Find the wrong key and rename it
wrong_key = '1833: Enero 3 de 1911 - slo con tan gran ayuda pudo ser salvado.'
correct_key = '1833: Enero 3 de 1911 - sólo con tan gran ayuda pudo ser salvado.'

if wrong_key in d:
    d[correct_key] = d.pop(wrong_key)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
