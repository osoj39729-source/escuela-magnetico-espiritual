import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Alianza_Trono_Altar": {
        "palabras_clave": ["emperador", "papa", "poder civil", "poder religioso", "coacción"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2592: Párrafo IV: LA FALACIAYLA FUERZA BRUTAS JUNTAS"],
        "contexto_real": "Pacto político-religioso iniciado en el Bajo Imperio Romano para el control absoluto de la humanidad mediante la fuerza física y espiritual."
    },
    "Oscurantismo_Papal": {
        "palabras_clave": ["ignorancia", "prohibición", "razón amordazada", "miedo", "templos"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2675: Párrafo V: LA IGLESIA CATOLICA IMPONE LA IGNORANCIA"],
        "contexto_real": "Estrategia deliberada de la Iglesia para mantener a las masas en el analfabetismo espiritual y material, asegurando la supervivencia del dogma."
    },
    "Fobia_Papal": {
        "palabras_clave": ["españa", "odio", "persecución", "vaticano", "independencia"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2735: Párrafo VI: LA ESPAÑAYLA FOBIA DE LOS PAPAS"],
        "contexto_real": "Antagonismo sistemático del Vaticano contra cualquier nación o individuo que manifieste independencia de criterio, ensañándose históricamente con España."
    },
    "Lascivia_Papal": {
        "palabras_clave": ["concupiscencia", "vicio", "crimen", "vaticano", "escándalo"],
        "nodos_sinapticos": ["buscando-a-dios-joaquin-trincado_esencia.json#2890: Párrafo VII: LA CONCUPISCENCIA ESTA EN AUGE"],
        "contexto_real": "Degradación moral extrema de las jerarquías romanas, documentada por la historia como prueba de la expulsión del Dios de Amor de la institución."
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

print("Diccionario sináptico Tanda 2 actualizado.")
