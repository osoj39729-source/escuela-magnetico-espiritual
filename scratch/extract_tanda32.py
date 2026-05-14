import json

path = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_content.json'
with open(path, 'r', encoding='utf-8') as f:
    c = json.load(f)

keys = [
    "7920: Octubre 3 de 1911 - Posesión M. P.",
    "7948: Octubre 6 de 1911 - Posesión M. P.",
    "7986: Septiembre 10 de 1911 - Posesión M. P.",
    "8011: Octubre 13 de 1911 - Posesión P. Portillo",
    "8030: Octubre 15 de 1911 - Posesión M. P."
]

results = {k: c[k] for k in keys if k in c}

with open('F:/trincado/scratch/tanda32_raw.txt', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)
