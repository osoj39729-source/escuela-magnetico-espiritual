import json

content_path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_content.json'
esencia_path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json'

with open(content_path, 'r', encoding='utf-8') as f:
    content = json.load(f)
with open(esencia_path, 'r', encoding='utf-8') as f:
    esencia = json.load(f)

content_keys = list(content.keys())
new_esencia = {}

for ck in content_keys:
    numeric_id = ck.split(':')[0]
    # Try exact match first
    if ck in esencia:
        new_esencia[ck] = esencia[ck]
    else:
        # Try finding by numeric ID
        found = False
        for ek, ev in esencia.items():
            if ek.startswith(numeric_id + ':'):
                new_esencia[ck] = ev
                found = True
                break
        if not found:
            print(f"Missing node: {ck}")

with open(esencia_path, 'w', encoding='utf-8') as f:
    json.dump(new_esencia, f, indent=2, ensure_ascii=False)

print(f"Limpieza completada. Nodos finales: {len(new_esencia)}")
