import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Union_de_Potencias": {
        "palabras_clave": ["unión", "potencias", "espíritu", "materia", "renovación", "fuerza"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7566: EL MAESTRO JUEZ: IX"],
        "contexto_real": "La convergencia de la voluntad espiritual y la acción material para transformar la realidad social."
    },
    "Voz_del_Pueblo": {
        "palabras_clave": ["voz", "pueblo", "justicia", "redención", "monarcas", "cambio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7566: EL MAESTRO JUEZ: IX"],
        "contexto_real": "La expresión colectiva de la conciencia humana inspirada por el espíritu para reclamar su derecho a la libertad y la justicia."
    },
    "Renovacion_de_la_Tierra": {
        "palabras_clave": ["renovación", "tierra", "faz", "cambio", "futuro", "progreso"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7566: EL MAESTRO JUEZ: IX"],
        "contexto_real": "El proceso de transformación integral de las estructuras sociales, políticas y morales del planeta."
    },
    "Condena_del_Celibato": {
        "palabras_clave": ["condena", "celibato", "irracional", "aberración", "procreación", "muerte"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7931: X (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "Postura de la EMECU que identifica al celibato como una de las mayores causas de aberración y estancamiento espiritual."
    },
    "Ley_de_Procreacion": {
        "palabras_clave": ["ley", "procreación", "vida", "fecundidad", "encarnación", "plan"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7931: X (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "Axioma universal que establece la obligación y el derecho de los seres a colaborar en la perpetuación de la vida física."
    },
    "Desnaturalizacion_Humana": {
        "palabras_clave": ["desnaturalización", "humana", "error", "aberración", "celibato", "contra"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7931: X (escribe y proclama la ley y el axioma.)"],
        "contexto_real": "El estado de degradación moral y psicológica al que llega el ser cuando viola las leyes naturales de la vida."
    },
    "Instruccion_Comunal": {
        "palabras_clave": ["instrucción", "comunal", "educación", "niño", "sabiduría", "comuna"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7964: curso eterno y llega a hacer el axioma."],
        "contexto_real": "El sistema educativo de la Comuna de Amor y Ley que forma ciudadanos libres, conscientes y productivos."
    },
    "Seguridad_Social_Comuna": {
        "palabras_clave": ["seguridad", "social", "comuna", "garantía", "vejez", "enfermedad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#7964: curso eterno y llega a hacer el axioma."],
        "contexto_real": "El sistema de protección colectiva donde la sociedad garantiza todas las necesidades de sus miembros."
    },
    "Hermanos_de_Marten": {
        "palabras_clave": ["hermanos", "marten", "marte", "maestros", "ayuda", "visita"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8153: Acotaciones:"],
        "contexto_real": "Los espíritus maestros procedentes de Marte que asisten en la dirección espiritual de la Tierra."
    },
    "Inexistencia_de_Santos": {
        "palabras_clave": ["inexistencia", "santos", "idolatría", "dogma", "eloí", "único"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8153: Acotaciones:"],
        "contexto_real": "Axioma que rechaza la adoración de seres humanos o espíritus, reconociendo solo la pureza absoluta en el Creador."
    },
    "Reciprocidad_Cosmica": {
        "palabras_clave": ["reciprocidad", "cósmica", "intercambio", "mundos", "solidaridad", "visita"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8153: Acotaciones:"],
        "contexto_real": "El flujo constante de ayuda y conocimiento entre los diferentes mundos habitados del universo."
    },
    "Ciencia_Espiritismo": {
        "palabras_clave": ["ciencia", "espiritismo", "racional", "estudio", "leyes", "universal"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8306: CAPTULO V: Explicacin del espiritismo"],
        "contexto_real": "La definición del espiritismo como el estudio metódico y racional de las leyes del espíritu y el universo."
    },
    "Sintesis_Doctrinal": {
        "palabras_clave": ["síntesis", "doctrinal", "resumen", "final", "base", "fundamento"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8306: CAPTULO V: Explicacin del espiritismo"],
        "contexto_real": "La recopilación final de los principios fundamentales que rigen la vida y el progreso espiritual."
    },
    "Universalidad_del_Espiritismo": {
        "palabras_clave": ["universalidad", "espiritismo", "todo", "mundos", "única", "ley"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8306: CAPTULO V: Explicacin del espiritismo"],
        "contexto_real": "El hecho de que los principios del espiritismo racional son los mismos en todo el infinito."
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

print("Diccionario Tanda 15 (Asiento) actualizado.")
