import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

# Agregar 'Rigor' como concepto de la EMECU (aparece en decenas de nodos)
if 'Rigor' not in dic['CONCEPTOS']:
    dic['CONCEPTOS']['Rigor'] = {
        "palabras_clave": ["rigor", "disciplina", "exactitud", "método", "precisión", "ciencia", "EMECU"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#GLOBAL"],
        "contexto_real": "El principio de exactitud científica y disciplina racional que la EMECU exige en el estudio y transmisión de la doctrina, sin concesiones al misticismo ni a la interpretación arbitraria."
    }
    print('Concepto Rigor agregado al diccionario.')
else:
    print('Concepto Rigor ya existia en el diccionario.')

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)
