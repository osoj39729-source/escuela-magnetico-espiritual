import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Syllabus_Errorum_Critica": {
        "palabras_clave": ["syllabus", "pío IX", "progreso", "condena", "libertad"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3222: Capítulo Undécimo: MI SITUACIÓN, EL SILLABUSYCONDENASACLÉRIGOS"],
        "contexto_real": "Documento papal que condena las libertades modernas y el progreso, interpretado por el autor como la prueba definitiva de la ceguera dogmática."
    },
    "Nuevos_Caminos_Espirituales": {
        "palabras_clave": ["búsqueda", "naturaleza", "emancipación", "verdad", "conciencia"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3224: Párrafo I: BUSCANDO NUEVOS CAMINOS"],
        "contexto_real": "Rutas de pensamiento libre que prescinden de templos y sacerdotes para encontrar al Creador en la ley natural."
    },
    "Majando_Granzas": {
        "palabras_clave": ["purificación", "historia", "dogma", "verdad", "trabajo arduo"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3272: Párrafo II: MAJANDO LAS GRANZAS"],
        "contexto_real": "Proceso de análisis crítico necesario para separar los errores religiosos de la verdadera esencia espiritual oculta en la historia."
    },
    "Rodrigo_Borgia_Alejandro_VI": {
        "palabras_clave": ["borgia", "papa y papá", "nepotismo", "lascivia", "crimen"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#3917: Párrafo IV: HISTORIA INTERESANTE, UN PAPAYPAPÁ QUE HACE RAYA. RODRIGO"],
        "contexto_real": "Personificación de la corrupción papal extrema, que utilizó la institución para fines personales y familiares, manchando la sede romana."
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

print("Diccionario sináptico Tanda 4 actualizado.")
