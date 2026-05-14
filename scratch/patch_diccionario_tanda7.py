import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Savonarola_Precursor": {
        "palabras_clave": ["savonarola", "reforma", "mártir", "verdad", "hoguera"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#6305: Párrafo XV: SAVONAROLA"],
        "contexto_real": "Espíritu misionero que intentó purificar la moral católica desde dentro, siendo sacrificado por el papado de Alejandro VI."
    },
    "Victimas_del_Clero": {
        "palabras_clave": ["víctimas", "opresión", "crimen", "justicia", "testimonio"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#6582: Párrafo XVI: MUERTE DE LA CONDESAYESTUPRO DE VALENCIA.", "buscando-a-dios-joaquin-trincado_esencia.json#6975: Párrafo XVII: MUERTE DE JUANUCHO, VALENCIAYADUCIO"],
        "contexto_real": "Conjunto de almas sacrificadas por la ambición y malicia de las jerarquías religiosas, cuyos testimonios sustentan el juicio espiritual contra el dogma."
    },
    "Falsa_Santidad": {
        "palabras_clave": ["santidad", "pontífices", "máscara", "vicio", "engaño"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#7089: Párrafo XVIII: LA SANTIDAD DE LOS PONTIFICES"],
        "contexto_real": "Título honorífico usado por la Iglesia para divinizar a hombres que personificaron el vicio y el odio, burlándose del Dios de Amor."
    },
    "Supremacia_de_la_Razon": {
        "palabras_clave": ["razón", "chispa de eloí", "verdad", "luz", "discernimiento"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#7398: Capítulo Duodécimo: LA RAZÓN TIENE RAZÓN, LA IGLESIA CATÓLICA MIENTE"],
        "contexto_real": "Axioma doctrinal que establece a la razón como el único juez válido para el espíritu, por encima de cualquier revelación dogmática."
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

print("Diccionario sináptico Tanda 7 actualizado.")
