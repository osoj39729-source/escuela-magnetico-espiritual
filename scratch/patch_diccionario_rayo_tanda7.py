import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Historia_Negra_de_la_Iglesia": {
        "palabras_clave": ["crímenes", "inquisición", "vaticano", "pasado", "ocultamiento"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#3961: Mis observaciones", "primer-rayo-de-luz_esencia.json#5478: Contrarrplica J.B. PODESTA: Septiembre 26"],
        "contexto_real": "Registro de los actos de opresión y violencia cometidos por la institución religiosa para imponer su hegemonía social y política."
    },
    "Peso_de_la_Prueba": {
        "palabras_clave": ["evidencia", "demostración", "ciencia", "dogma", "afirmación"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#4426: Contrarrplica de C. Montemayor: 18 DE SEPTIEMBRE"],
        "contexto_real": "Axioma lógico que exige que quien afirma la existencia de algo sobrenatural debe demostrarlo, no el oponente probar su inexistencia."
    },
    "Libertad_Integral": {
        "palabras_clave": ["materia", "espíritu", "ley de amor", "emancipación", "consciencia"],
        "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#4761: Mis observaciones"],
        "contexto_real": "Estado de autonomía total del ser que armoniza su realidad física con su origen espiritual bajo la única ley de amor."
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

print("Diccionario sináptico Rayo Tanda 7 actualizado.")
