import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Primer_Rayo_de_Luz": {
        "palabras_clave": ["anuncio", "libertad", "juicio", "controversia", "luz"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#5: ESCUELA MAGNETICO- ESPIRITUAL DE LA COMUNA UNIVERSAL: EL PRIMER RAYO DE LUZ JUICIO CRÍTICO A LA CONTROVERSIA CATÓLICO - ANARQUISTA Primera Edición: Junio de 1922 Segunda Edición: Febrero de 1932"],
        "contexto_real": "Obra fundamental que marca el inicio de la era de la libertad de conciencia y el juicio a los sistemas extremos de la sociedad."
    },
    "Ideas_Propias": {
        "palabras_clave": ["razón", "autonomía", "pensamiento", "estudio", "individual"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#22: CONSEJOS Y RECOMENDACIONES DE LA ESCUELA MAGNETICO ESPIRITUAL"],
        "contexto_real": "Capacidad del espíritu de generar su propio criterio basado en el estudio racional, sin depender de dogmas ajenos."
    },
    "Solidaridad_Universal": {
        "palabras_clave": ["universo", "unión", "familia", "cosmos", "interdependencia"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#63: PROCLAMA:", "primer-rayo-de-luz_esencia.json#65: El Universo Solidarizado: El Mundo todo Comunizado: La LEY es una. La substancia una"],
        "contexto_real": "Principio metafísico que establece la unidad y el apoyo mutuo entre todos los mundos y seres del universo."
    },
    "Unidad_de_Sustancia": {
        "palabras_clave": ["sustancia", "materia", "espíritu", "ley", "vibración"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#65: El Universo Solidarizado: El Mundo todo Comunizado: La LEY es una. La substancia una"],
        "contexto_real": "Axioma que postula que todo lo existente proviene de una única sustancia primordial en distintos grados de evolución."
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

print("Diccionario sináptico Rayo Tanda 1 actualizado.")
