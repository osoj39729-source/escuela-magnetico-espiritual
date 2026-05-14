import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Hipocresia_Eclesiastica": {
        "palabras_clave": ["doble vida", "velos", "prevaricación", "imagen pública", "falsedad"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#4210: Párrafo V: LA CONDESA DE VALLADOLID ESPOSA DE BORGIA."],
        "contexto_real": "Base estructural de la institución religiosa donde la práctica privada de los jerarcas contradice sistemáticamente su prédica pública."
    },
    "Bacanales_Vaticanas": {
        "palabras_clave": ["libertinaje", "orgía", "alejandro VI", "vicio", "profanación"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#4714: Párrafo VII: HORRORESYBACANAL"],
        "contexto_real": "Periodos históricos de extrema degradación sensual dentro de la sede papal, que transformaron el santuario en centro de vicio."
    },
    "Cainismo_Eclesiastico": {
        "palabras_clave": ["fratricidio", "borgia", "ambición", "asesinato", "tiara"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#5006: Párrafo VIII: BACANAL, CRÍMENESYFRATRICIDIO"],
        "contexto_real": "Conflicto sangriento interno en las jerarquías religiosas donde los lazos de sangre se sacrifican por el poder y la supremacía dogmática."
    },
    "Espionaje_Vaticano": {
        "palabras_clave": ["espía", "intriga", "confesionario", "control", "secretos"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#5205: Párrafo IX: UN ESPÍA"],
        "contexto_real": "Uso sistemático de la información confidencial y redes de informantes para el control de disidentes y el mantenimiento de la hegemonía papal."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v
    else:
        for node in v["nodos_sinapticos"]:
            if node not in dic["CONCEPTOS"][k]["nodos_sinapticos"]:
                dic["CONCEPTOS"][k]["nodos_sinapticos"].append(node)

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario sináptico Tanda 5 actualizado.")
