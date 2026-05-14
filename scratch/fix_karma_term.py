import json

# 1. Update Dictionary
p_dict = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p_dict, 'r', encoding='utf-8') as f:
    d = json.load(f)

if 'Karma_Matrimonial' in d['CONCEPTOS']:
    content = d['CONCEPTOS'].pop('Karma_Matrimonial')
    content['palabras_clave'] = ['matrimonio', 'deuda', 'justicia', 'conyuge', 'expiacion']
    content['definicion'] = 'La aplicación de la Ley de Justicia en los vínculos de pareja, donde se saldan cuentas de vidas pasadas mediante la convivencia y el servicio.'
    d['CONCEPTOS']['Justicia_Matrimonial'] = content

with open(p_dict, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

# 2. Update Esencia
p_ese = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p_ese, 'r', encoding='utf-8') as f:
    e = json.load(f)

node_key = '3436: Mayo 21 de 1911 - Posesión M. P.'
if node_key in e:
    e[node_key]['Piloto'] = e[node_key]['Piloto'].replace('El karma matrimonial', 'La justicia matrimonial')
    e[node_key]['Sinapsis'] = [s.replace('Karma_Matrimonial', 'Justicia_Matrimonial') for s in e[node_key]['Sinapsis']]

with open(p_ese, 'w', encoding='utf-8') as f:
    json.dump(e, f, indent=2, ensure_ascii=False)

print("Corrección completada: 'Karma' eliminado y reemplazado por 'Justicia Matrimonial'.")
