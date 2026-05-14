import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Quimica_Universal": {
        "palabras_clave": ["química", "alquimia", "transformación", "materia", "indestructible"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5139: CAPTULO SEXTO: LA QUMICA ANTE EL ESPIRITISMO"],
        "contexto_real": "La ciencia divina y natural que, mediante la ley de afinidad, combina, separa y transforma incesantemente la materia para servir de herramienta evolutiva al espíritu."
    },
    "Transformacion_Material": {
        "palabras_clave": ["transformación", "cambio", "eternidad", "materia", "destrucción"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5139: CAPTULO SEXTO: LA QUMICA ANTE EL ESPIRITISMO"],
        "contexto_real": "El principio químico y filosófico de que en el universo nada se crea de la nada ni se aniquila, todo cambia de forma y estado según su progreso."
    },
    "Alquimia_Espiritual": {
        "palabras_clave": ["alquimia", "química", "espíritu", "madre", "ciencia"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5139: CAPTULO SEXTO: LA QUMICA ANTE EL ESPIRITISMO"],
        "contexto_real": "La ciencia excelsa, madre de la química moderna, que comprende no solo la reacción material sino el influjo del espíritu que la causa."
    },
    "Astronomia_Espiritual": {
        "palabras_clave": ["astronomía", "telescopio", "mundos", "universo", "infinidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5439: CAPITULO SPTIMO: LA ASTRONOMA ANTE EL ESPIRITISMO"],
        "contexto_real": "La astronomía entendida no solo como el conteo material de estrellas, sino como la demostración física de la infinitud de las escuelas del espíritu."
    },
    "Pluralidad_de_Mundos": {
        "palabras_clave": ["pluralidad", "mundos", "habitados", "universo", "escuelas"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5439: CAPITULO SPTIMO: LA ASTRONOMA ANTE EL ESPIRITISMO"],
        "contexto_real": "El axioma espiritista, comprobado por la astronomía, de que todos los cuerpos celestes del universo están habitados por espíritus en distintos grados de evolución."
    },
    "Fin_del_Geocentrismo": {
        "palabras_clave": ["geocentrismo", "religión", "tierra", "centro", "error"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5439: CAPITULO SPTIMO: LA ASTRONOMA ANTE EL ESPIRITISMO"],
        "contexto_real": "La caída del dogma religioso que situaba a la Tierra en el centro de la creación divina, revelándola como un simple grano de arena cósmico."
    },
    "Electricidad_Universal": {
        "palabras_clave": ["electricidad", "éter", "pantógeno", "materia prima", "creación"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5691: CAPTULO OCTAVO: LA ELECTRICIDAD Y EL ESPIRITISMO"],
        "contexto_real": "La sustancia primordial y fuerza omnipresente (Éter) que sirve como materia prima para toda la creación y vehículo inmediato del pensamiento y la voluntad del espíritu."
    },
    "Vehiculo_del_Espiritu": {
        "palabras_clave": ["vehículo", "electricidad", "pensamiento", "voluntad", "transmisión"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5691: CAPTULO OCTAVO: LA ELECTRICIDAD Y EL ESPIRITISMO"],
        "contexto_real": "La función fundamental de la electricidad como el medio a través del cual el espíritu inmaterial ejerce su fuerza sobre la materia densa."
    },
    "Fuerza_Omnipotente": {
        "palabras_clave": ["fuerza", "omnipotente", "madre", "creado", "electricidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5691: CAPTULO OCTAVO: LA ELECTRICIDAD Y EL ESPIRITISMO"],
        "contexto_real": "La designación dada por Trincado en 1906 a la Electricidad, confirmando que en ella reside la potencia creadora y transformadora del universo."
    },
    "Patria_Universal": {
        "palabras_clave": ["patria", "universal", "universo", "fronteras", "hogar"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5993: CAPITULO NOVENO: LA PATRIA DEL ESPIRITISMO"],
        "contexto_real": "El concepto de que todo el universo es el hogar del espíritu inmortal, hacia cuya unidad y fraternidad tienden todos los mundos y naciones superando las divisiones territoriales."
    },
    "Solidaridad_Gradual": {
        "palabras_clave": ["solidaridad", "gradual", "patria chica", "amor", "pedagogía"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5993: CAPITULO NOVENO: LA PATRIA DEL ESPIRITISMO"],
        "contexto_real": "La ley pedagógica que establece que no se puede amar al todo universal sin haber aprendido primero a amar y servir a la fracción local (familia y nación)."
    },
    "Fin_de_las_Fronteras": {
        "palabras_clave": ["fronteras", "abolición", "mundo comunizado", "unión", "fraternidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#5993: CAPITULO NOVENO: LA PATRIA DEL ESPIRITISMO"],
        "contexto_real": "El destino evolutivo ineludible de la humanidad de fundirse en un solo pueblo y un solo gobierno regido por el espiritismo, sin barreras nacionales."
    },
    "Patriotismo_vs_Patrioterismo": {
        "palabras_clave": ["patriotismo", "patrioterismo", "diferencia", "progreso", "odio"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6064: PRRAFO II: EL PATRIOTISMO ES LEY INELUDIBLE..."],
        "contexto_real": "La confrontación entre el amor constructivo a la patria (patriotismo) y el nacionalismo egoísta y agresivo (patrioterismo)."
    },
    "Defensa_Justa": {
        "palabras_clave": ["defensa", "justa", "derecho", "patria", "dignidad"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6064: PRRAFO II: EL PATRIOTISMO ES LEY INELUDIBLE..."],
        "contexto_real": "El deber ineludible del patriota de rechazar toda violencia ofensiva, pero de defender hasta el sacrificio la dignidad e integridad de su pueblo ante el ataque."
    },
    "Progreso_Nacional": {
        "palabras_clave": ["progreso", "nación", "patriotismo", "espiritismo", "amor"],
        "nodos_sinapticos": ["el-espiritismo-estudiado_esencia.json#6064: PRRAFO II: EL PATRIOTISMO ES LEY INELUDIBLE..."],
        "contexto_real": "El verdadero fruto del patriotismo: el trabajo constante por la educación, la ciencia, la justicia social y el bienestar material de la propia nación."
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

print("Diccionario Tanda 8 actualizado.")
